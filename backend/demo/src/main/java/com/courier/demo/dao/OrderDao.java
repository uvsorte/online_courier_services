package com.courier.demo.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courier.demo.entity.Orders;

public interface OrderDao extends JpaRepository<Orders, Integer> {

	ArrayList<Orders> findByOrderStatus(String string);

	List<Orders> findByEmpId(int empId);

	List<Orders> findByCustId(int custId);

	//List<Orders> findByCustId(int custId);


}
