package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Registration {

    private static final Logger logger = LoggerFactory.getLogger(Registration.class);
    @Autowired
    private UserRepository userRepository;
    public String registerUser(User user){
        try {
            this.userRepository.save(user);
            return "successful";
        } catch (Exception e) {
            logger.error("Error during user registration", e);
            return "failed";
        }
    }
}
