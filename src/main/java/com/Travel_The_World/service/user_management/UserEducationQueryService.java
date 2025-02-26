package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.TouristUserQuery;
import com.Travel_The_World.model.UserEducationQuery;
import com.Travel_The_World.repository.user.UserEducationQueryRepository;
import com.Travel_The_World.repository.user.UserTouristQueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserEducationQueryService {
    @Autowired
    private UserEducationQueryRepository userEducationQueryRepository;

    public UserEducationQuery saveQuery(UserEducationQuery query) {
        return userEducationQueryRepository.save(query);
    }

    public List<UserEducationQuery> getUserQueriesByEmail(String userEmail) {
        System.out.println(userEmail);
        return userEducationQueryRepository.findByUserEmail(userEmail);
    }

    public List<UserEducationQuery> getAllQueries() {
        return userEducationQueryRepository.findAll();
    }

    public UserEducationQuery getQueryById(Long id) {
        return userEducationQueryRepository.findById(id).orElse(null);
    }

    public void deleteQuery(Long id) {
        userEducationQueryRepository.deleteById(id);
    }

}
