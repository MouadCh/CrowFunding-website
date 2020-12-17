package org.sid.dao;

import java.util.List;

import org.sid.entities.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {

@Query("select c from Commentaire c where c.projet.id = :id")
	List<Commentaire> getProjectComments(@Param("id") Long id);
}
