package org.sid.metier;

import java.util.List;
import java.util.Optional;

import org.sid.dao.UserRepository;
import org.sid.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserMetierImp implements UserMetier {

	@Autowired
	private UserRepository userRepository;
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> listUser() {
		
		return userRepository.findAll();
	}

	@Override
	public Boolean deleteCarte(User user) {
		this.userRepository.delete(user);
		return true;
	}

	@Override
	public  Optional<User> profil(Long id) {
		return userRepository.findById(id);
	}
	@Override
	public  User getUser(Long id) {
		return userRepository.getOne(id);
	}

	@Override
	public Optional<User> getUserByUserName(String userName) {
		return this.userRepository.findByUserName(userName);
	}

}
