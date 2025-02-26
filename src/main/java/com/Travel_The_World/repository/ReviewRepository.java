// src/main/java/com/Travel_The_World/repository/ReviewRepository.java

package com.Travel_The_World.repository;

import com.Travel_The_World.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    //List<Review> findAllByOrderByCreatedAtDesc();
}
