package com.courier.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courier.demo.entity.TrackOrder;

public interface TrackOrderDao extends JpaRepository<TrackOrder, Integer> {
	
	//public TrackOrder getOrderById(Long orderId);

}
