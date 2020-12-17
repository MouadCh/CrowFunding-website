package org.sid.metier;

import java.util.List;

import org.sid.dao.DetailRepository;
import org.sid.entities.Detail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailMetierImp implements DetailMetier {

	@Autowired
	private DetailRepository detailRepository;
	
	@Override
	public Detail addDetail(Detail detail) {
		return detailRepository.save(detail);
	}
	
	@Override
	public void deleteDetail(Long id) {
		detailRepository.deleteDetail(id);
		
	}

	@Override
	public List<String> listDetails(Long id) {
		return detailRepository.projectDetail(id);
	}

}
