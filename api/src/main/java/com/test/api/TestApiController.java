package com.test.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestApiController {

	@CrossOrigin(origins="*")
	@PostMapping("/testapi")
	public String testapi() {
		
		System.out.println("test-----------------------------------------------");
		return "success";
	}
	
	
}
