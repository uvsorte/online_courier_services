//package com.courier.Dto;
//
//import org.springframework.beans.BeanUtils;
//
//import com.courier.demo.entity.DestAddr;
//import com.courier.demo.entity.Orders;
//
//public class DeliveryDto {
//	private int dAddrId;
//	private int orderId;
//	private int pinCode;
//	private String addr;
//	private int empId;
//	private int custId;    
//	private String orderStatus; 
//	private String paymentStatus;   
//	private double amount; 
//	private String weight;   
//	private String orderType;
//	private String paymentMode;
//	
//	public DeliveryDto() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public DeliveryDto(int dAddrId, int orderId, int pinCode, String addr, int empId, int custId, String orderStatus,
//			String paymentStatus, double amount, String weight, String orderType, String paymentMode) {
//		super();
//		this.dAddrId = dAddrId;
//		this.orderId = orderId;
//		this.pinCode = pinCode;
//		this.addr = addr;
//		this.empId = empId;
//		this.custId = custId;
//		this.orderStatus = orderStatus;
//		this.paymentStatus = paymentStatus;
//		this.amount = amount;
//		this.weight = weight;
//		this.orderType = orderType;
//		this.paymentMode = paymentMode;
//	}
//
//	public int getdAddrId() {
//		return dAddrId;
//	}
//
//	public void setdAddrId(int dAddrId) {
//		this.dAddrId = dAddrId;
//	}
//
//	public int getOrderId() {
//		return orderId;
//	}
//
//	public void setOrderId(int orderId) {
//		this.orderId = orderId;
//	}
//
//	public int getPinCode() {
//		return pinCode;
//	}
//
//	public void setPinCode(int pinCode) {
//		this.pinCode = pinCode;
//	}
//
//	public String getAddr() {
//		return addr;
//	}
//
//	public void setAddr(String addr) {
//		this.addr = addr;
//	}
//
//	public int getEmpId() {
//		return empId;
//	}
//
//	public void setEmpId(int empId) {
//		this.empId = empId;
//	}
//
//	public int getCustId() {
//		return custId;
//	}
//
//	public void setCustId(int custId) {
//		this.custId = custId;
//	}
//
//	public String getOrderStatus() {
//		return orderStatus;
//	}
//
//	public void setOrderStatus(String orderStatus) {
//		this.orderStatus = orderStatus;
//	}
//
//	public String getPaymentStatus() {
//		return paymentStatus;
//	}
//
//	public void setPaymentStatus(String paymentStatus) {
//		this.paymentStatus = paymentStatus;
//	}
//
//	public double getAmount() {
//		return amount;
//	}
//
//	public void setAmount(double amount) {
//		this.amount = amount;
//	}
//
//	public String getWeight() {
//		return weight;
//	}
//
//	public void setWeight(String weight) {
//		this.weight = weight;
//	}
//
//	public String getOrderType() {
//		return orderType;
//	}
//
//	public void setOrderType(String orderType) {
//		this.orderType = orderType;
//	}
//
//	public String getPaymentMode() {
//		return paymentMode;
//	}
//
//	public void setPaymentMode(String paymentMode) {
//		this.paymentMode = paymentMode;
//	}
//
//	@Override
//	public String toString() {
//		return "DeliveryDto [dAddrId=" + dAddrId + ", orderId=" + orderId + ", pinCode=" + pinCode + ", addr=" + addr
//				+ ", empId=" + empId + ", custId=" + custId + ", orderStatus=" + orderStatus + ", paymentStatus="
//				+ paymentStatus + ", amount=" + amount + ", weight=" + weight + ", orderType=" + orderType
//				+ ", paymentMode=" + paymentMode + "]";
//	}
//	
//	public static DestAddr toEntity(DeliveryDto dto) {
//		DestAddr d= new DestAddr();
//		BeanUtils.copyProperties(dto, d);
//		return d;
//	}
//	
//	public static Orders toOrderEntity(DeliveryDto dto) {
//		Orders o= new Orders();
//		BeanUtils.copyProperties(dto, o);
//		return o;
//	}
//}
