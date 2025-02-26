//package com.Travel_The_World.model;
//
//
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.util.List;
//
//@Setter
//@Getter
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer userId;//user_id (primary key): Unique identifier for each user.
//    private String username;//username: Username for login.
//    private String password;//password (hashed): Securely stored password hash.
//    private String userEmail; //email: User's email address.
//    private String userFirstName;//first_name: User's first name.
//    private String userLastName;//last_name: User's last name.
//    private String phoneNumber;//user contact number
//    private String userType;//user_type (e.g., 'user', 'admin'): Identifies user type (regular user or admin).
//    private boolean confirmRegistration;//user confirms resgistration.
//
//    @OneToMany(mappedBy = "user")
//    @JsonManagedReference
//    private List<Review> reviews;
//
////    @OneToMany(mappedBy = "user")// mappedBy refers to the field in Bookings referencing User
////    private List<Bookings> bookings;
//
//    // Add methods to manage bookings (optional)
////    public void addBooking(Bookings booking) {
////        this.bookings.add(booking);
////    }
////
////    public void removeBooking(Bookings booking) {
////        this.bookings.remove(booking);
////    }
//
//
//
//
//}

package com.Travel_The_World.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId; // Primary key

    @Column(nullable = false, unique = true)
    @NotNull(message = "Username cannot be null")
    @NotEmpty(message = "Username cannot be empty")
    private String username; // Username for login

    @Column(nullable = false)
    @NotNull(message = "Password cannot be null")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password; // Securely stored password hash

    @Column(nullable = false, unique = true)
    @NotNull(message = "Email cannot be null")
    @Email(message = "Invalid email format")
    private String userEmail; // User's email address

    private String userFirstName; // User's first name
    private String userLastName; // User's last name
    private String phoneNumber; // User contact number
    private String userType; // Identifies user type (e.g., 'user', 'admin')
    private boolean confirmRegistration; // User confirms registration

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Review> reviews; // User's reviews
}

