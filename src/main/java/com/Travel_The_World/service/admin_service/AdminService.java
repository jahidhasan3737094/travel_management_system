//package com.Travel_The_World.service.admin_service;
//
//import com.Travel_The_World.model.Admin;
//import com.Travel_The_World.repository.admin.AdminRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AdminService {
//    @Autowired
//    private AdminRepository adminRepository;
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    public Admin registerAdmin(Admin admin) {
//        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
//        return adminRepository.save(admin);
//    }
//
//    public Admin findByEmail(String email) {
//        return adminRepository.findByEmail(email).orElse(null);
//    }
//}
//
//package com.Travel_The_World.service.admin_service;
//
//import com.Travel_The_World.model.Admin;
//import com.Travel_The_World.repository.admin.AdminRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Collections;
//
//@Service
//public class AdminService implements UserDetailsService {
//
//    @Autowired
//    private AdminRepository adminRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    public Admin registerAdmin(Admin admin) {
//        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
//        return adminRepository.save(admin);
//    }
//
//    public Admin findByEmail(String email) {
//        return adminRepository.findByEmail(email).orElse(null);
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        Admin admin = findByEmail(email);
//        if (admin == null) {
//            throw new UsernameNotFoundException("Admin not found");
//        }
//        return new User(admin.getEmail(), admin.getPassword(), Collections.emptyList());
//    }
//}
//update for adminrole

package com.Travel_The_World.service.admin_service;

import com.Travel_The_World.model.Admin;
import com.Travel_The_World.repository.admin.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class AdminService implements UserDetailsService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Admin registerAdmin(Admin admin) {
        // ✅ Check if email already exists
        if (adminRepository.findByEmail(admin.getEmail()).isPresent()) {
            throw new RuntimeException("Error: Email is already taken!");
        }

        admin.setPassword(passwordEncoder.encode(admin.getPassword()));

        if (admin.getRole() == null || admin.getRole().isEmpty() || admin.getRole().equals("ADMIN")) {
            admin.setRole("ROLE_ADMIN"); // ✅ Ensure correct role format
        }

        return adminRepository.save(admin);
    }


    public Admin findByEmail(String email) {
        return adminRepository.findByEmail(email).orElse(null);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Admin admin = findByEmail(email);
        if (admin == null) {
            throw new UsernameNotFoundException("Admin not found");
        }

        // ✅ Assign the ADMIN role properly
        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));

        return new User(admin.getEmail(), admin.getPassword(), authorities);
    }
}
