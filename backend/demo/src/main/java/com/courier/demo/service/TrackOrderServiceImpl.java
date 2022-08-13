package com.courier.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courier.demo.dao.TrackOrderDao;
import com.courier.demo.entity.TrackOrder;

@Service
@Transactional
public class TrackOrderServiceImpl implements TrackOrderService {
	@Autowired
	private TrackOrderDao trackOrders;
	//List<TrackOrder> list;
	
	
	@Override
	public TrackOrder getOrderById(int orderId) {
//		TrackOrder t=null;
//		for(TrackOrder trackorder:list) {
//			if(trackorder.getOrderId()==orderId) {
//				t=trackorder;
//				break;
//			}
//		}
		return trackOrders.getById(orderId);
	}

}
