package com.ecomm.backend.ecom_backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.ecomm.backend.ecom_backend.model.User;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class UserSpecification {
    
    public static Specification<User> getUserSpecification(List<UserFilterDTO> filters)
    {
           return new Specification<User>() {
                private static final long serialVersionUID = 1L;
                @Override
                public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder){
                        List<Predicate> predicates = new ArrayList<>();
                        filters.forEach(filter -> 
                                {
                                    //I don't like lambas, too unreadable for me
                                    Predicate predicate = criteriaBuilder.equal(root.get(filter.getCoulmnName()),filter.getCoulmnValue());
                                    predicates.add(predicate);
                                });
                        return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
                        }
           };
    }
}
