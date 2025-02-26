//package com.Travel_The_World.controller.adminController;
//
//import com.Travel_The_World.model.AuthRequest;
//import com.Travel_The_World.model.AuthResponse;
//import com.Travel_The_World.model.Admin;
//import com.Travel_The_World.security.JwtUtil;
//import com.Travel_The_World.service.admin_service.AdminService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/admin")
//public class AdminController {
//    @Autowired
//    private AdminService adminService;
//    @Autowired
//    private JwtUtil jwtUtil;
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
//        adminService.registerAdmin(admin);
//        return ResponseEntity.ok("Admin Registered Successfully");
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
//        );
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        Admin admin = adminService.findByEmail(authRequest.getEmail()); // Fetch admin details
//        String token = jwtUtil.generateAdminToken(admin.getEmail(), admin.getId()); // Generate admin token
//
//        return ResponseEntity.ok(new AuthResponse(token));
//    }
//}

package com.Travel_The_World.controller.adminController;

import com.Travel_The_World.model.AuthRequest;
import com.Travel_The_World.model.AuthResponse;
import com.Travel_The_World.model.Admin;
import com.Travel_The_World.security.AdminJwtUtil;
import com.Travel_The_World.service.admin_service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminJwtUtil adminJwtUtil; // ✅ Ensure the correct class is used here

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
        adminService.registerAdmin(admin);
        return ResponseEntity.ok("Admin Registered Successfully");
    }

    @GetMapping("/me")
    public ResponseEntity<?> getAdminDetails(@RequestHeader("Authorization") String authorizationHeader) {
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(403).body("Invalid or missing token");
        }

        String token = authorizationHeader.substring(7);
        String email = adminJwtUtil.extractUsername(token);
        Admin admin = adminService.findByEmail(email);

        if (admin == null) {
            return ResponseEntity.status(404).body("Admin not found");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("username", admin.getUsername());
        response.put("role", admin.getRole());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        try {
            Admin admin = adminService.findByEmail(authRequest.getEmail());

            if (admin == null || !passwordEncoder.matches(authRequest.getPassword(), admin.getPassword())) {
                throw new BadCredentialsException("Invalid email or password");
            }

            String token = adminJwtUtil.generateAdminToken(admin.getEmail(), admin.getId());

            return ResponseEntity.ok(new AuthResponse(token));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
