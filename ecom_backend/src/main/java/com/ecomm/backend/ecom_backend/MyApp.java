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
	@Autowired
	private UserRepository userRepo;
	public static void main(String[] args) {
		System.out.println("Hello world");
		SpringApplication.run(MyApp.class, args);

	}
    @GetMapping("/home")
	public String myhome(){

		User newUser = new User();
		newUser.setName("Ananta");
		newUser.setEmail("demo@example.com");
		newUser.setPassword("123456");
        userRepo.save(newUser);
		return String.format("Hello home");
	}

	
	@GetMapping("/users")
	public String getUsers(){
		Iterable<User> users = userRepo.findAll();

		return users.toString();
	}
}
 
