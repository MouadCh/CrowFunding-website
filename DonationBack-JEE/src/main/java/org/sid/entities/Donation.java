package org.sid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ManyToAny;

@Entity
public class Donation implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Date dateDonation;
	private int montant;
	@ManyToOne
	@JoinColumn(name="id_carte")
	private Carte carte;
	@ManyToOne
	@JoinColumn(name="id_projet")
	private Projet projet;
	
	
	public Donation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Donation(Date dateDonation, int montant) {
		super();
		this.dateDonation = dateDonation;
		this.montant = montant;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDateDonation() {
		return dateDonation;
	}
	public void setDateDonation(Date dateDonation) {
		this.dateDonation = dateDonation;
	}
	public int getMontant() {
		return montant;
	}
	public void setMontant(int montant) {
		this.montant = montant;
	}
	public Carte getCarte() {
		return carte;
	}
	public void setCarte(Carte carte) {
		this.carte = carte;
	}
	public Projet getProjet() {
		return projet;
	}
	public void setProjet(Projet projet) {
		this.projet = projet;
	}
	
}
