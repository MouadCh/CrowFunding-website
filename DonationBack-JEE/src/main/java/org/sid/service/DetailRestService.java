package org.sid.service;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.sid.entities.Detail;
import org.sid.metier.DetailMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class DetailRestService {
	@Autowired
	DetailMetier detailMetier;
	
	@RequestMapping(value="/detail", method=RequestMethod.GET)
	public List<String> projetDetail(@RequestParam Long id){
		List<String> details = detailMetier.listDetails(id);
		List<String> images = new ArrayList<>();
		for (int i = 0; i < details.size(); i++) {
			File file = new File(details.get(i));
			if(file != null ){
				String encodeBase64 = null;
				try{
					String extension = FilenameUtils.getExtension(file.getName());
					FileInputStream fileInputStream = new FileInputStream(file);
					byte[] bytes = new byte[(int)file.length()];
					fileInputStream.read(bytes);
					encodeBase64 = Base64.getEncoder().encodeToString(bytes);
					images.add("data:image/"+extension+";base64,"+encodeBase64);
					fileInputStream.close();
					
				} catch(Exception e){}
				
			}
			
		}
		return images;
	}
}
