package com.Travel_The_World.model;

import jakarta.persistence.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "tourist_user_queries")
public class TouristUserQuery {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer id;
//
//    @NotBlank(message = "First name is required")
//    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
//    private String firstName;
//
//    @NotBlank(message = "Last name is required")
//    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
//    private String lastName;
//
//    @NotBlank(message = "Email is required")
//    @Email(message = "Email should be valid")
//    private String userEmail;
//
//    @NotBlank(message = "Contact number is required")
//    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Contact number should be valid")
//    private String contactNumber;
//
//    @NotBlank(message = "Tourism country is required")
//    private String travelCountry; // Field for tourism country
//
//    @NotBlank(message = "Query country is required")
//    private String queryCountry; // Field for query country
//
//    @NotBlank(message = "Subject is required")
//    @Size(min = 10, max = 500, message = "Subject must be between 10 and 500 characters")
//    private String subject;
//
//    private String documents; // Field for documents
//
//    @NotBlank(message = "Message is required")
//    @Size(min = 10, max = 1000, message = "Message must be between 10 and 1000 characters")
//    private String travelType; // Field for education level

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String userEmail;
    private String contactNumber;
    private String queryCountry;
    private String travelCountry;
    private String travelType;
    private String documents;
    private String subject;


}
