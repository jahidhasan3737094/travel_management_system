package com.Travel_The_World.controller.adminController;

import com.Travel_The_World.model.User;
import com.Travel_The_World.service.admin_service.AllUserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/all-user")
public class AllUserInfo {
    @Autowired
    private AllUserInfoService allUserInfoService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> all = allUserInfoService.getAllUserInfo();
        return ResponseEntity.ok(all);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        allUserInfoService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
