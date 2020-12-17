package org.sid.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;


@Entity
public class User implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String userName;
	private String nom;
	private String prenom;
	private String email;
	private String password;
	private String imageUrl;
	private String role;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id_carte", referencedColumnName = "id")
	private Carte carte;
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	private Collection<Projet> projets;
	@OneToMany(mappedBy="user", fetch = FetchType.LAZY)
	private Collection<Commentaire> commentaires;

	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(String userName, String nom, String prenom, String email, String password, String role) {
		super();
		this.userName = userName;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Collection<Projet> getProjets() {
		return projets;
	}
	public void setProjets(Collection<Projet> projets) {
		this.projets = projets;
	}
@JsonIgnore
	public Collection<Commentaire> getCommentaires() {
		return commentaires;
	}
@JsonSetter
	public void setCommentaires(Collection<Commentaire> commentaires) {
		this.commentaires = commentaires;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Carte getCarte() {
		return carte;
	}

	public void setCarte(Carte carte) {
		this.carte = carte;
	}


	
	
}
