package org.sid.service;

import java.util.List;

import org.sid.entities.Donation;
import org.sid.metier.CarteMetier;
import org.sid.metier.DonationMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class DonationRestService {
	
	@Autowired
	private DonationMetier donationMetier;
	
	@RequestMapping(value="/donation", method=RequestMethod.POST)
	public Donation saveDonaion(@RequestBody Donation donation){
		return donationMetier.saveDonation(donation);
	}
	
	@RequestMapping(value="/donation", method=RequestMethod.GET)
	public List<Donation> listDonation(){
		return donationMetier.ListDonations();
	}

}
