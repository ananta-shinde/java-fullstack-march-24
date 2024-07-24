package com.ecomm.backend.ecom_backend;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@RestController
public class MyApp{
	
	public static void main(String[] args) {
		System.out.println("Hello world");
		SpringApplication.run(MyApp.class, args);

	}

	@GetMapping("/home")
	public String getWelcomeMessage()
	{
		return "welcome to spring";
	}
   
}
 
