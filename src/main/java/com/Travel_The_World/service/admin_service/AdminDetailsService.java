//package com.Travel_The_World.service.admin_service;
//
//import com.Travel_The_World.model.Admin;
//import com.Travel_The_World.repository.admin.AdminRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Collections;
//
//@Service
//public class AdminDetailsService implements UserDetailsService {
//
//    @Autowired
//    private AdminRepository adminRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Admin admin = adminRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("Admin not found"));
//
//        return new User(admin.getEmail(), admin.getPassword(), Collections.emptyList());
//    }
//}
