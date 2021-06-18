package com.fisglobal.hackathon.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Recycle")
public class RecycleRequest {
	
	@Transient
    public static final String RECYCLE_SEQUENCE = "RecycleOrder_sequence";
	
	@Id	
	private long requestId;
	
	@Field(value = "Item")
	private String item;
	 
	@Field(value = "Quantity") 
	private int quantity;
	
	@Field(value = "description")
	private String description;
	
	@Field(value = "RequestedDate")
	private Date requestedDate;
	
	@Field(value = "Comments")
	private String comments;
	
	@Field(value = "Status")
	private String status;
	
	
	
	public RecycleRequest(String item, int quantity, String description, Date requestedDate,
			String comments, String status) {
		super();
		this.item = item;
		this.quantity = quantity;
		this.description = description;
		this.requestedDate = requestedDate;
		this.comments = comments;
		this.status = status;
	}
	
	public long getRequestId() {
		return requestId;
	}
	public void setRequestId(long requestId) {
		this.requestId = requestId;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getRequestedDate() {
		return requestedDate;
	}
	public void setRequestedDate(Date requestedDate) {
		this.requestedDate = requestedDate;
	}
		
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
