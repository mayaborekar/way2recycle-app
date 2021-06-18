package com.fisglobal.hackathon.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fisglobal.hackathon.model.RecycleRequest;

public interface RecycleRepository extends MongoRepository<RecycleRequest, Long>{

}
