package com.courier.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courier.demo.entity.Users;

public interface UserDao extends JpaRepository<Users, Integer> {

	Users findByEmail(String email);
	
}
