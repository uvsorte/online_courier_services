package com.courier.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courier.demo.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer>{

	Customer findByUserId(int userId);

	Customer findByEmail(String email);

}
