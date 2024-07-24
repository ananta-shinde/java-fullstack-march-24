package com.ecomm.backend.ecom_backend.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.backend.ecom_backend.model.User;
import com.ecomm.backend.ecom_backend.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/users")
    public Iterable<User> getUsers(){
        Iterable<User> users = repository.findAll();
        return users;
    }

    @PostMapping("/users")
    public User createUser(){
        User u = new User();
        u.setName("Admin");
        u.setEmail("admin@demo.com");
        u.setPassword("admin123");
        u= repository.save(u);
        return u;
    }

    
    

}
