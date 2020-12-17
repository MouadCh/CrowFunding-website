package org.sid.dao;

import java.util.List;

import org.sid.entities.Projet;
import org.sid.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TagRepository extends JpaRepository<Tag, Long>{

	public Tag findByNom(String nom);

}
