package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.entities.User;



public interface UserMetier {
	
	public User saveUser(User user);
	public List<User> listUser();
	public Boolean deleteCarte(User user);
	public Optional<User> profil(Long id);
	public User getUser(Long id);
	public Optional<User> getUserByUserName(String userName);
}
