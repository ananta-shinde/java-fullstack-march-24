package com.ecomm.backend.ecom_backend.controller;

public class UserFilterDTO {

    private String coulmnName;
    private Object coulmnValue;
    
    public String getCoulmnName() {
        return coulmnName;
    }
    public void setCoulmnName(String coulmnName) {
        this.coulmnName = coulmnName;
    }
    public Object getCoulmnValue() {
        return coulmnValue;
    }
    public void setCoulmnValue(Object coulmnValue) {
        this.coulmnValue = coulmnValue;
    }
    
    
}
