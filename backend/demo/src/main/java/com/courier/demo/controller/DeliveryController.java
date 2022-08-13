package com.courier.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.courier.demo.entity.Orders;
import com.courier.demo.service.OrderServiceImpl;
import com.courier.model.Response;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/delivery")
public class DeliveryController {
	@Autowired
	private OrderServiceImpl orderService;
	
	@GetMapping("/")
	public ResponseEntity<?> details(){
		List<Orders> list = orderService.findByOrderStatus("Approved");
		list.forEach(System.out::println);
		//Stream<Orders> result = list.stream().map(order -> order);
		return Response.success(list);
	
	}
	
	@PutMapping("/delivered/{orderId}")
	public ResponseEntity<?> deliverd(@PathVariable("orderId")int orderId){
		Orders order = orderService.findById(orderId);
		order.setOrderStatus("Delivered");
		orderService.save(order);
		return Response.success(order);
		
	}
	
}
