package com.Travel_The_World.controller.adminController;

import com.Travel_The_World.model.UserEducationQuery;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Travel_The_World.model.UserEducationQuery;
import com.Travel_The_World.service.admin_service.UserQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/user-queries")
public class UserQueryController {

    @Autowired
    private UserQueryService userQueryService;

    @PostMapping("/submit")
    public ResponseEntity<UserEducationQuery> createUserQuery(@RequestBody UserEducationQuery userQuery) {
        System.out.println("Received User Email: " + userQuery.getUserEmail()); // Log received email
        UserEducationQuery savedUserQuery = userQueryService.saveUserQuery(userQuery);
        return ResponseEntity.ok(savedUserQuery);
    }

    @GetMapping
    public List<UserEducationQuery> getAllUserQueries() {
        return userQueryService.getAllUserQueries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEducationQuery> getUserQueryById(@PathVariable Integer id) {
        Optional<UserEducationQuery> userQuery = userQueryService.getUserQueryById(id);
        return userQuery.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserEducationQuery> updateUserQuery(@PathVariable Integer id, @RequestBody UserEducationQuery userQueryDetails) {
        Optional<UserEducationQuery> userQueryOptional = userQueryService.getUserQueryById(id);
        if (userQueryOptional.isPresent()) {
            UserEducationQuery userQuery = userQueryOptional.get();
            userQuery.setFirstName(userQueryDetails.getFirstName());
            userQuery.setLastName(userQueryDetails.getLastName());
            userQuery.setUserEmail(userQueryDetails.getUserEmail());
            userQuery.setContactNumber(userQueryDetails.getContactNumber());
            userQuery.setQueryCountry(userQueryDetails.getQueryCountry());
            userQuery.setEducationLevel(userQueryDetails.getEducationLevel());
            userQuery.setDocuments(userQueryDetails.getDocuments());
            userQuery.setSubject(userQueryDetails.getSubject());

            UserEducationQuery updatedUserQuery = userQueryService.saveUserQuery(userQuery);
            return ResponseEntity.ok(updatedUserQuery);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserQuery(@PathVariable Integer id) {
        userQueryService.deleteUserQuery(id);
        return ResponseEntity.noContent().build();
    }
}
