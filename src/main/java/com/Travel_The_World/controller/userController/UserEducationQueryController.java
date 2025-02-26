package com.Travel_The_World.controller.userController;

import com.Travel_The_World.model.TouristUserQuery;
import com.Travel_The_World.model.UserEducationQuery;
import com.Travel_The_World.service.user_management.UserEducationQueryService;
import com.Travel_The_World.service.user_management.UserTouristQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.Travel_The_World.model.TouristUserQuery;

import com.Travel_The_World.service.admin_service.TouristUserQueryService;
import com.Travel_The_World.service.user_management.UserTouristQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/education-user-queries")
public class UserEducationQueryController {

    @Autowired
    private UserEducationQueryService userEducationQueryService;
    @GetMapping("/by-email")
    public ResponseEntity<List<UserEducationQuery>> getUserQueries(@RequestParam String email) {
        List<UserEducationQuery> queries = userEducationQueryService.getUserQueriesByEmail(email);
        return ResponseEntity.ok(queries);
    }

    @PostMapping("/create")
    public ResponseEntity<UserEducationQuery> createQuery(@RequestBody UserEducationQuery query) {
        UserEducationQuery savedQuery = userEducationQueryService.saveQuery(query);
        return ResponseEntity.ok(savedQuery);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEducationQuery> getQueryById(@PathVariable Long id) {
        UserEducationQuery query = userEducationQueryService.getQueryById(id);
        return ResponseEntity.ok(query);
    }

    @GetMapping
    public ResponseEntity<List<UserEducationQuery>> getAllQueries() {
        List<UserEducationQuery> queries = userEducationQueryService.getAllQueries();
        return ResponseEntity.ok(queries);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuery(@PathVariable Long id) {
        userEducationQueryService.deleteQuery(id);
        return ResponseEntity.noContent().build();
    }
}
