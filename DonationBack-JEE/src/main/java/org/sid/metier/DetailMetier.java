package org.sid.metier;

import java.util.List;

import org.sid.entities.Detail;

public interface DetailMetier {
	
	public Detail addDetail(Detail detail);
	public void deleteDetail(Long id);
	public List<String> listDetails(Long id);

}
