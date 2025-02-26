package com.Travel_The_World.repository;

import com.Travel_The_World.model.UserEducationQuery;
import com.Travel_The_World.model.UserEducationQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserQueryRepository extends JpaRepository<UserEducationQuery, Integer> {
    List<UserEducationQuery> findByUserEmail(String userEmail);
}
