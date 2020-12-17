package org.sid.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Carte implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private int numeroCarte;
	private Date dateExp;
	private String proprietaire;
	@OneToOne(mappedBy="carte")
	private User user;
	@OneToMany(mappedBy="carte", fetch= FetchType.LAZY)
	private Collection<Donation> donations;
	
	
	public Carte() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Carte(int numeroCarte, Date dateExp, String proprietaire) {
		super();
		this.numeroCarte = numeroCarte;
		this.dateExp = dateExp;
		this.proprietaire = proprietaire;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getNumeroCarte() {
		return numeroCarte;
	}
	public void setNumeroCarte(int numeroCarte) {
		this.numeroCarte = numeroCarte;
	}
	public Date getDateExp() {
		return dateExp;
	}
	public void setDateExp(Date dateExp) {
		this.dateExp = dateExp;
	}
	public String getProprietaire() {
		return proprietaire;
	}
	public void setProprietaire(String proprietaire) {
		this.proprietaire = proprietaire;
	}
	@JsonIgnore
	public Collection<Donation> getDonations() {
		return donations;
	}
	public void setDonations(Collection<Donation> donations) {
		this.donations = donations;
	}
	@JsonIgnore
	public User getUser() {
		return user;
	}
	@JsonSetter
	public void setUser(User user) {
		this.user = user;
	}

	
}
