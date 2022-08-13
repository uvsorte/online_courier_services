package com.courier.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.courier.Credentials.Credentials;
import com.courier.Dto.UserDto;
import com.courier.demo.entity.Customer;
import com.courier.demo.entity.Users;
import com.courier.demo.service.CustomerService;
import com.courier.demo.service.CustomerServiceImpl;
import com.courier.demo.service.UserServiceImpl;
import com.courier.model.Response;

@CrossOrigin
@RestController
@RequestMapping("")
public class LoginController {
	@Autowired
	private UserServiceImpl userService;
	@Autowired
	private CustomerServiceImpl custService;
	
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> findUser(@PathVariable("email") String email,@PathVariable("password") String password,HttpSession session) {
	System.out.println(email);
	System.out.println(password);
	Users user = userService.findByEmail(email);
	//Customer cust = custService.findByUserId(user.getUserId());
	System.out.println(user);
	//System.out.println(cust);
	if(user!=null && user.getPassword().equals(password))
		return Response.success(user);
	return Response.error("User does not exist");
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> save(UserDto dto){
		System.out.println(dto);
		Users user = UserDto.userToEntity(dto);
		Customer cust = UserDto.customerToEntity(dto);
		System.out.println(user);
		System.out.println(cust);
		userService.save(user);
		Users local = userService.findByEmail(cust.getEmail());
		cust.setUserId(local.getUserId());
		custService.save(cust);
		System.out.println(dto);
		return Response.success(dto);
	}
	
	
	/*@PostMapping("/signup")
	public ResponseEntity<?> save(Customer cust,Users user){
		System.out.println(user);
		System.out.println(cust);
		//userService.save(user);
		//custService.save(cust);
		return Response.success(cust);
	}*/
	
	
}
