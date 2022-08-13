package com.courier.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;

public class Response {
	public static ResponseEntity<Map<String, Object>> success(Object data){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status","success");
		if(data!=null)
		map.put("data", data);
		return ResponseEntity.ok(map);	
	}

	public static ResponseEntity<?> error(String string) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status","error");
		return ResponseEntity.ok(map);
	}
}
