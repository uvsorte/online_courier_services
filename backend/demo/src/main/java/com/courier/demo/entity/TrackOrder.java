package com.courier.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trackorder")
public class TrackOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	private String start;
	private String destination;
	private String status;
	
	public TrackOrder() {
		super();
		
	}

	public TrackOrder(int orderId, String start, String destination, String status) {
		super();
		this.orderId = orderId;
		this.start = start;
		this.destination = destination;
		this.status = status;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getStart() {
		return start;
	}

	public void setStart(String start) {
		this.start = start;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "TrackOrder [orderId=" + orderId + ", start=" + start + ", destination=" + destination + ", status="
				+ status + "]";
	}
	
	
	
	

}

