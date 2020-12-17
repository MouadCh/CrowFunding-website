package org.sid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Commentaire implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String commentaire;
	private Date date;
	@ManyToOne
	@JoinColumn(name="id_user")
	private User user;
	@ManyToOne
	@JoinColumn(name="id_projet")
	private Projet projet;
	
	
	public Commentaire() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Commentaire(String commentaire, Date date) {
		super();
		this.commentaire = commentaire;
		this.date = date;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getCommentaire() {
		return commentaire;
	}
	
	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	public Date getDate() {
		return date;
	}
	public void setDate() {
		this.date = new Date();
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@JsonIgnore
	public Projet getProjet() {
		return projet;
	}
	@JsonSetter
	public void setProjet(Projet projet) {
		this.projet = projet;
	}
	
	
	
	
	

}
