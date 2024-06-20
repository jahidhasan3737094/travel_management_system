package com.Travel_The_World.service.admin_service;

import com.Travel_The_World.model.UserQuery;
import com.Travel_The_World.repository.UserQueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserQueryService {

    @Autowired
    private UserQueryRepository userQueryRepository;

    public UserQuery saveUserQuery(UserQuery userQuery) {
        return userQueryRepository.save(userQuery);
    }

    public List<UserQuery> getAllUserQueries() {
        return userQueryRepository.findAll();
    }

    public Optional<UserQuery> getUserQueryById(Integer id) {
        return userQueryRepository.findById(id);
    }

    public void deleteUserQuery(Integer id) {
        userQueryRepository.deleteById(id);
    }
}
