//package com.Travel_The_World.controller.adminController;
//
//import com.Travel_The_World.model.TouristUserQuery;
//import com.Travel_The_World.model.UserQuery;
//import com.Travel_The_World.service.admin_service.UserQueryService;
////import com.Travel_The_World.service.user_management.LoggedTouristUserQueryService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/queries")
//public class QueryController {
//
//    @Autowired
//    private LoggedTouristUserQueryService touristUserQueryService;
//    @Autowired
//    private UserQueryService userQueryService;
//    @GetMapping("/tourist")
//    public ResponseEntity<List<TouristUserQuery>> getTouristQueries(@RequestParam String email) {
//        System.out.println("Received email parameter: [" + email + "]"); // Debugging output
//
//        List<TouristUserQuery> queries = touristUserQueryService.getTouristQueriesByEmail(email);
//
//        System.out.println("Returning " + queries.size() + " results for email: [" + email + "]"); // Debugging output
//
//        return ResponseEntity.ok(queries);
//    }
//
//    @GetMapping("/education")
//    public ResponseEntity<List<UserQuery>> getEducationQueries(@RequestParam String email) {
//        System.out.println("Received request for education queries by email: [" + email + "]"); // Debugging log
//
//        List<UserQuery> queries = userQueryService.getUserQueriesByEmail(email);
//
//        System.out.println("Returning " + queries.size() + " education queries for email: [" + email + "]"); // Debugging log
//
//        return ResponseEntity.ok(queries);
//    }
//}
