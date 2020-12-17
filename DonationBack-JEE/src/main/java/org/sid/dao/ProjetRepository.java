package org.sid.dao;

import java.util.List;

import org.sid.entities.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProjetRepository extends JpaRepository<Projet, Long> {

	@Query("select p from Projet p where p.total > p.budget*0.9")
	List<Projet> almostTheGoal();
	@Query("select p from Projet p order by p.nbrVues desc")
	List<Projet> mostVisited();
	@Query("select p from Projet p where p.user.id = :id")
	List<Projet> userProjects(@Param("id") Long id);
	@Query("select p from Projet p order by p.total desc")
	List<Projet> mostDonated();
	
}
