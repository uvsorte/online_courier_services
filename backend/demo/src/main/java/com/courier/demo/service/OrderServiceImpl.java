package com.courier.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courier.demo.dao.OrderDao;
import com.courier.demo.entity.Orders;
@Service
@Transactional
public class OrderServiceImpl implements OrderService  {

	//List<Orders> list;
	@Autowired
	private OrderDao orderDao;
	
	@Override
	public List<Orders> getOrders() {
		// TODO Auto-generated method stub
		return orderDao.findAll();
	}

	

	@Override
	public Orders addOrders(Orders orders) {
		//list.add(orders);
		return orderDao.save(orders);
	}


	@Override
	public void deleteOrders(int orderId) {
		Orders o=orderDao.getOne(orderId);
		orderDao.delete(o);
	}


	public List<Orders> findByOrderStatus(String string) {
		return orderDao.findByOrderStatus(string);
		
	}

	public Orders findById(int orderId) {
		return orderDao.findById(orderId).orElse(null);
	}



	public List<Orders> findByEmpId(int empId) {
		return orderDao.findByEmpId(empId);
	}



	public Orders save(Orders order) {
		return orderDao.save(order);
		
	}



	public List<Orders> findAll() {
		// TODO Auto-generated method stub
		return orderDao.findAll();
	}



	public List<Orders> findByCustId(int custId) {
		// TODO Auto-generated method stub
		return orderDao.findByCustId(custId);
	}	

}

