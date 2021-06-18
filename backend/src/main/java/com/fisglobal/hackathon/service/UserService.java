package com.fisglobal.hackathon.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.fisglobal.hackathon.model.DatabaseSequence;
import com.fisglobal.hackathon.model.User;

@Service
public class UserService {

	private MongoOperations mongoOperations;

	@Autowired
	public UserService(MongoOperations mongoOperations) {
		this.mongoOperations = mongoOperations;
	}


	public long generateSequence(String seqName) {
		DatabaseSequence counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
				new Update().inc("seq",1), options().returnNew(true).upsert(true),
				DatabaseSequence.class);
		return !Objects.isNull(counter) ? counter.getSeq() : 1;
	}

	public User getUserDetailsByName(String username) {
		Query query = new Query();
		query.addCriteria(Criteria.where("username").is(username));
		User user = mongoOperations.findOne(query, User.class);
		return user;
	}
	
	public boolean updatePassword(User user) {
		Query query = new Query();
	    query.addCriteria(Criteria.where("username").is(user.getUsername()));
	    User resultUser = mongoOperations.findOne(query, User.class);
	    resultUser.setPassword(user.getPassword());
	    mongoOperations.save(resultUser);
	   return true;
	}
	
}
