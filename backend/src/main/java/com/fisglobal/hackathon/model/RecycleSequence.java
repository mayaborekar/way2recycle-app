package com.fisglobal.hackathon.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "recycle_sequences")
public class RecycleSequence {

    @Id
    private String id;

    private long recycleSeq;

    public RecycleSequence() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

	public long getRecycleSeq() {
		return recycleSeq;
	}

	public void setRecycleSeq(long recycleSeq) {
		this.recycleSeq = recycleSeq;
	}

    
}

