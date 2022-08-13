package com.courier.demo.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.courier.demo.dao.UserDao;
import com.courier.demo.entity.Users;
@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao dao;
	
	@Override
	public Users findByEmail(String email) {
		
		return dao.findByEmail(email);
	}
	
	@Override
	public Users save(Users user) {
		return dao.save(user);
		
	}

	@Override
	public void delete(int userId) {
		dao.deleteById(userId);
	}

	public Users findById(int userId) {
		// TODO Auto-generated method stub
		return dao.getById(userId);
	}
}
