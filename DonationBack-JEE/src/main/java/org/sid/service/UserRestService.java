package org.sid.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.websocket.server.PathParam;

import org.apache.commons.io.FilenameUtils;
import org.sid.entities.Carte;
import org.sid.entities.User;
import org.sid.metier.CarteMetier;
import org.sid.metier.UserMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class UserRestService {
	
	public static String uploadDirectory = System.getProperty("user.dir")+"/upload";
	@Autowired
	UserMetier userMetier;
	@Autowired 
	CarteMetier carteMetier;
	 String uploadFilePath;
	 @Transactional
	@RequestMapping(value="/inscription", method=RequestMethod.POST)
	public boolean inscription(@RequestParam("file") MultipartFile[] file,@RequestParam("user") String user,@RequestParam("carte") String carte ) throws IOException{
		saveUploadedFiles(file);
		//System.out.println(file[0].toString());
		User userf = new ObjectMapper().readValue(user, User.class);
		Carte cartef = new ObjectMapper().readValue(carte, Carte.class);
		carteMetier.saveCarte(cartef);
		userf.setCarte(cartef);
		userf.setImageUrl(uploadFilePath);
		userf.setRole("user");
		userMetier.saveUser(userf);
		
		System.out.println("email"+userf.getEmail());
		System.out.println("hello");
		System.out.println("path : "+uploadFilePath);
		System.err.println(cartef.getNumeroCarte());
		return true;
	}
	 

	
	
	 private String saveUploadedFiles(MultipartFile[] files) throws IOException {
		 
	        // Make sure directory exists!
	        File uploadDir = new File(uploadDirectory);
	        uploadDir.mkdirs();
	        StringBuilder sb = new StringBuilder();
	        for (MultipartFile file : files) {
	            if (file.isEmpty()) {
	                continue;
	            }
	            uploadFilePath = uploadDirectory + "/" + file.getOriginalFilename();
	            System.out.println("uploadFilePath :"+uploadFilePath);
	            byte[] bytes = file.getBytes();
	            Path path = Paths.get(uploadFilePath);
	            Files.write(path, bytes);
	 
	            sb.append(uploadFilePath).append(", ");
	        }
	        return sb.toString();
	    }
	
	
	@RequestMapping(value="/user", method=RequestMethod.GET)
	public Optional<User> profil(@PathParam("id") Long id){
		return userMetier.profil(id);
	}
	@RequestMapping(value="/userByUserName", method=RequestMethod.GET)
	public Optional<User> profil(@PathParam("userName") String userName){
		return userMetier.getUserByUserName(userName);
	}
	
	@RequestMapping(value="/userImage", method=RequestMethod.GET)
	public String image(@PathParam("id") Long id){
		String image = null;
		User user = userMetier.getUser(id);
		System.err.println("imageUrl "+user.getImageUrl());
		File file = new File(user.getImageUrl());
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
			} catch(Exception e ){
			}
		}
		
		System.err.println(image);
		return image;
	}
	
	@RequestMapping(value="/modifierProfile", method=RequestMethod.PUT)
	public boolean modifierProfile(@RequestParam("file") MultipartFile[] file,@RequestParam("user") String user,@RequestParam("carte") String carte ) throws IOException{
		Carte cartef = new ObjectMapper().readValue(carte, Carte.class);
		carteMetier.saveCarte(cartef);
		User userf = new ObjectMapper().readValue(user, User.class);

		if(file.length != 0){
			saveUploadedFiles(file);
			userf.setImageUrl(uploadFilePath);
		} else {
			User userUrl = userMetier.getUser(userf.getId());
			userf.setImageUrl(userUrl.getImageUrl());
		}
		userf.setRole("user");
		userf.setCarte(cartef);
		userMetier.saveUser(userf);
		System.out.println("email"+userf.getEmail());
		System.out.println("hello");
		System.out.println("path : "+uploadFilePath);
		System.err.println("helllooooo");
		return true;
	}
	//****


}







