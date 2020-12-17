package org.sid.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

@Entity
public class Projet implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String titre;
	private String description;
	private Date dateCreation;
	private Date dateLimite;
	private int budget;
	private int rib;
	////
	private String story;
	
	private int fundersNmb;// le nbr des donateurs
	private int nbrVues;
	//
	private int total;
	private String image;
	
	@ManyToOne
	@JoinColumn(name="id_user")
	private User user;
	
	@OneToMany(mappedBy="projet", fetch=FetchType.LAZY)
	private Collection<Donation> donations;
	@ManyToMany
	@JoinTable(name="TAG_PRG")
	private Collection<Tag> tags = new ArrayList<>();
	@OneToMany(mappedBy="projet",fetch=FetchType.LAZY)
	private Collection<Commentaire> commentaires;
	@OneToMany(mappedBy="projet", fetch=FetchType.LAZY)
	private Collection<Detail> details;
	
	
	public Projet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Projet(String titre, String description, Date dateCreation, Date dateLimite, int budget, int rib,
			String story, int fundersNmb, int nbrVues, int total) {
		super();
		this.titre = titre;
		this.description = description;
		this.dateCreation = dateCreation;
		this.dateLimite = dateLimite;
		this.budget = budget;
		this.rib = rib;
		this.story = story;
		this.fundersNmb = fundersNmb;
		this.nbrVues = nbrVues;
		this.total = total;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation() {
		this.dateCreation = new Date();
	}
	public Date getDateLimite() {
		return dateLimite;
	}
	public void setDateLimite(Date dateLimite) {
		this.dateLimite = dateLimite;
	}
	public int getBudget() {
		return budget;
	}
	public void setBudget(int budget) {
		this.budget = budget;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	@JsonIgnore
	public User getUser() {
		return user;
	}
	@JsonSetter
	public void setUser(User user) {
		this.user = user;
	}
	@JsonIgnore
	public Collection<Donation> getDonations() {
		return donations;
	}
	public void setDonations(Collection<Donation> donations) {
		this.donations = donations;
	}
	@JsonIgnore
	public Collection<Tag> getTags() {
		return tags;
	}
	@JsonSetter
	public void setTags(Collection<Tag> tags) {
		this.tags = tags;
	}
	@JsonIgnore
	public Collection<Commentaire> getCommentaires() {
		return commentaires;
	}
	
	public void setCommentaires(Collection<Commentaire> commentaires) {
		this.commentaires = commentaires;
	}
	public int getRib() {
		return rib;
	}
	public void setRib(int rib) {
		this.rib = rib;
	}
	@JsonIgnore
	public Collection<Detail> getDetails() {
		return details;
	}
	@JsonSetter
	public void setDetails(Collection<Detail> details) {
		this.details = details;
	}
	public String getStory() {
		return story;
	}
	public void setStory(String story) {
		this.story = story;
	}
	public int getFundersNmb() {
		return fundersNmb;
	}
	public void setFundersNmb(int fundersNmb) {
		this.fundersNmb = fundersNmb;
	}
	public int getNbrVues() {
		return nbrVues;
	}
	public void setNbrVues(int nbrVues) {
		this.nbrVues = nbrVues;
	}

	/**
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * @param image the image to set
	 */
	public void setImage(String image) {
		this.image = image;
	}

	/**
	 * @param dateCreation the dateCreation to set
	 */
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}
	
	
	
	

}
