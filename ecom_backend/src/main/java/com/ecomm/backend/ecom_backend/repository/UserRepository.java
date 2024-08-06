package com.ecomm.backend.ecom_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import com.ecomm.backend.ecom_backend.model.User;

public interface UserRepository extends JpaRepository<User,Integer>,JpaSpecificationExecutor<User> {

}

