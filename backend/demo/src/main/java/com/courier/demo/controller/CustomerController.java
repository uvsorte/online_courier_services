package com.courier.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.courier.Dto.EmployeeDto;
import com.courier.Dto.UserDto;
import com.courier.Exception.ResourceNotFoundException;
import com.courier.demo.dao.OrderDao;
import com.courier.demo.entity.Customer;
import com.courier.demo.entity.Employee;
import com.courier.demo.entity.Orders;
import com.courier.demo.entity.TrackOrder;
import com.courier.demo.entity.Users;
import com.courier.demo.service.CustomerServiceImpl;
import com.courier.demo.service.OrderServiceImpl;
import com.courier.demo.service.TrackOrderServiceImpl;
import com.courier.demo.service.UserServiceImpl;
import com.courier.model.Response;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	public OrderDao orderDao;
	@Autowired
	private CustomerServiceImpl custService;
	@Autowired
	private UserServiceImpl userService;
	@Autowired
	private OrderServiceImpl orderService;
	@Autowired
	private TrackOrderServiceImpl trackService ;
	
	@PutMapping("/updateCustomer/{email}/{password}")
	public ResponseEntity<?> updatePassword(@PathVariable("email")String email,@PathVariable("password") String password){
		System.out.println(email);
		System.out.println(password);
		Users user = userService.findByEmail(email);
		System.out.println(user);
		user.setPassword(password);
		return Response.success(user);
		
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getCustomer(@PathVariable("id")int id){
		System.out.println(id);
		//System.out.println(password);
		Customer cust = custService.findByUserId(id);
		System.out.println(cust);
		return Response.success(cust);
		
	}
	
	//display All Orders
//	@GetMapping("/orders")
//	public List<Orders>getOrders(){
//		return orderService.getOrders();
//	}
	
	//track order by orderId
//    @GetMapping("/trackorder/{orderId}")
//    public TrackOrder getOrderById(@PathVariable int orderId) {
//		return this.trackService.getOrderById(orderId);
//    	
//    }
	
	// @GetMapping("/trackorder/{orderId}")
	// public ResponseEntity<Map<String, Object>> getOrderById( @PathVariable int id ) {
	// 	Map<String, Object> result = new HashMap<String, Object>();
	// 	TrackOrder track = trackService.getOrderById(id);
	// 	result.put("status", "success");
	// 	result.put("data", track);
	// 	return ResponseEntity.ok(result);
	// }
	
	@GetMapping("/trackorder/{orderId}")
	public ResponseEntity<Map<String, Object>> getOrderById( @PathVariable int orderId ) {
		Orders order = orderService.findById(orderId);
		Map<String, Object> result = new HashMap<String, Object>();
		//OrderTrackDTO track = new OrderTrackDTO(orderId, order.getStart(), order.getDestination(), order.getStatus());
		result.put("status", "success");
		result.put("data", order);
		return Response.success(result);
	}

    
  //Add order
    @PostMapping("/orders")
    public Orders addOrders( Orders orders ) {
    	System.out.println(orders);
		return this.orderService.addOrders(orders);
    }
    
    @GetMapping("/order/{userId}")
    public List<Orders> AllOrders(@PathVariable int userId ){
    	//System.out.println(userId);
    	//Users u = userService.findById(userId);
    	//System.out.println(u);
    	//Customer c = custService.findByEmail(u.getEmail());
    	//System.out.println(c);
    	return orderService.findAll();
    }
//    
    
  //delete order by Id
    @DeleteMapping("/order/{orderId}")
    public ResponseEntity<?> deleteOrders(@PathVariable String orderId){
    try 
		{	System.out.println(orderId);
			this.orderService.deleteOrders(Integer.parseInt(orderId));
			return new ResponseEntity<>(HttpStatus.OK);
		} 
    catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
    /*
     * public Orders addOrders(@RequestBody OrderDto dto ) {
     * BeanUtils.copyProperties(dto,o)
     * order.save;
     * findAll.sortById
		return this.orderService.addOrders(orders);	
    }
    */
	
}
