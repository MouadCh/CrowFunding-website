package org.sid.metier;

import java.util.List;

import org.sid.entities.Tag;

public interface TagMetier {
	public Tag addTag(Tag tag);
	public boolean deleteTag(Tag tag);
	//public List<Tag> listTag(Long id);
	public Tag getTag(String nomTag);

}
