package com.ecomm.backend.ecom_backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.ecomm.backend.ecom_backend.model.User;

public interface UserRepository extends CrudRepository<User,Integer> {

}

