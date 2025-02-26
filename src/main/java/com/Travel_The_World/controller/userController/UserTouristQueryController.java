package com.Travel_The_World.controller.userController;

import com.Travel_The_World.model.TouristUserQuery;

import com.Travel_The_World.service.admin_service.TouristUserQueryService;
import com.Travel_The_World.service.user_management.UserTouristQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/tourist-user-queries")
public class UserTouristQueryController {

    @Autowired
    private UserTouristQueryService touristUserQueryService;
    @GetMapping("/by-email")
    public ResponseEntity<List<TouristUserQuery>> getUserQueries(@RequestParam String email) {
        List<TouristUserQuery> queries = touristUserQueryService.getUserQueriesByEmail(email);
        return ResponseEntity.ok(queries);
    }

    @PostMapping("/create")
    public ResponseEntity<TouristUserQuery> createQuery(@RequestBody TouristUserQuery query) {
        TouristUserQuery savedQuery = touristUserQueryService.saveQuery(query);
        return ResponseEntity.ok(savedQuery);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TouristUserQuery> getQueryById(@PathVariable Long id) {
        TouristUserQuery query = touristUserQueryService.getQueryById(id);
        return ResponseEntity.ok(query);
    }

    @GetMapping
    public ResponseEntity<List<TouristUserQuery>> getAllQueries() {
        List<TouristUserQuery> queries = touristUserQueryService.getAllQueries();
        return ResponseEntity.ok(queries);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuery(@PathVariable Long id) {
        touristUserQueryService.deleteQuery(id);
        return ResponseEntity.noContent().build();
    }
}
