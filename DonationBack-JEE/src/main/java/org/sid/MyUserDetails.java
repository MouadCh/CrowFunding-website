package org.sid;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.sid.entities.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyUserDetails implements UserDetails {

	private String userName;
	private String password;
	private List<GrantedAuthority> autorities;

	//"ROLE_USER"
	public  MyUserDetails(User user) {
		this.userName = user.getUserName();
		this.password = user.getPassword();
		if(user.getRole().equals("admin"))this.autorities = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
		if(user.getRole().equals("user"))this.autorities = Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
		
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return autorities;
	}


	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return userName;
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	

}
