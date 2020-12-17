package org.sid.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.apache.commons.io.FilenameUtils;
import org.sid.entities.Carte;
import org.sid.entities.Detail;
import org.sid.entities.Donation;
import org.sid.entities.Projet;
import org.sid.entities.Tag;
import org.sid.entities.User;
import org.sid.metier.CarteMetier;
import org.sid.metier.DetailMetier;
import org.sid.metier.ProjetMetier;
import org.sid.metier.TagMetier;
import org.sid.metier.UserMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class ProjetRestService {
	private static String uploadDirectory = System.getProperty("user.dir")+"/projectsImages";
	private List<String> uploadFilePath ;
	@Autowired
	ProjetMetier projetMetier;
	@Autowired
	TagMetier tagMetier;
	@Autowired
	UserMetier userMetier;
	@Autowired
	DetailMetier detailMetier;
	
	@RequestMapping(value="/projet", method=RequestMethod.POST)
	public Projet saveProjet(@RequestParam("files") MultipartFile[] file, @RequestParam("projet") String projet,@RequestParam("tags") String tags, @RequestParam("id") Long id ) throws IOException{
		saveUploadedFiles(file);
		String tag[] = tags.split(" ");
		Projet projetf = new ObjectMapper().readValue(projet, Projet.class);
		projetf.setUser(userMetier.getUser(id));
		projetf.setDateCreation();
		 Projet projetId = projetMetier.saveProjet(projetf);
		 System.err.println(projetId.getTags());

		 for (int i = 0; i < uploadFilePath.size(); i++) {
			 Detail detail = new Detail();
			 detail.setPath(uploadFilePath.get(i));
			 detail.setProjet(projetId);
			 System.err.println("*****"+uploadFilePath.get(i));
			 detailMetier.addDetail(detail);
		 }
		 
		for (int i = 0; i < tag.length; i++) {
			Tag tmp = tagMetier.getTag(tag[i]);
			System.err.println(tmp.getProjets());
			tmp.getProjets().add(projetId);
			projetId.getTags().add(tmp);
			tagMetier.addTag(tmp);
		}
		projetMetier.saveProjet(projetId);
		System.err.println("*****"+uploadFilePath.size());
		System.err.println("*****"+file.length);
		return null;
	}
	
	@RequestMapping(value="/projet", method=RequestMethod.GET)
	public List<Projet> listProjet(){
		List<Projet> tmp = projetMetier.listProjet();
		
		return addImage(tmp);
	}
	@RequestMapping(value="/Artprojet", method=RequestMethod.GET)
	public List<Projet> listArtProjet(){
		List<Projet> tmp =  projetMetier.listArtProjet();
		return addImage(tmp);
	}
	@RequestMapping(value="/Educationprojet", method=RequestMethod.GET)
	public List<Projet> listEducationProjet(){
		List<Projet> tmp = projetMetier.listEducationProjet();
		return addImage(tmp);
	}
	@RequestMapping(value="/Scienceprojet", method=RequestMethod.GET)
	public List<Projet> listScienceProjet(){
		List<Projet> tmp = projetMetier.listScienceProjet();
		return addImage(tmp);
	}
	@RequestMapping(value="/Waterprojet", method=RequestMethod.GET)
	public List<Projet> listWaterProjet(){
		List<Projet> tmp = projetMetier.listWaterProjet();
		return addImage(tmp);
	}
	
	
	
	@RequestMapping(value="/projetAddView", method=RequestMethod.GET)
	public Projet updateViews(@RequestParam String str){
		Long id = Long.valueOf(str);
		return projetMetier.updateProjet(id);
	}//*********************************************************************************************
	@RequestMapping(value="/projetAlmost", method=RequestMethod.GET)
	public List<Projet> almostTheGoal(){
		List<Projet> tmp = projetMetier.almostTheGoal();
	
		return addImage(tmp);
	}
	@RequestMapping(value="/projetMostDonated", method=RequestMethod.GET)
	public List<Projet> mostDonated(){
		List<Projet> tmp = projetMetier.mostDonated();
		return addImage(tmp);
	}
	@RequestMapping(value="/projetMostVisited", method=RequestMethod.GET)
	public List<Projet> mostVisited(){
		List<Projet> list = projetMetier.mostVisited();
		List<Projet> tmp = new ArrayList<>();
		for(int i=0;i<list.size() && i<12;i++ ){
			tmp.add(list.get(i));
		}
		return addImage(tmp);
	}
	
	@RequestMapping(value="/projetbyid", method=RequestMethod.GET)
	public Optional<Projet> getProjet(@RequestParam Long id){
		return projetMetier.getProjet(id);
	}
	@RequestMapping(value="projet", method=RequestMethod.DELETE)
	public boolean deleteProject(@RequestParam Long id){ // project id  
		projetMetier.deleteProject(id);
		detailMetier.deleteDetail(id);
		return true ;
	}
	
	
	@RequestMapping(value="/userProjects", method=RequestMethod.GET)
	public List<Projet> userProjects(@RequestParam("id") Long id){
		return projetMetier.userProjects(id);
	}
	
	
	
	private String saveUploadedFiles(MultipartFile[] files) throws IOException {
		 	int i = 0;
		 	uploadFilePath = new ArrayList<>();
	        // Make sure directory exists!
	        File uploadDir = new File(uploadDirectory);
	        uploadDir.mkdirs();
	        StringBuilder sb = new StringBuilder();
	        for (MultipartFile file : files) {
	            if (file.isEmpty()) {
	                continue;
	            }
	            uploadFilePath.add(uploadDirectory + "/" + file.getOriginalFilename());
	            System.out.println("uploadFilePath :"+uploadFilePath.get(i));
	            byte[] bytes = file.getBytes();
	            Path path = Paths.get(uploadFilePath.get(i));
	            Files.write(path, bytes);
	           
	 
	            sb.append(uploadFilePath.get(i)).append(", ");
	            System.out.println(uploadFilePath.get(i));
	            i++;
	        }
            System.out.println("String builder :"+sb.toString());
	        return sb.toString();
	    }
	 public List<Projet> addImage(List<Projet> tmp){
		 
			for (int i = 0; i < tmp.size(); i++) {
				String image ;
				List<String> details = detailMetier.listDetails(tmp.get(i).getId());
				File file = new File(details.get(0));
				if(file != null ){
					String encodeBase64 = null;
					try{
						
						String extension = FilenameUtils.getExtension(file.getName());
						FileInputStream fileInputStream = new FileInputStream(file);
						byte[] bytes = new byte[(int)file.length()];
						fileInputStream.read(bytes);
						encodeBase64 = Base64.getEncoder().encodeToString(bytes);
						image = "data:image/"+extension+";base64,"+encodeBase64;
						fileInputStream.close();
						tmp.get(i).setImage(image);
					} catch(Exception e ){
					}
				}

			}
		 return tmp;
	 }
	
	
	
	
	
}
