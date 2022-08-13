package com.courier.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Sort.Order;

import com.courier.demo.entity.Orders;
import com.courier.demo.service.OrderServiceImpl;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	
	@Autowired
	private OrderServiceImpl service;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		//List<Orders> list = service.findByOrderStatus("InProcess");
		//list.forEach(System.out::println);
//		List<Orders> list = service.findByEmpId(1);
//		list.forEach(System.out::println);
		
	}



}
