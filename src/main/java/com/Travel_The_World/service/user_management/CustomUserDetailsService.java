//package com.Travel_The_World.service.user_management;
//
//import com.Travel_The_World.model.User;
//import com.Travel_The_World.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
//        User user = userRepository.findByUserEmail(userEmail);
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with email: " + userEmail);
//        }
//        return new org.springframework.security.core.userdetails.User(user.getUserEmail(), user.getPassword(), new ArrayList<>());
//    }
//}

package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
//        User user = userRepository.findByUserEmail(userEmail); // Ensure this method exists in UserRepository
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with email: " + userEmail);
//        }
//
//        // Return UserDetails with email and password only
//        return new org.springframework.security.core.userdetails.User(user.getUserEmail(), user.getPassword(), new ArrayList<>());
//    }
//
//    public User findByUserEmail(String username) {
//       return userRepository.findByUserEmail(username);
//    }
//
//}


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByUserEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(
                user.getUserEmail(),
                user.getPassword(),
                new ArrayList<>()
        );
    }

    public User findByUserEmail(String email) {
        return userRepository.findByUserEmail(email);
    }
}
