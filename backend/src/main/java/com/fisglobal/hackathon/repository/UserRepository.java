package com.fisglobal.hackathon.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fisglobal.hackathon.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long>{

}
