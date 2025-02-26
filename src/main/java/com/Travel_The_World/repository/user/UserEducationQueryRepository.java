package com.Travel_The_World.repository.user;

import com.Travel_The_World.model.TouristUserQuery;
import com.Travel_The_World.model.UserEducationQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import com.Travel_The_World.model.TouristUserQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UserEducationQueryRepository extends JpaRepository<UserEducationQuery, Long> {
    @Query("SELECT q FROM UserEducationQuery q WHERE q.userEmail = :userEmail")
    List<UserEducationQuery> findByUserEmail(@Param("userEmail") String userEmail);
}
