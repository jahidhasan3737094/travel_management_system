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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserQuery(@PathVariable Integer id) {
        userQueryService.deleteUserQuery(id);
        return ResponseEntity.noContent().build();
    }
}
