package org.sid.service;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.sid.entities.Carte;
import org.sid.metier.CarteMetier;
import org.sid.metier.CarteMetierImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")

public class CarteRestService {
	
	@Autowired
	private CarteMetier carteMetier;
	
	@RequestMapping(value="/carte", method=RequestMethod.POST)
	public Carte saveCart(@RequestBody Carte carte) {
		return carteMetier.saveCarte(carte);
	}
	@RequestMapping(value="/carte", method=RequestMethod.GET)
	public List<Carte> listCartes() {
		return carteMetier.listCartes();
	}
	
	@RequestMapping(value="/carteById", method=RequestMethod.GET)
	public Optional<Carte> getCartById(@RequestParam Long id) {
		return carteMetier.getCarteById(id);
	}
	
	@RequestMapping(value="/carte", method=RequestMethod.DELETE)
	public Boolean deleteCarte(@RequestBody Carte carte) {
		return carteMetier.deleteCarte(carte);
	}
	
	

}
