package org.sid.metier;

//import static org.assertj.core.api.Assertions.assertThatIllegalStateException; 

import java.util.List;
import java.util.Optional;

import org.sid.dao.ProjetRepository;
import org.sid.dao.TagRepository;
import org.sid.entities.Projet;
import org.sid.entities.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProjetMetierImp implements ProjetMetier {

	@Autowired 
	private ProjetRepository projetRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private TagMetierImp tagMetierImp;
	
	@Override
	public Projet saveProjet(Projet projet) {
		return projetRepository.save(projet);
	}

	@Override
	public List<Projet> listProjet() {
		return projetRepository.findAll();
	}

	@Override
	public Boolean deleteProjet(Projet projet) {
		projetRepository.delete(projet);
		return true;
	}

	@Override
	public Projet updateProjet(Long id) {
		Projet projet = this.getProjett(id);
		int tmp = projet.getNbrVues();
		projet.setNbrVues(++tmp);
		return this.saveProjet(projet);
		
	}

	@Override
	public Projet getProjett(Long id) {
		return projetRepository.getOne(id);
	}
	
	@Override
	public Optional<Projet> getProjet(Long id) {
		return projetRepository.findById(id);
	}

	@Override
	public List<Projet> almostTheGoal() {
		return projetRepository.almostTheGoal();
	}

	@Override
	public List<Projet> mostVisited() {
		return projetRepository.mostVisited();
	}
	
	@Override
	public List<Projet> mostDonated() {
		return projetRepository.mostDonated();
	}

	@Override
	public List<Projet> listArtProjet() {
		Tag tag = tagRepository.getOne((long) 1);
		return (List<Projet>) tag.getProjets();
	}

	@Override
	public List<Projet> listEducationProjet() {
		Tag tag = tagRepository.getOne((long) 2);
		return (List<Projet>) tag.getProjets();
	}

	@Override
	public List<Projet> listScienceProjet() {
		Tag tag = tagRepository.getOne((long) 4);
		return (List<Projet>) tag.getProjets();
	}

	@Override
	public List<Projet> listWaterProjet() {
		Tag tag = tagRepository.getOne((long) 3);
		return (List<Projet>) tag.getProjets();
	}

	@Override
	public List<Projet> userProjects(Long id) {
		return projetRepository.userProjects(id);
	}
	@Override
	public boolean deleteProject(Long id) {
		projetRepository.delete(this.getProjett(id));
		return true;
	}
	
	

}
