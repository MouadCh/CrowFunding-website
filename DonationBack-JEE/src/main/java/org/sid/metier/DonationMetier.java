package org.sid.metier;

import java.util.List;

import org.sid.entities.Donation;

public interface DonationMetier {

	public Donation saveDonation(Donation donation);
	public List<Donation> ListDonations();
}
