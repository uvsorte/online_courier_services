package com.courier.Dto;

public class OrderTrackDTO {
	int orderID;
	String start;
	String destination;
	String status;
	public OrderTrackDTO(int orderID, String start, String destination, String status) {
		super();
		this.orderID = orderID;
		this.start = start;
		this.destination = destination;
		this.status = status;
	}
	public int getOrderID() {
		return orderID;
	}
	public void setOrderID(int orderID) {
		this.orderID = orderID;
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
		return "OrderTrackDTO [orderID=" + orderID + ", start=" + start + ", destination=" + destination + ", status="
				+ status + "]";
	}
}