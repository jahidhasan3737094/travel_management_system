package com.Travel_The_World.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;//user_id (primary key): Unique identifier for each user.
    private String username;//username: Username for login.
    private String password;//password (hashed): Securely stored password hash.
    private String userEmail; //email: User's email address.
    private String userFirstName;//first_name: User's first name.
    private String userLastName;//last_name: User's last name.
    private String phoneNumber;//user contact number
    private String userType;//user_type (e.g., 'user', 'admin'): Identifies user type (regular user or admin).
    private boolean confirmRegistration;//user confirms resgistration.
//    @OneToMany(mappedBy = "user")// mappedBy refers to the field in Bookings referencing User
//    private List<Bookings> bookings;

    // Add methods to manage bookings (optional)
//    public void addBooking(Bookings booking) {
//        this.bookings.add(booking);
//    }
//
//    public void removeBooking(Bookings booking) {
//        this.bookings.remove(booking);
//    }




}
