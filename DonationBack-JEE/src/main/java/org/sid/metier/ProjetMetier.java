package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Projet;



public interface ProjetMetier {

	public Projet saveProjet(Projet projet);
	public List<Projet> listProjet();
	public Boolean deleteProjet(Projet projet);
	public Optional<Projet> getProjet(Long id);
	public Projet getProjett(Long id);
	public Projet updateProjet(Long id);
	public List<Projet> almostTheGoal();
	public List<Projet> mostVisited();
	public List<Projet> userProjects(Long id);
	public boolean deleteProject(Long id);
	public List<Projet> listArtProjet();
	public List<Projet> listEducationProjet();
	public List<Projet> listScienceProjet();
	public List<Projet> listWaterProjet();
	public List<Projet> mostDonated();
	
	
}
