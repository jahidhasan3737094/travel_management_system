package com.Travel_The_World.repository.user;

import com.Travel_The_World.model.TouristUserQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UserTouristQueryRepository extends JpaRepository<TouristUserQuery, Long> {
    @Query("SELECT q FROM TouristUserQuery q WHERE q.userEmail = :userEmail")
    List<TouristUserQuery> findByUserEmail(@Param("userEmail") String userEmail);
}
