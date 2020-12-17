package org.sid.metier;

import java.util.Date;
import java.util.List;

import org.sid.dao.DonationRepository;
import org.sid.dao.ProjetRepository;
import org.sid.entities.Donation;
import org.sid.entities.Projet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class DonationMetierImp implements DonationMetier {

	@Autowired
	private DonationRepository donationRepository;
	
	@Autowired
	private ProjetRepository projetRepository;
	
	@Override
	public Donation saveDonation(Donation donation) {

		System.out.println("IDD "+donation.getProjet().getId() );

		donation.setDateDonation(new Date());
		
		Projet prj = projetRepository.getOne( donation.getProjet().getId() );
		
		prj.setTotal(prj.getTotal()+donation.getMontant());
		prj.setFundersNmb(prj.getFundersNmb()+1);
		
		projetRepository.save(prj);
		
		
		
		return donationRepository.save(donation);
	}

	@Override
	public List<Donation> ListDonations() {
		return donationRepository.findAll();
	}

}
