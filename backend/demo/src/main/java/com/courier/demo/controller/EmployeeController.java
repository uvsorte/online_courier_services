package com.courier.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.courier.Dto.EmployeeDto;
import com.courier.Exception.ResourceNotFoundException;
import com.courier.demo.Repository.EmployeeRepository;
import com.courier.demo.dao.OrderDao;
import com.courier.demo.entity.Employee;
import com.courier.demo.entity.Orders;
import com.courier.demo.entity.Users;
import com.courier.demo.service.OrderServiceImpl;
import com.courier.demo.service.UserServiceImpl;
import com.courier.model.Response;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private UserServiceImpl userService;
	@Autowired
	OrderServiceImpl orderService;
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//add new employee
	@PostMapping("/employees") 
	public Employee AddEmployee(@RequestBody EmployeeDto dto) {
		Employee employee = EmployeeDto.employeeToEntity(dto);
		Users user = EmployeeDto.userToEntity(dto);
		userService.save(user);
		Users local = userService.findByEmail(employee.getEmail());
		employee.setUserId(local.getUserId());
		System.out.println(user);
		System.out.println(employee);
		return employeeRepository.save(employee);
		//return(employee);
		
	}
	//get employee by id
	@GetMapping("/employees/{empId}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable int empId) {
		Employee employee = employeeRepository.findById(empId)
				.orElseThrow(()->
		new ResourceNotFoundException("Employeee do not exist with id"+ empId));
		return ResponseEntity.ok(employee);
	}
	
	//update employee
	@PutMapping("/employees/{empId}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int empId, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(empId)
				.orElseThrow(() -> 
		new ResourceNotFoundException("Employeee do not exist with id"+ empId));
		
		employee.setBranchId(employeeDetails.getBranchId());
		employee.setRole(employeeDetails.getRole());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	
	}
	
	//delete employee
	@DeleteMapping("/employees/{empId}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int empId){
		Employee employee = employeeRepository.findById(empId)
				.orElseThrow(() -> 
		new ResourceNotFoundException("Employeee do not exist with id"+ empId));
		System.out.println(employee.getUserId());
		userService.delete(employee.getUserId());
		System.out.println(employee.getEmpId());
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	
	/*@DeleteMapping("/employees/{empId}")
	public ResponseEntity<?> deleteEmployee(@PathVariable int empId){
		Employee employee = employeeRepository.findById(empId)
				.orElseThrow(() -> 
		new ResourceNotFoundException("Employeee do not exist with id"+ empId));
		System.out.println(employee.getUserId());
		//userService.delete(employee.getUserId());
		//employeeRepository.delete(employee);
		//Map<String, Boolean> response = new HashMap<>();
		//response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(employee);
		
		
	}
*/
	@GetMapping("/pOrders")
	public ResponseEntity<?> pendingOrders( ) {
		List<Orders> list = orderService.findByOrderStatus("InProcess");
		list.forEach(System.out::println);
		//Stream<Orders> result = list.stream().map(order -> order);
		return Response.success(list);
		//return null;
	}
	
	@PutMapping("/approve_package/{orderId}")
	public ResponseEntity<?> updateOrders(@PathVariable("orderId")int orderId){
		Orders order = orderService.findById(orderId);
		if(order!=null) {
			order.setOrderStatus("Approved");
			orderService.save(order);
		}
		return Response.success(order);	
	}
}
