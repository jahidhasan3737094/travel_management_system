////package com.Travel_The_World.security;
////
////import com.Travel_The_World.service.user_management.CustomUserDetailsService;
////import jakarta.servlet.FilterChain;
////import jakarta.servlet.ServletException;
////import jakarta.servlet.http.HttpServletRequest;
////import jakarta.servlet.http.HttpServletResponse;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
////import org.springframework.security.core.context.SecurityContextHolder;
////import org.springframework.security.core.userdetails.UserDetails;
////import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
////import org.springframework.stereotype.Component;
////import org.springframework.web.filter.OncePerRequestFilter;
////import io.jsonwebtoken.ExpiredJwtException;
////
////
////import java.io.IOException;
////
////@Component
////public class JwtRequestFilter extends OncePerRequestFilter {
////
////    @Autowired
////    private CustomUserDetailsService customUserDetailsService;
////
////    @Autowired
////    private JwtUtil jwtUtil;
////
////    @Override
////    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
////            throws ServletException, IOException {
////
////        final String authorizationHeader = request.getHeader("Authorization");
////
////        String username = null;
////        String jwt = null;
////
////        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
////            jwt = authorizationHeader.substring(7);
////            try {
////                username = jwtUtil.extractUsername(jwt);
////            } catch (ExpiredJwtException e) {
////                logger.warn("JWT token has expired");
////            } catch (Exception e) {
////                logger.warn("Error extracting username from JWT token");
////            }
////        }
////
////        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
////
////            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(username);
////
////            if (jwtUtil.validateToken(jwt, userDetails)) {
////
////                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
////                        userDetails, null, userDetails.getAuthorities());
////                usernamePasswordAuthenticationToken
////                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
////                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
////            }
////        }
////        chain.doFilter(request, response);
////    }
////}
//
//package com.Travel_The_World.security;
//
//import com.Travel_The_World.service.user_management.CustomUserDetailsService;
//import io.jsonwebtoken.ExpiredJwtException;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//@Component
//public class JwtRequestFilter extends OncePerRequestFilter {
//
//    public static final Logger logger = LoggerFactory.getLogger(JwtRequestFilter.class);
//
//    private final CustomUserDetailsService customUserDetailsService;
//    private final JwtUtil jwtUtil;
//
//    public JwtRequestFilter(CustomUserDetailsService customUserDetailsService, JwtUtil jwtUtil) {
//        this.customUserDetailsService = customUserDetailsService;
//        this.jwtUtil = jwtUtil;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//            throws ServletException, IOException {
//
//        final String authorizationHeader = request.getHeader("Authorization");
//
//        String username = null;
//        String jwt = null;
//
//        // Extract JWT from Authorization header
//        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//            jwt = authorizationHeader.substring(7); // Remove "Bearer " prefix
//            try {
//                username = jwtUtil.extractUsername(jwt);
//            } catch (ExpiredJwtException e) {
//                logger.warn("JWT token has expired: {}", e.getMessage());
//            } catch (Exception e) {
//                logger.error("Error extracting username from JWT token: {}", e.getMessage());
//            }
//        }
//
//        // Validate the token and set the security context
//        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(username);
//
//            if (jwtUtil.validateToken(jwt, userDetails)) {
//                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//                        userDetails, null, userDetails.getAuthorities());
//                usernamePasswordAuthenticationToken
//                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                // Set the authentication in the context
//                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//                logger.info("Authentication set for user: {}", username);
//            } else {
//                logger.warn("Invalid JWT token for user: {}", username);
//            }
//        }
//
//        // Continue the filter chain
//        chain.doFilter(request, response);
//    }
//}


package com.Travel_The_World.security;

import com.Travel_The_World.service.user_management.CustomUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtRequestFilter.class);

    private final CustomUserDetailsService customUserDetailsService;
    private final JwtUtil jwtUtil;

    public JwtRequestFilter(CustomUserDetailsService customUserDetailsService, JwtUtil jwtUtil) {
        this.customUserDetailsService = customUserDetailsService;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            try {
                username = jwtUtil.extractUsername(jwt);
            } catch (ExpiredJwtException e) {
                logger.warn("JWT token has expired: {}", e.getMessage());
            } catch (Exception e) {
                logger.error("Error extracting username from JWT token: {}", e.getMessage());
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(username);
            if (jwtUtil.validateToken(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }

        chain.doFilter(request, response);
    }
}
