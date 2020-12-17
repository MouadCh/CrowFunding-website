package org.sid.jwt;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {
	private String jwt;

	public String getJwt() {
		return jwt;
	}

	public AuthenticationResponse(String jwt) {
		this.jwt = jwt;
	}
	

}
