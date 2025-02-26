//package com.Travel_The_World.controller;
//
//import com.Travel_The_World.service.user_management.LoginService;
//import com.Travel_The_World.model.LoginRequest;
//import com.Travel_The_World.model.LoginResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/auth")
//public class LoginController {
//
//    @Autowired
//    private LoginService loginService;
//
//    @PostMapping("/login")
//    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
//        String token = loginService.login(loginRequest.getEmail(), loginRequest.getPassword());
//        return ResponseEntity.ok(new LoginResponse(token));
//    }
//}
//
//package com.Travel_The_World.controller;
//
//import com.Travel_The_World.service.user_management.CustomUserDetailsService;
//import com.Travel_The_World.service.user_management.LoginService;
//import com.Travel_The_World.model.LoginRequest;
//import com.Travel_The_World.model.LoginResponse;
//import com.Travel_The_World.model.User; // Import User model
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication; // Import Authentication
//import org.springframework.security.core.context.SecurityContextHolder; // Import SecurityContextHolder
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/auth")
//public class LoginController {
//
//    @Autowired
//    private LoginService loginService;
//
//    @Autowired
//    private CustomUserDetailsService userService; // Add UserService for user details
//
////    @PostMapping("/login")
////    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
////        String token = loginService.login(loginRequest.getEmail(), loginRequest.getPassword());
////        return ResponseEntity.ok(new LoginResponse(token));
////    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//        String token = loginService.login(loginRequest.getEmail(), loginRequest.getPassword());
//
//        // ✅ Fetch user details using the email
//        User user = userService.findByUserEmail(loginRequest.getEmail());
//
//        if (user == null) {
//            return ResponseEntity.badRequest().body("User not found");
//        }
//
//        // ✅ Return both token & user details
//        Map<String, Object> response = new HashMap<>();
//        response.put("token", token);
//        response.put("user", Map.of(
//                "email", user.getUserEmail(),
//                "username", user.getUsername() // Ensure `username` exists in User model
//        ));
//
//        return ResponseEntity.ok(response);
//    }
//
//    @GetMapping("/me")
//    public ResponseEntity<User> getCurrentUser() {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        String username = auth.getName(); // Get the username from authentication
//        User user = userService.findByUserEmail(username); // Fetch user details
//        return ResponseEntity.ok(user);
//    }
//
//    @PostMapping("/logout")
//    public ResponseEntity<Void> logout() {
//        // Handle logout logic if needed (e.g., invalidate token)
//        return ResponseEntity.ok().build();
//    }
//}
//recurive problem solved

package com.Travel_The_World.controller;

import com.Travel_The_World.service.user_management.CustomUserDetailsService;
import com.Travel_The_World.service.user_management.LoginService;
import com.Travel_The_World.model.LoginRequest;
import com.Travel_The_World.model.LoginResponse;
import com.Travel_The_World.model.User; // Import User model
import com.Travel_The_World.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication; // Import Authentication
import org.springframework.security.core.context.SecurityContextHolder; // Import SecurityContextHolder
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private CustomUserDetailsService userService; // Add UserService for user details

    @Autowired
    private JwtUtil jwtUtil; // ✅ Inject JWT utility for token generation

    @Autowired
    private PasswordEncoder passwordEncoder; // ✅ Inject PasswordEncoder

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // ✅ Fetch user details using the email
            User user = userService.findByUserEmail(loginRequest.getEmail());

            if (user == null || !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                throw new BadCredentialsException("Invalid email or password");
            }

            // ✅ Generate JWT token without recursion issue
            String token = jwtUtil.generateToken(user.getUserEmail());

            // ✅ Return both token & user details
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("user", Map.of(
                    "email", user.getUserEmail(),
                    "username", user.getUsername() // Ensure `username` exists in User model
            ));

            return ResponseEntity.ok(response);

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName(); // Get the username from authentication
        User user = userService.findByUserEmail(username); // Fetch user details
        return ResponseEntity.ok(user);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        // Handle logout logic if needed (e.g., invalidate token)
        return ResponseEntity.ok().build();
    }
}
