package com.courier.demo.service;

import java.util.List;

import com.courier.demo.entity.Orders;

public interface OrderService {
	
	List<Orders> getOrders();
	
	//Orders save(Orders order);
	
	
	public Orders addOrders(Orders orders);
	public void deleteOrders(int orderId);
}
