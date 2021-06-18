package com.fisglobal.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fisglobal.hackathon.model.RecycleRequest;
import com.fisglobal.hackathon.model.User;
import com.fisglobal.hackathon.repository.RecycleRepository;
import com.fisglobal.hackathon.repository.UserRepository;
import com.fisglobal.hackathon.service.RecycleService;
import com.fisglobal.hackathon.service.UserService;

@CrossOrigin(origins = "http://localhost:4300")
@RestController
@RequestMapping("/recycle")
public class RecycleController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RecycleRepository recycleRepository;
	
	@Autowired
	private RecycleService recycleService;
	
	@Autowired
	private UserService userService;


	@GetMapping("/employees")
	public List<User> getAllEmployees() {
		return userRepository.findAll();
	}
		
	@PostMapping(path = "/login")
	public boolean login(@RequestBody User user) {
		User resultUser = userService.getUserDetailsByName(user.getUsername());
		if(resultUser != null){
			if (resultUser.getPassword().equals(user.getPassword())) {
				return true;
			}
		}
		return false;
		
		
	}
	
	@PostMapping(path = "/signup")
	public User signup(@RequestBody User user) {
		System.out.println("userName :: "+ user.getUsername());
		System.out.println("Password :: "+ user.getPassword());
		System.out.println("Email :: "+ user.getEmail());
		user.setId(userService.generateSequence(User.USER_SEQUENCE));
		return userRepository.save(user);
		
		
	}
	
	@PostMapping(path = "/createRecycleRequest")
	public RecycleRequest createRecycleRequest(@RequestBody RecycleRequest recycleRequest) {
		System.out.println("userName :: "+ recycleRequest.getItem());
		recycleRequest.setRequestId(recycleService.generateSequenceForRecycle(RecycleRequest.RECYCLE_SEQUENCE));
		return recycleRepository.save(recycleRequest);
		
		
	}
	
	@GetMapping(path = "/getAllRecycleRequestDetails")
	public List<RecycleRequest> getAllRecycleRequestDetails() {
		return recycleRepository.findAll();
		
		
	}
	
	@GetMapping(path = "/getRecycleRequestDetailsByUser")
	public List<RecycleRequest> getRecycleRequestDetailsByUser() {
		return recycleRepository.findAll();
		
		
	}
	
	@PostMapping(path = "/validateForgotPassword")
	public boolean validateForgotPassword(@RequestBody User user) {
		System.out.println("userName :: "+ user.getQuestion());
		System.out.println("Password :: "+ user.getAnswer());
		boolean result = false;
		User resultUser = userService.getUserDetailsByName(user.getUsername());
		if(resultUser != null) {
			if(resultUser.getQuestion().equalsIgnoreCase(user.getQuestion()) 
					&& resultUser.getAnswer().equalsIgnoreCase(user.getAnswer())){
				result = true; 
			}
		}
		return result;
	}
	
	@PostMapping(path = "/changePassword")
	public boolean changePassword(@RequestBody User user) {		
		return userService.updatePassword(user);

	}
	
}