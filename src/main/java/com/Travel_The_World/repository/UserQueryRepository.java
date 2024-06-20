package com.Travel_The_World.repository;

import com.Travel_The_World.model.UserQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserQueryRepository extends JpaRepository<UserQuery, Integer> {
}
