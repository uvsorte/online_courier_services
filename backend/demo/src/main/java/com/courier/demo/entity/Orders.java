package com.courier.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@OneToOne(mappedBy = "orderId",cascade = CascadeType.ALL)
	//@Column(name = "orderId",updatable = false,insertable = false)
	private int orderId;
	private int empId;
	private int custId;    
	private String orderStatus; 
	private String paymentStatus;   
	private double amount; 
	private String weight;   
	private String orderType;
	private String paymentMode;
	private String dAddr;
	private int pinCode;
	public Orders() {
		
	}
	public Orders(int orderId, int empId, int custId, String orderStatus, String paymentStatus, double amount,
			String weight, String orderType, String paymentMode, String dAddr, int pinCode) {
		super();
		this.orderId = orderId;
		this.empId = empId;
		this.custId = custId;
		this.orderStatus = orderStatus;
		this.paymentStatus = paymentStatus;
		this.amount = amount;
		this.weight = weight;
		this.orderType = orderType;
		this.paymentMode = paymentMode;
		this.dAddr = dAddr;
		this.pinCode = pinCode;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getOrderType() {
		return orderType;
	}
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	public String getdAddr() {
		return dAddr;
	}
	public void setdAddr(String dAddr) {
		this.dAddr = dAddr;
	}
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", empId=" + empId + ", custId=" + custId + ", orderStatus=" + orderStatus
				+ ", paymentStatus=" + paymentStatus + ", amount=" + amount + ", weight=" + weight + ", orderType="
				+ orderType + ", paymentMode=" + paymentMode + ", dAddr=" + dAddr + ", pinCode=" + pinCode + "]";
	}
	
}