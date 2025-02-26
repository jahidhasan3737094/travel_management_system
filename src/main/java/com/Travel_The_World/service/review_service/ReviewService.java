//package com.Travel_The_World.service.review_service;
//
//
//import com.Travel_The_World.model.Review;
//import com.Travel_The_World.repository.ReviewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class ReviewService {
//
//    @Autowired
//    private ReviewRepository reviewRepository;
//
//    public List<Review> getAllReviews() {
//        return reviewRepository.findAllByOrderByCreatedAtDesc();
//    }
//
//    public Review addReview(Review review) {
//        return reviewRepository.save(review);
//    }
//}

package com.Travel_The_World.service.review_service;

import com.Travel_The_World.model.Review;
import com.Travel_The_World.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private  ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    // Other review-related methods...
}
