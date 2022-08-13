package com.courier.Dto;

import org.springframework.beans.BeanUtils;

import com.courier.demo.entity.Employee;
import com.courier.demo.entity.Users;

public class EmployeeDto {
	private int empId;
	private String name;
	private String email;
	private String role;
	private String address;
	private String phone;
	private int branchId;
	private String password;
	
	public EmployeeDto() {
		// TODO Auto-generated constructor stub
	}
	
	
	public EmployeeDto(int empId, String name, String email, String role, String address, String phone, int branchId,
			String password) {
		super();
		this.empId = empId;
		this.name = name;
		this.email = email;
		this.role = role;
		this.address = address;
		this.phone = phone;
		this.branchId = branchId;
		this.password = password;
	}


	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getBranchId() {
		return branchId;
	}

	public void setBranchId(int branchId) {
		this.branchId = branchId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "EmployeeDto [empId=" + empId + ", name=" + name + ", email=" + email + ", role=" + role + ", address="
				+ address + ", phone=" + phone + ", branchId=" + branchId + ", password=" + password + "]";
	}
	
	public static Employee employeeToEntity(EmployeeDto dto) {
		Employee emp = new Employee();
		BeanUtils.copyProperties(dto, emp);
		return emp;
		
	}
	
	public static Users userToEntity(EmployeeDto dto) {
		Users user = new Users();
		BeanUtils.copyProperties(dto, user);
		return user;
		
	}
	
}
