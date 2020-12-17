package org.sid.service;

import java.util.List; 

import javax.websocket.server.PathParam;

import org.sid.entities.Commentaire;
import org.sid.metier.CommentaireMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class CommentaireRestService {
	@Autowired
	CommentaireMetier commentaireMetier;
	
	@RequestMapping(value="/commentaire", method= RequestMethod.POST)
	public Commentaire addCommentaire(@RequestBody Commentaire commentaire) {
		commentaire.setDate();
		return commentaireMetier.addCommentaire(commentaire);
	}
	@RequestMapping(value="/commentaire", method= RequestMethod.GET)// selon id du projet
	public List<Commentaire> listCommentaire(@PathParam("id") Long id) {
		return commentaireMetier.listCommentaire(id);
	}

}
