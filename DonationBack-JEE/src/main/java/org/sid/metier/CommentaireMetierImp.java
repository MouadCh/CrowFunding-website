package org.sid.metier;

import java.util.List;

import org.sid.dao.CommentaireRepository;
import org.sid.entities.Commentaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommentaireMetierImp implements CommentaireMetier {

	@Autowired
	private CommentaireRepository commentaireRepository;
	
	@Override
	public Commentaire addCommentaire(Commentaire commentaire) {
		return commentaireRepository.save(commentaire);
	}

	@Override
	public List<Commentaire> listCommentaire(Long id) {
		
		return commentaireRepository.getProjectComments(id);
	}
	
	

}
