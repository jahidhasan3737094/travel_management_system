package com.Travel_The_World.controller;

import com.Travel_The_World.model.User;
import com.Travel_The_World.service.user_management.Registration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private Registration registration;

    @PostMapping("/submit")
    public String FormSubmit(@RequestBody User user){
        return this.registration.registerUser(user);
    }
    @GetMapping("/confirm/{confirmToken}")
    public String registrationConfirmation(@PathVariable Integer confirmToken){
        return this.registration.confirmRegistration(confirmToken);
    }
}
