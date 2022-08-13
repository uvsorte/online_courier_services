package com.courier.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int custId;
	private String name;    
	private String address; 
	private String state;   
	private int pinCode; 
	private String email;   
	private String phone;
	private int userId;
	
	public Customer() {
		
	}
	
	
	public Customer(int custId, String name, String address, String state, int pinCode, String email, String phone,int userId) {
		this.custId = custId;
		this.name = name;
		this.address = address;
		this.state = state;
		this.pinCode = pinCode;
		this.email = email;
		this.phone = phone;
		this.userId = userId;
		
	}


	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}


	@Override
	public String toString() {
		return "Customers [custId=" + custId + ", name=" + name + ", address=" + address + ", state=" + state
				+ ", pinCode=" + pinCode + ", email=" + email + ", phone=" + phone + ", userId=" + userId
				+ "]";
	}
	
	
	
	
}
