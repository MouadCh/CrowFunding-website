package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.Carte;



public interface CarteMetier {
	public Carte saveCarte(Carte carte);
	public List<Carte> listCartes();
	public Boolean deleteCarte(Carte carte);
	public Optional<Carte> getCarteById(Long id);

}
