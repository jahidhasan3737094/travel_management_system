package com.Travel_The_World.model;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "admins")
public class Admin {

    @Id  // ✅ Use jakarta.persistence.Id, NOT org.springframework.data.annotation.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String role = "ADMIN";

    public Admin() {
        this.role = "ROLE_ADMIN"; // ✅ Ensure correct role format
    }
    public Admin(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
