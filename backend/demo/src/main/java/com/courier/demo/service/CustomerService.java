package com.courier.demo.service;

import com.courier.demo.dao.CustomerDao;
import com.courier.demo.entity.Customer;

public interface CustomerService {

	Customer save(Customer customer);

}
