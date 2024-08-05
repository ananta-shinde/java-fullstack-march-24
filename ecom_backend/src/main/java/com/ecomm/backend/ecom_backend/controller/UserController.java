package com.ecomm.backend.ecom_backend.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecomm.backend.ecom_backend.model.User;
import com.ecomm.backend.ecom_backend.repository.UserRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




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
    public User createUser(@RequestBody User u){
        u= repository.save(u);
        return u;
    }

    @PutMapping("users/{id}")
    public User updateUserById(@RequestBody User u,@PathVariable("id") int uid){
       User existing_user = repository.findById(uid).get();
       if(u.getName() != null){
            existing_user.setName(u.getName());
       }
       if(u.getContact() != null){
            existing_user.setContact(u.getContact());
       }
       if(u.getPassword() != null){
            existing_user.setPassword(u.getPassword());
       }
       if(u.getAlternate_contact() != null){
            existing_user.setAlternate_contact(u.getAlternate_contact());
       }
      
        return repository.save(existing_user);
    }

    @DeleteMapping("/users/{id}")
    public User deleteUserById(@PathVariable("id") int uid)
    {
        User existing_user = repository.findById(uid).get();
        existing_user.setIs_Active(false);
        return repository.save(existing_user);
    }

}
