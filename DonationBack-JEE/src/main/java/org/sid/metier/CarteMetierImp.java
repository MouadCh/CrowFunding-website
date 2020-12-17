package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.dao.CarteRepository;
import org.sid.entities.Carte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class CarteMetierImp implements CarteMetier {

	@Autowired
	private CarteRepository carteRepository;
	@Override
	public Carte saveCarte(Carte carte) {
		return carteRepository.save(carte);
	}

	@Override
	public List<Carte> listCartes() {
		return carteRepository.findAll();
	}
	
	@Override
	public Boolean deleteCarte(Carte carte) {
		carteRepository.delete(carte);
		return true;
	}

	@Override
	public Optional<Carte> getCarteById(Long id) {
		return carteRepository.findById(id);
	}

}
