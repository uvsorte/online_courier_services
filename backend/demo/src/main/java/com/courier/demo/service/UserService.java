package com.courier.demo.service;

import com.courier.demo.entity.Users;

public interface UserService {

	Users findByEmail(String email);

	Users save(Users user);

	void delete(int userId);

}
