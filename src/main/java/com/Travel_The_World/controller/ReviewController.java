//////// src/main/java/com/Travel_The_World/controller/ReviewController.java
//////
//////package com.Travel_The_World.controller;
//////
//////import com.Travel_The_World.model.Review;
//////
//////import com.Travel_The_World.service.review_service.ReviewService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.*;
//////
//////import java.util.List;
//////
//////@RestController
//////@RequestMapping("/reviews")
//////public class ReviewController {
//////
//////    @Autowired
//////    private ReviewService reviewService;
//////
//////    @GetMapping
//////    public ResponseEntity<List<Review>> getAllReviews() {
//////        return ResponseEntity.ok(reviewService.getAllReviews());
//////    }
//////
//////    @PostMapping
//////    public ResponseEntity<Review> addReview(@RequestBody Review review) {
//////        return ResponseEntity.ok(reviewService.addReview(review));
//////    }
//////}
//////////
//////package com.Travel_The_World.controller;
//////
//////import com.Travel_The_World.model.Review;
//////import com.Travel_The_World.model.User;
//////import com.Travel_The_World.service.review_service.ReviewService;
//////import com.Travel_The_World.service.user_management.UserService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.*;
//////
//////import java.util.List;
//////
//////@RestController
//////@RequestMapping("/reviews")
//////@CrossOrigin(origins = "http://localhost:3000")
//////public class ReviewController {
//////
//////    @Autowired
//////    private ReviewService reviewService;
//////
//////    @Autowired
//////    private UserService userService; // Autowire UserService
//////
//////    @GetMapping
//////    public List<Review> getAllReviews() {
//////        return reviewService.getAllReviews();
//////    }
//////
//////    @PostMapping
//////    public ResponseEntity<Review> createReview(@RequestBody Review review) {
//////        // Fetch the user from the database
//////        User user = userService.findUserById(review.getUser().getUserId());
//////        if (user == null) {
//////            return ResponseEntity.badRequest().build(); // User not found
//////        }
//////
//////        review.setUser(user); // Set the persisted user to the review
//////        Review savedReview = reviewService.saveReview(review);
//////        return ResponseEntity.ok(savedReview);
//////    }
//////}
////
//////package com.Travel_The_World.controller;
//////
//////import com.Travel_The_World.model.Review;
//////import com.Travel_The_World.model.User;
//////import com.Travel_The_World.service.review_service.ReviewService;
//////import com.Travel_The_World.service.user_management.UserService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.*;
//////
//////import java.util.List;
//////
//////@RestController
//////@RequestMapping("/reviews")
//////@CrossOrigin(origins = "http://localhost:3000")
//////public class ReviewController {
//////
//////    @Autowired
//////    private ReviewService reviewService;
//////
//////    @Autowired
//////    private UserService userService;
//////
//////
//////
//////    @GetMapping("/upload-review")
//////    public ResponseEntity<List<Review>>getAllReviews(){
//////        List<Review> reviews= reviewService.getAllReviews();
//////        return ResponseEntity.ok(reviews);
//////    }
//////
////////    @PostMapping("/upload-review")
////////    public ResponseEntity<Review> createReview(@RequestBody Review review) {
////////       Review savedReview=reviewService.saveReview(review);
////////       return ResponseEntity.ok(savedReview);
////////    }
//////
////////    @PostMapping("/upload-review")
////////    public ResponseEntity<Review> createReview(@RequestBody Review review) {
////////        // Validate the user associated with the review
////////        User user = userService.findUserById(review.getUser().getUserId());
////////        if (user == null) {
////////            return ResponseEntity.badRequest().build(); // Return 400 if user doesn't exist
////////        }
////////
////////        review.setUser(user); // Associate the review with the user
////////        Review savedReview = reviewService.saveReview(review);
////////        return ResponseEntity.ok(savedReview);
////////    }
//////
////////    @PostMapping("/upload-review")
////////    public ResponseEntity<?> createReview(@RequestBody Review review) {
////////        // Validate that the user object and user ID are provided in the request
////////        if (review.getUser() == null || review.getUser().getUserId() == null) {
////////            return ResponseEntity.badRequest().body("User ID is required to create a review.");
////////        }
////////
////////        // Fetch the user from the database
////////        User user = userService.findUserById(review.getUser().getUserId());
////////        if (user == null) {
////////            return ResponseEntity.badRequest().body("User not found for the given ID.");
////////        }
////////
////////        // Associate the review with the user
////////        review.setUser(user);
////////
////////        // Save the review
////////        Review savedReview = reviewService.saveReview(review);
////////
////////        return ResponseEntity.ok(savedReview);
////////    }
//////
//////    @PostMapping("/upload-review")
//////    public ResponseEntity<?> createReview(@RequestBody Review review) {
//////        // Validate that the user object and user ID are provided in the request
//////        if (review.getUser() == null || review.getUser().getUserId() == null) {
//////            return ResponseEntity.badRequest().body("User ID is required to create a review.");
//////        }
//////
//////        // Fetch the user from the database
//////        User user = userService.findUserById(review.getUser().getUserId());
//////        if (user == null) {
//////            return ResponseEntity.badRequest().body("User not found for the given ID.");
//////        }
//////
//////        // Set the username in the review using the user's information
//////        review.setUsername(user.getUsername());
//////
//////        // Associate the review with the user
//////        review.setUser(user);
//////
//////        // Save the review
//////        Review savedReview = reviewService.saveReview(review);
//////
//////        return ResponseEntity.ok(savedReview);
//////    }
//////
//////
//////
//////}
////package com.Travel_The_World.controller;
////
////import com.Travel_The_World.model.Review;
////import com.Travel_The_World.model.User;
////import com.Travel_The_World.service.FileStorageService.FileStorageService;
////import com.Travel_The_World.service.review_service.ReviewService;
////import com.Travel_The_World.service.user_management.UserService;
////import jakarta.mail.Multipart;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.*;
////import org.springframework.web.multipart.MaxUploadSizeExceededException;
////import org.springframework.web.multipart.MultipartFile;
////
////import java.util.List;
////
////import static com.Travel_The_World.security.JwtRequestFilter.logger;
////
////@RestController
////@RequestMapping("/reviews")
////@CrossOrigin(origins = "http://localhost:3000")
////public class ReviewController {
////
////    private final ReviewService reviewService;
////    private final UserService userService;
////    private FileStorageService fileStorageService;
////
////    @Autowired
////    public ReviewController(ReviewService reviewService, UserService userService) {
////        this.reviewService = reviewService;
////        this.userService = userService;
////    }
////
////    @GetMapping("/upload-review")
////    public ResponseEntity<List<Review>> getAllReviews() {
////        List<Review> reviews = reviewService.getAllReviews();
////        return ResponseEntity.ok(reviews != null ? reviews : List.of());
////    }
////
//////    @PostMapping("/upload-review")
//////    public ResponseEntity<?> createReview(@RequestBody Review review) {
//////        if (review.getUser() == null || review.getUser().getUserId() == null) {
//////            return ResponseEntity.badRequest().body("User ID is required to create a review.");
//////        }
//////
//////        // Fetch the user from the database
//////        User user = userService.findUserById(review.getUser().getUserId());
//////        if (user == null) {
//////            return ResponseEntity.badRequest().body("User not found for the given ID.");
//////        }
//////
//////        // Populate the review with the username from the user
//////        review.setUsername(user.getUsername());
//////        review.setUser(user);
//////
//////        // Save the review
//////        Review savedReview = reviewService.saveReview(review);
//////
//////        return ResponseEntity.ok(savedReview);
//////    }
////
////    @PostMapping(value = "/upload-review", consumes = {"multipart/form-data"})
////    public ResponseEntity<?> createReview(
////            @RequestParam("rating") int rating,
////            @RequestParam("reviewText") String reviewText,
////            @RequestParam(value = "photo", required = false) MultipartFile photo,
////            @RequestParam(value = "video", required = false) MultipartFile video,
////            @RequestHeader("Authorization") String token) {
////        // Extract user information from the token
////        logger.debug("Received token: " + token);
////
////        User user = userService.getUserFromToken(token);
////        if (user == null) {
////            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found or unauthorized");
////        }
////
////        // Handle file upload and validate file size
////        String photoUrl = null;
////        String videoUrl = null;
////        try {
////            if (photo != null) {
////                photoUrl = fileStorageService.storeFile(photo);
////            }
////            if (video != null) {
////                if (video.getSize() > 10 * 1024 * 1024) { // 10MB size limit
////                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
////                            .body("Video size exceeds the maximum allowed limit of 10MB.");
////                }
////                videoUrl = fileStorageService.storeFile(video);
////            }
////        } catch (MaxUploadSizeExceededException e) {
////            return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
////                    .body("File size exceeds the maximum allowed limit of 10MB. Please upload a smaller file.");
////        } catch (Exception e) {
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed.");
////        }
////
////        // Create and save review
////        Review review = new Review();
////        review.setUser(user);
////        review.setUsername(user.getUsername());
////        review.setRating(rating);
////        review.setReviewText(reviewText);
////        review.setPhotoUrl(photoUrl);
////        review.setVideoUrl(videoUrl);
////
////        Review savedReview = reviewService.saveReview(review);
////        return ResponseEntity.ok(savedReview);
////    }
////
////}
//
//
//package com.Travel_The_World.controller;
//
//import com.Travel_The_World.model.Review;
//import com.Travel_The_World.model.User;
//import com.Travel_The_World.service.review_service.ReviewService;
//import com.Travel_The_World.service.user_management.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/reviews")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ReviewController {
//
//    @Autowired
//    private ReviewService reviewService;
//
//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/upload-review")
//    public ResponseEntity<List<Review>>getAllReviews(){
//        List<Review> reviews= reviewService.getAllReviews();
//        return ResponseEntity.ok(reviews);
//    }
//    @PostMapping(value = "/upload-review", consumes = {"multipart/form-data"})
//    public ResponseEntity<?> createReview(
//            @RequestParam("rating") int rating,
//            @RequestParam("reviewText") String reviewText,
//            @RequestParam(value = "photo", required = false) MultipartFile photo,
//            @RequestParam(value = "video", required = false) MultipartFile video,
//            @RequestHeader("Authorization") String token) {
//
//        User user = userService.getUserFromToken(token);
//        if (user == null) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found or unauthorized");
//        }
//
//        Review review = new Review();
//        review.setUser(user);
//        review.setUsername(user.getUsername());
//        review.setRating(rating);
//        review.setReviewText(reviewText);
//
//        reviewService.saveReview(review);
//        return ResponseEntity.ok("Review submitted successfully");
//    }
//}

package com.Travel_The_World.controller;

import com.Travel_The_World.model.Review;
import com.Travel_The_World.model.User;
import com.Travel_The_World.service.FileStorageService.FileStorageService;
import com.Travel_The_World.service.review_service.ReviewService;
import com.Travel_The_World.service.user_management.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UserService userService;

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping("/upload-review")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewService.getAllReviews();
        return ResponseEntity.ok(reviews);
    }

    @PostMapping(value = "/upload-review", consumes = {"multipart/form-data"})
    public ResponseEntity<?> createReview(
            @RequestParam("rating") int rating,
            @RequestParam("reviewText") String reviewText,
            @RequestParam(value = "photo", required = false) MultipartFile photo,
            @RequestParam(value = "video", required = false) MultipartFile video,
            @RequestHeader("Authorization") String token) {

        User user = userService.getUserFromToken(token);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found or unauthorized");
        }

        String photoUrl = null;
        String videoUrl = null;
        try {
            if (photo != null) {
                photoUrl = fileStorageService.storeFile(photo);
            }
            if (video != null) {
                if (video.getSize() > 10 * 1024 * 1024) { // 10MB size limit
                    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body("Video size exceeds 10MB limit");
                }
                videoUrl = fileStorageService.storeFile(video);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed.");
        }

        Review review = new Review();
        review.setUser(user);
        review.setUsername(user.getUsername());
        review.setRating(rating);
        review.setReviewText(reviewText);
        review.setPhotoUrl(photoUrl);
        review.setVideoUrl(videoUrl);

        reviewService.saveReview(review);
        return ResponseEntity.ok("Review submitted successfully");
    }
}
