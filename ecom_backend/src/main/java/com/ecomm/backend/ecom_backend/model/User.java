package com.ecomm.backend.ecom_backend.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name="Users")
public class User {
    @Id
    private int id;
    private String name;
    private String email;
    private String password;
    private String contact;
    private String alternate_contact;
    private int address_id;
    private String profile_picture;
    private Boolean is_Active;
    private Date date_created;
    private Date date_updated;


    public String getContact() {
        return contact;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }
    public String getAlternate_contact() {
        return alternate_contact;
    }
    public void setAlternate_contact(String alternate_contact) {
        this.alternate_contact = alternate_contact;
    }
    public int getAddress_id() {
        return address_id;
    }
    public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }
    public String getProfile_picture() {
        return profile_picture;
    }
    public void setProfile_picture(String profile_picture) {
        this.profile_picture = profile_picture;
    }
    public Boolean getIs_Active() {
        return is_Active;
    }
    public void setIs_Active(Boolean is_Active) {
        this.is_Active = is_Active;
    }
    public Date getDate_created() {
        return date_created;
    }
    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }
    public Date getDate_updated() {
        return date_updated;
    }
    public void setDate_updated(Date date_updated) {
        this.date_updated = date_updated;
    }
    
    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
