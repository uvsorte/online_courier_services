package com.courier.demo.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courier.demo.dao.CustomerDao;
import com.courier.demo.dao.UserDao;
import com.courier.demo.entity.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerDao dao;
	
	@Override
	public Customer save(Customer customer) {
		return dao.save(customer);
		
	}

	public Customer findByUserId(int userId) {
		return dao.findByUserId(userId);
	}

	public Customer findByEmail(String email) {
		// TODO Auto-generated method stub
		return dao.findByEmail(email);
	}

}
