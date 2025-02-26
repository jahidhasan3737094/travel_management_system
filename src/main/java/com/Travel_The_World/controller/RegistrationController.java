//package com.Travel_The_World.controller;
//
//import com.Travel_The_World.model.User;
//import com.Travel_The_World.service.user_management.Registration;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/register")
////@CrossOrigin(origins = "http://localhost:3000")//or Webconfig.java.both way will work
//public class RegistrationController {
//
//    @Autowired
//    private Registration registration;
//
//    @PostMapping("/submit")
//    public String FormSubmit(@RequestBody User user){
//        return this.registration.registerUser(user);
//    }
//    @GetMapping("/confirm/{confirmToken}")
//    public String registrationConfirmation(@PathVariable Integer confirmToken){
//        return this.registration.confirmRegistration(confirmToken);
//    }
//}

package com.Travel_The_World.controller;

import com.Travel_The_World.model.User;
import com.Travel_The_World.service.user_management.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/register")
// Uncomment below if WebConfig isn't handling CORS globally
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private Registration registration;

    /**
     * Handles user registration.
     * @param user The user object from the request body.
     * @return ResponseEntity with status and message.
     */
    @PostMapping("/submit")
    public ResponseEntity<String> FormSubmit(@Valid @RequestBody User user) {
        try {
            String response = this.registration.registerUser(user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Registration failed: " + e.getMessage());
        }
    }

    /**
     * Confirms user registration based on the confirmation token.
     * @param confirmToken The confirmation token sent to the user.
     * @return ResponseEntity with status and message.
     */
    @GetMapping("/confirm/{confirmToken}")
    public ResponseEntity<String> registrationConfirmation(@PathVariable Integer confirmToken) {
        try {
            String response = this.registration.confirmRegistration(confirmToken);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Confirmation failed: " + e.getMessage());
        }
    }
}
