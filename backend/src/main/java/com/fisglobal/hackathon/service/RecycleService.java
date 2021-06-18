package com.fisglobal.hackathon.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.fisglobal.hackathon.model.DatabaseSequence;
import com.fisglobal.hackathon.model.RecycleSequence;
import com.fisglobal.hackathon.model.User;

@Service
public class RecycleService {

	private MongoOperations mongoOperations;

	@Autowired
	public RecycleService(MongoOperations mongoOperations) {
		this.mongoOperations = mongoOperations;
	}

	public long generateSequenceForRecycle(String seqName) {

		RecycleSequence counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
				new Update().inc("recycleSeq",1), options().returnNew(true).upsert(true),
				RecycleSequence.class);
		return !Objects.isNull(counter) ? counter.getRecycleSeq() : 1;

	}

}
