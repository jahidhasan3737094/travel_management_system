//package com.Travel_The_World.service.user_management;
//
//import com.Travel_The_World.model.User;
//import com.Travel_The_World.repository.UserRepository;
//import com.Travel_The_World.security.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class LoginService {
//
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    public String login(String email, String password) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(email, password));
//            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//            return jwtUtil.generateToken(userDetails);
//        } catch (BadCredentialsException e) {
//            throw new UsernameNotFoundException("Invalid username or password.");
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw new RuntimeException("An unexpected error occurred during login.");
//        }
//    }
//}

package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import com.Travel_The_World.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    public String login(String email, String password) {
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            // Retrieve user from the database
            User user = userRepository.findByUserEmail(email);
            if (user == null) {
                throw new UsernameNotFoundException("User not found");
            }

            // Generate JWT token including userId
            return jwtUtil.generateToken(userDetails, user.getUserId());
        } catch (BadCredentialsException e) {
            throw new UsernameNotFoundException("Invalid username or password.");
        } catch (Exception e) {
            throw new RuntimeException("An unexpected error occurred during login.", e);
        }
    }
}
