package com.Travel_The_World.service.admin_service;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllUserInfoService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUserInfo() {
        return userRepository.findAll();
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

}
