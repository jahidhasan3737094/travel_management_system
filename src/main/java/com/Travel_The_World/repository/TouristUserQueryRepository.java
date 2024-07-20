package com.Travel_The_World.repository;

import com.Travel_The_World.model.TouristUserQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TouristUserQueryRepository extends JpaRepository<TouristUserQuery, Long> {
}
