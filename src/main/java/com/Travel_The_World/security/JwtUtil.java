//////package com.Travel_The_World.security;
//////
//////import io.jsonwebtoken.Claims;
//////import io.jsonwebtoken.Jwts;
//////import io.jsonwebtoken.SignatureAlgorithm;
//////import io.jsonwebtoken.security.Keys;
//////import org.springframework.security.core.userdetails.UserDetails;
//////import org.springframework.stereotype.Component;
//////
//////import javax.crypto.SecretKey;
//////import java.util.Date;
//////import java.util.HashMap;
//////import java.util.Map;
//////import java.util.function.Function;
//////
//////@Component
//////public class JwtUtil {
//////
//////    // Generate a secure key for HS256
//////    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
//////
//////
//////    public String extractUsername(String token) {
//////        return extractClaim(token, Claims::getSubject);
//////    }
//////
//////    public Date extractExpiration(String token) {
//////        return extractClaim(token, Claims::getExpiration);
//////    }
//////
//////    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//////        final Claims claims = extractAllClaims(token);
//////        return claimsResolver.apply(claims);
//////    }
//////
//////    private Claims extractAllClaims(String token) {
//////        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
//////    }
//////
//////    private Boolean isTokenExpired(String token) {
//////        return extractExpiration(token).before(new Date());
//////    }
//////
//////    public String generateToken(UserDetails userDetails) {
//////        Map<String, Object> claims = new HashMap<>();
//////        return createToken(claims, userDetails.getUsername());
//////    }
//////
//////    private String createToken(Map<String, Object> claims, String subject) {
//////        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
//////                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
//////                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//////    }
//////
//////    public Boolean validateToken(String token, UserDetails userDetails) {
//////        final String username = extractUsername(token);
//////        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//////    }
//////}
////
////package com.Travel_The_World.security;
////
////import io.jsonwebtoken.*;
////import io.jsonwebtoken.security.Keys;
////import org.springframework.beans.factory.annotation.Value;
////import org.springframework.security.core.userdetails.UserDetails;
////import org.springframework.stereotype.Component;
////
////import javax.crypto.SecretKey;
////import java.util.Date;
////import java.util.HashMap;
////import java.util.Map;
////import java.util.function.Function;
////
////@Component
////public class JwtUtil {
////
////    // Securely load the secret key from application.properties
////    private final SecretKey SECRET_KEY;
////
////    public JwtUtil(@Value("${jwt.secret}") String secret) {
////        this.SECRET_KEY = Keys.hmacShaKeyFor(secret.getBytes());
////    }
////
////    /**
////     * Extract the username from the JWT token.
////     * @param token JWT token
////     * @return Username (subject) embedded in the token
////     */
////    public String extractUsername(String token) {
////        return extractClaim(token, Claims::getSubject);
////    }
////
////    /**
////     * Extract the expiration date from the JWT token.
////     * @param token JWT token
////     * @return Expiration date of the token
////     */
////    public Date extractExpiration(String token) {
////        return extractClaim(token, Claims::getExpiration);
////    }
////
////    /**
////     * Extract specific claims from the JWT token.
////     * @param token JWT token
////     * @param claimsResolver Function to resolve specific claims
////     * @return Resolved claim
////     */
////    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
////        final Claims claims = extractAllClaims(token);
////        return claimsResolver.apply(claims);
////    }
////
////    /**
////     * Generate a new JWT token for the given user details.
////     * @param userDetails UserDetails object containing user information
////     * @return Signed JWT token
////     */
////    public String generateToken(UserDetails userDetails) {
////        Map<String, Object> claims = new HashMap<>();
////        return createToken(claims, userDetails.getUsername());
////    }
////
////    /**
////     * Validate the JWT token against the provided user details.
////     * @param token JWT token
////     * @param userDetails UserDetails object
////     * @return True if the token is valid, false otherwise
////     */
////    public Boolean validateToken(String token, UserDetails userDetails) {
////        final String username = extractUsername(token);
////        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
////    }
////
////    // ================== Private Helper Methods ==================
////
////    private Claims extractAllClaims(String token) {
////        try {
////            return Jwts.parserBuilder()
////                    .setSigningKey(SECRET_KEY)
////                    .build()
////                    .parseClaimsJws(token)
////                    .getBody();
////        } catch (JwtException | IllegalArgumentException e) {
////            throw new RuntimeException("Invalid JWT Token", e); // Handle token parsing exceptions
////        }
////    }
////
////    private Boolean isTokenExpired(String token) {
////        return extractExpiration(token).before(new Date());
////    }
////
////    private String createToken(Map<String, Object> claims, String subject) {
////        return Jwts.builder()
////                .setClaims(claims)
////                .setSubject(subject)
////                .setIssuedAt(new Date(System.currentTimeMillis()))
////                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Token valid for 10 hours
////                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
////                .compact();
////    }
////}
//
//
//package com.Travel_The_World.security;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//
//import java.security.Key;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//@Component
//public class JwtUtil {
//
//    private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);
//    private final Key SECRET_KEY;
//
//    @Value("${jwt.expiration}")
//    private long jwtExpirationInMs; // Token expiration time in milliseconds
//
//    public JwtUtil(@Value("${jwt.secret}") String secret) {
//        this.SECRET_KEY = Keys.hmacShaKeyFor(secret.getBytes());
//    }
//
//    /**
//     * Generate a token for a user including userId and username.
//     *
//     * @param userDetails The user details object.
//     * @param userId      The user's ID.
//     * @return A signed JWT token.
//     */
//    public String generateToken(UserDetails userDetails, Integer userId) {
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("userId", userId); // Add userId to the claims
//        return createToken(claims, userDetails.getUsername());
//    }
//
//    /**
//     * Create a token with given claims and subject.
//     *
//     * @param claims  Additional claims to include in the token.
//     * @param subject The subject (username).
//     * @return A signed JWT token.
//     */
//    private String createToken(Map<String, Object> claims, String subject) {
//        return Jwts.builder()
//                .setClaims(claims)
//                .setSubject(subject)
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs)) // Expiration time
//                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
//                .compact();
//    }
//
//    /**
//     * Extract the username from the token.
//     *
//     * @param token The JWT token.
//     * @return The username (subject).
//     */
//    public String extractUsername(String token) {
//        return extractClaim(token, Claims::getSubject);
//    }
//
//    /**
//     * Extract userId from the token.
//     *
//     * @param token The JWT token.
//     * @return The userId claim.
//     */
//    public Integer extractUserId(String token) {
//        Claims claims = extractAllClaims(token);
//        return claims.get("userId", Integer.class);
//    }
//
//    /**
//     * Extract the expiration date from the token.
//     *
//     * @param token The JWT token.
//     * @return The expiration date.
//     */
//    public Date extractExpiration(String token) {
//        return extractClaim(token, Claims::getExpiration);
//    }
//
//    /**
//     * Extract a specific claim using a resolver.
//     *
//     * @param token          The JWT token.
//     * @param claimsResolver The resolver function to extract the claim.
//     * @param <T>            The type of the claim.
//     * @return The claim value.
//     */
//    public <T> T extractClaim(String token, java.util.function.Function<Claims, T> claimsResolver) {
//        final Claims claims = extractAllClaims(token);
//        return claimsResolver.apply(claims);
//    }
//
//    /**
//     * Extract all claims from the token.
//     *
//     * @param token The JWT token.
//     * @return The claims object.
//     */
//    private Claims extractAllClaims(String token) {
//        try {
//            return Jwts.parserBuilder()
//                    .setSigningKey(SECRET_KEY)
//                    .build()
//                    .parseClaimsJws(token)
//                    .getBody();
//        } catch (JwtException | IllegalArgumentException e) {
//            logger.error("Invalid JWT Token: {}", e.getMessage());
//            throw new RuntimeException("Invalid JWT Token", e);
//        }
//    }
//
//    /**
//     * Check if the token is expired.
//     *
//     * @param token The JWT token.
//     * @return True if the token is expired, false otherwise.
//     */
//    private Boolean isTokenExpired(String token) {
//        return extractExpiration(token).before(new Date());
//    }
//
//    /**
//     * Validate the token against the user details.
//     *
//     * @param token       The JWT token.
//     * @param userDetails The user details.
//     * @return True if the token is valid, false otherwise.
//     */
//    public Boolean validateToken(String token, UserDetails userDetails) {
//        final String username = extractUsername(token);
//        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//    }
//}
//so far user works fine
//now trying do for the admin
package com.Travel_The_World.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);
    private final Key SECRET_KEY;

    @Value("${jwt.expiration}")
    private long jwtExpirationInMs; // Token expiration time in milliseconds

    public JwtUtil(@Value("${jwt.secret}") String secret) {
        this.SECRET_KEY = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(String email) {
        return createToken(new HashMap<>(), email);
    }

    /**
     * Generate a token for a regular user including userId and username.
     *
     * @param userDetails The user details object.
     * @param userId      The user's ID.
     * @return A signed JWT token.
     */
    public String generateToken(UserDetails userDetails, Integer userId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId); // Add userId to the claims
        claims.put("role", "USER"); // Explicitly set role as USER
        return createToken(claims, userDetails.getUsername());
    }


    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs)) // Expiration time
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }

    /**
     * Extract the username from the token.
     *
     * @param token The JWT token.
     * @return The username (subject).
     */
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    /**
     * Extract userId from the token.
     *
     * @param token The JWT token.
     * @return The userId claim.
     */
    public Integer extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("userId", Integer.class);
    }

    /**
     * Extract the role from the token.
     *
     * @param token The JWT token.
     * @return The role claim.
     */
    public String extractRole(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("role", String.class);
    }

    /**
     * Extract the expiration date from the token.
     *
     * @param token The JWT token.
     * @return The expiration date.
     */
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    /**
     * Extract a specific claim using a resolver.
     *
     * @param token          The JWT token.
     * @param claimsResolver The resolver function to extract the claim.
     * @param <T>            The type of the claim.
     * @return The claim value.
     */
    public <T> T extractClaim(String token, java.util.function.Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Extract all claims from the token.
     *
     * @param token The JWT token.
     * @return The claims object.
     */
    private Claims extractAllClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (JwtException | IllegalArgumentException e) {
            logger.error("Invalid JWT Token: {}", e.getMessage());
            throw new RuntimeException("Invalid JWT Token", e);
        }
    }

    /**
     * Check if the token is expired.
     *
     * @param token The JWT token.
     * @return True if the token is expired, false otherwise.
     */
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    /**
     * Validate the token against the user details.
     *
     * @param token       The JWT token.
     * @param userDetails The user details.
     * @return True if the token is valid, false otherwise.
     */
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }



}
