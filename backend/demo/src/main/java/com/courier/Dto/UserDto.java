package com.courier.Dto;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.beans.BeanUtils;

import com.courier.demo.entity.Customer;
import com.courier.demo.entity.Users;

public class UserDto {
	private int custId;
	private String name;    
	private String address; 
	private String state;   
	private int pinCode; 
	private String email;   
	private String phone;
	private Users user;
	private int userId;
	private String password;
	private String role;
	
	public UserDto() {
		// TODO Auto-generated constructor stub
	}
	
	public UserDto(int custId, String name, String address, String state, int pinCode, String email, String phone,
			Users user, int userId, String password, String role) {
		super();
		this.custId = custId;
		this.name = name;
		this.address = address;
		this.state = state;
		this.pinCode = pinCode;
		this.email = email;
		this.phone = phone;
		this.user = user;
		this.userId = userId;
		this.password = password;
		this.role = role;
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
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserDto [custId=" + custId + ", name=" + name + ", address=" + address + ", state=" + state
				+ ", pinCode=" + pinCode + ", email=" + email + ", phone=" + phone + ", user=" + user + ", userId="
				+ userId + ", password=" + password + ", role=" + role + "]";
	}
	public static Customer customerToEntity(UserDto dto) {
		Customer cust = new Customer();
		BeanUtils.copyProperties(dto, cust);
		return cust;
	}
	
	public static Users userToEntity(UserDto dto) {
		Users user = new Users();
		BeanUtils.copyProperties(dto, user);
		return user;
	}
	
}
