package org.sid.metier;

import java.util.List;

import javax.transaction.Transactional;

import org.sid.dao.TagRepository;
import org.sid.entities.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class TagMetierImp implements TagMetier {

	@Autowired 
	TagRepository tagRepository;
	@Override
	public Tag addTag(Tag tag) {
		return tagRepository.save(tag);
	}

	@Override
	public boolean deleteTag(Tag tag) {
		tagRepository.delete(tag);
		return true;
	}

	@Override
	public Tag getTag(String nomTag) {
		return this.tagRepository.findByNom(nomTag);
	}


	
}
