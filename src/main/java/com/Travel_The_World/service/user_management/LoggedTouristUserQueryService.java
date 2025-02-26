//package com.Travel_The_World.service.user_management;
//import com.Travel_The_World.model.TouristUserQuery;
//import com.Travel_The_World.repository.TouristUserQueryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class LoggedTouristUserQueryService {
//
//    @Autowired
//    private TouristUserQueryRepository touristUserQueryRepository;
//
//    /**
//     * Get all queries for a specific user by email (Case-insensitive)
//     */
//    public List<TouristUserQuery> getTouristQueriesByEmail(String email) {
//        System.out.println("Fetching queries for user email: " + email); // Debugging log
//        //List<TouristUserQuery> queries = touristUserQueryRepository.findByUserEmailIgnoreCase(email);
//        System.out.println("Found " + queries.size() + " queries for email: " + email); // Debugging log
//        return queries;
//    }
//
//    /**
//     * Save a new TouristUserQuery
//     */
//    public TouristUserQuery saveQuery(TouristUserQuery query) {
//        return touristUserQueryRepository.save(query);
//    }
//
//    /**
//     * Get all Tourist Queries
//     */
//    public List<TouristUserQuery> getAllQueries() {
//        return touristUserQueryRepository.findAll();
//    }
//
//    /**
//     * Get a specific query by ID
//     */
//    public Optional<TouristUserQuery> getQueryById(Long id) {
//        return touristUserQueryRepository.findById(id);
//    }
//
//    /**
//     * Delete a query by ID
//     */
//    public void deleteQuery(Long id) {
//        if (touristUserQueryRepository.existsById(id)) {
//            touristUserQueryRepository.deleteById(id);
//            System.out.println("Deleted query with ID: " + id);
//        } else {
//            System.out.println("Query with ID " + id + " not found.");
//        }
//    }
//}
