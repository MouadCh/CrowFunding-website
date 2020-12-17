package org.sid.metier;

import java.util.List;

import org.sid.entities.Commentaire;

public interface CommentaireMetier {
	
	public Commentaire addCommentaire(Commentaire commentaire);
	public List<Commentaire> listCommentaire(Long id);

}
