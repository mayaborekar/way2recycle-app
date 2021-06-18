package com.fisglobal.hackathon.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "User")
public class User {

	@Transient
    public static final String USER_SEQUENCE = "users_sequence";
	
    @Id
    private Long id;

    @Field(value = "UserType")
    private String userType;
    
    //@Indexed(unique = true)
    @Field(value = "Username")
    private String username;

    @Field(value = "Email")
    private String email;
    
    @Field(value = "Password")
    private String password;

    @Field(value = "Address")
    private String address;

    @Field(value = "Question")
    private String question;

    @Field(value = "Answer")
    private String answer;
    
    
    
	public User(String userType, String username, String email, String password, String address, String question,
			String answer) {
    	super();
    	this.userType = userType;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
		this.question = question; 
		this.answer = answer;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsername() {
		return username;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Override
    public String toString() {
        return "id:" + this.id + ", username: " + this.username
                + ", address: " + this.address;
    }
}
