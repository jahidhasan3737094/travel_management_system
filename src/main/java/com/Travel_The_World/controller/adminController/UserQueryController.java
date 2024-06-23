package com.Travel_The_World.controller.adminController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Travel_The_World.model.UserQuery;
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
    public ResponseEntity<UserQuery> createUserQuery(@RequestBody UserQuery userQuery) {
        System.out.println("Received User Email: " + userQuery.getUserEmail()); // Log received email
        UserQuery savedUserQuery = userQueryService.saveUserQuery(userQuery);
        return ResponseEntity.ok(savedUserQuery);
    }

    @GetMapping
    public List<UserQuery> getAllUserQueries() {
        return userQueryService.getAllUserQueries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserQuery> getUserQueryById(@PathVariable Integer id) {
        Optional<UserQuery> userQuery = userQueryService.getUserQueryById(id);
        return userQuery.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserQuery> updateUserQuery(@PathVariable Integer id, @RequestBody UserQuery userQueryDetails) {
        Optional<UserQuery> userQueryOptional = userQueryService.getUserQueryById(id);
        if (userQueryOptional.isPresent()) {
            UserQuery userQuery = userQueryOptional.get();
            userQuery.setFirstName(userQueryDetails.getFirstName());
            userQuery.setLastName(userQueryDetails.getLastName());
            userQuery.setUserEmail(userQueryDetails.getUserEmail());
            userQuery.setContactNumber(userQueryDetails.getContactNumber());
            userQuery.setQueryCountry(userQueryDetails.getQueryCountry());
            userQuery.setEducationLevel(userQueryDetails.getEducationLevel());
            userQuery.setDocuments(userQueryDetails.getDocuments());
            userQuery.setSubject(userQueryDetails.getSubject());

            UserQuery updatedUserQuery = userQueryService.saveUserQuery(userQuery);
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
