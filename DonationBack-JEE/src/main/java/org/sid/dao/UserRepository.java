package org.sid.dao;

import java.util.Optional;

import org.sid.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,	Long> {

	Optional<User> findByUserName(String userName);
}
