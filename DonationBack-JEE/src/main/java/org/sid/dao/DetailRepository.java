package org.sid.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.sid.entities.Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DetailRepository extends JpaRepository<Detail, Long>{
	
	@Transactional
	@Modifying
	@Query("delete from Detail d  where d.projet.id=:id")
	public void deleteDetail(@Param("id") Long id);
	
	@Query("select d.path from Detail d where d.projet.id = :id")
	public List<String> projectDetail(@Param("id") Long id);
}
