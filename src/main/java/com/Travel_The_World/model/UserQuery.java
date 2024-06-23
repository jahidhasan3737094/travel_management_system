package com.Travel_The_World.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_queries")
public class UserQuery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String firstName;
    private String lastName;
    private String userEmail;
    private String contactNumber;
    private String educationCountry; // Added field for education country will come from educatiion country
    private String queryCountry; // Added field for query country and will come from startprocees form.
    private String educationLevel; // Field for education level
    private String documents; // Field for documents
    private String subject;
}
