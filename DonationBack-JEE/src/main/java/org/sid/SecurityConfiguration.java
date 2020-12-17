package org.sid;

import org.sid.filters.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
//@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter  {

	@Autowired
	MyUserDetailService myUserDetailsService;
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(myUserDetailsService);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
		.authorizeRequests().antMatchers("/authenticate").permitAll()
		.antMatchers("/projet").permitAll()
		.antMatchers("/projetAlmost").permitAll()
		.antMatchers("/projetMostVisited").permitAll()
		.antMatchers("/projetbyid").permitAll()
		.antMatchers("/commentaire").permitAll()
		.antMatchers("/inscription").permitAll()
		.antMatchers("//user").permitAll()
		.antMatchers("/userImage").permitAll()
		.antMatchers("/userByUserName").permitAll()
		.antMatchers("/modifierProfile").permitAll()
		.antMatchers("/projetMostDonated").permitAll()
		.antMatchers("/Waterprojet").permitAll()
		.antMatchers("/Scienceprojet").permitAll()
		.antMatchers("/Artprojet").permitAll()
		.antMatchers("/Educationprojet").permitAll()
//		.antMatchers("/carteById").hasRole("USER")
		.antMatchers("/carteById").permitAll()
		.antMatchers("/userProjects").permitAll()
		.antMatchers("/projetAddView").permitAll()
		.antMatchers("/detail").permitAll()
		.antMatchers("/donation").permitAll()
				.anyRequest().authenticated()
				.and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
			
	}
	@Bean
	public PasswordEncoder getPasswordEncoder(){
		return NoOpPasswordEncoder.getInstance();
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	
	
	
	
	

}
