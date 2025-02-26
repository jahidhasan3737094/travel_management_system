//package com.Travel_The_World.service.user_management;
//
//import com.Travel_The_World.model.User;
//import com.Travel_The_World.repository.UserRepository;
//import io.jsonwebtoken.security.Keys;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.security.Key;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Value("${jwt.secret}")
//    private String secretKey;
//
//    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
//
//    public User getUserFromToken(String token) {
//        try {
//            Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
//            Claims claims = Jwts.parserBuilder()
//                    .setSigningKey(key)
//                    .build()
//                    .parseClaimsJws(token.replace("Bearer ", ""))
//                    .getBody();
//
//            Integer userId = (Integer) claims.get("userId");
//            if (userId == null) {
//                logger.warn("User ID not found in token claims");
//                return null;
//            }
//
//            logger.debug("Extracted userId: {}", userId);
//            return userRepository.findById(userId).orElse(null);
//        } catch (Exception e) {
//            logger.error("Error extracting user from token", e);
//            return null;
//        }
//    }
//}

package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import com.Travel_The_World.security.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public User getUserFromToken(String token) {
        try {
            // Extract userId from the token
            Integer userId = jwtUtil.extractUserId(token.replace("Bearer ", ""));
            if (userId == null) {
                logger.warn("User ID not found in token claims");
                return null;
            }

            logger.debug("Extracted userId: {}", userId);
            return userRepository.findById(userId).orElse(null);
        } catch (Exception e) {
            logger.error("Error extracting user from token", e);
            return null;
        }
    }
}
