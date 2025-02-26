//////package com.Travel_The_World.config;
//////
//////import com.Travel_The_World.security.JwtRequestFilter;
//////import com.Travel_The_World.service.user_management.CustomUserDetailsService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.context.annotation.Bean;
//////import org.springframework.context.annotation.Configuration;
//////import org.springframework.security.authentication.AuthenticationManager;
//////import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//////import org.springframework.security.config.http.SessionCreationPolicy;
//////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//////import org.springframework.security.crypto.password.PasswordEncoder;
//////import org.springframework.security.web.SecurityFilterChain;
//////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
//////@Configuration
//////public class SecurityConfig {
//////
//////    @Autowired
//////    private JwtRequestFilter jwtRequestFilter;
//////
//////    @Bean
//////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//////        http.csrf(csrf -> csrf.disable())
//////                .authorizeHttpRequests((authz) -> authz
//////                        .requestMatchers("/auth/**","/reviews/**","/upload-review/**", "/register/**", "/admin/user-queries/**","/admin/tourist-user-queries/**","/admin/all-user/**","/login").permitAll()
//////                        .anyRequest().authenticated()
//////                )
//////                .sessionManagement((session) -> session
//////                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//////                );
//////
//////        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//////
//////        return http.build();
//////    }
//////
//////    @Bean
//////    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//////        return authenticationConfiguration.getAuthenticationManager();
//////    }
//////
//////    @Bean
//////    public PasswordEncoder passwordEncoder() {
//////        return new BCryptPasswordEncoder();
//////    }
//////}
////////
//////
//////@Configuration
//////@EnableWebSecurity
//////public class SecurityConfig {
//////
//////    @Autowired
//////    private JwtRequestFilter jwtRequestFilter;
//////
//////    @Bean
//////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//////        http.csrf(csrf -> csrf.disable())
//////                .authorizeHttpRequests((authz) -> authz
//////                        .requestMatchers("/auth/**", "/register/**","/reviews/**").permitAll()
//////                        .anyRequest().authenticated()
//////                )
//////                .sessionManagement((session) -> session
//////                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//////                );
//////
//////        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//////
//////        return http.build();
//////    }
//////
//////    @Bean
//////    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//////        return authenticationConfiguration.getAuthenticationManager();
//////    }
//////
//////    @Bean
//////    public PasswordEncoder passwordEncoder() {
//////        return new BCryptPasswordEncoder();
//////    }
//////}
////
////
////package com.Travel_The_World.config;
////
////import com.Travel_The_World.security.JwtRequestFilter;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.authentication.AuthenticationManager;
////import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
////@Configuration
////public class SecurityConfig {
////
////    @Autowired
////    private JwtRequestFilter jwtRequestFilter;
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http
////                .csrf(csrf -> csrf.disable()) // Disable CSRF for specific APIs (not recommended for production without proper token-based protection)
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers(
////                                "/auth/**",
////                                "/register/**",
////                                "/reviews/**",
////                                "/upload-review/**",
////                                "/admin/user-queries/**",
////                                "/admin/tourist-user-queries/**",
////                                "/admin/all-user/**",
////                                "/login"
////                        ).permitAll() // Allow unauthenticated access to these endpoints
////                        .anyRequest().authenticated() // Require authentication for all other endpoints
////                )
////                .sessionManagement(session -> session
////                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Ensure the application is stateless
////                )
////                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
////
////    @Bean
////    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
////        return authenticationConfiguration.getAuthenticationManager();
////    }
////
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////}
//
//package com.Travel_The_World.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable()) // Disable CSRF for APIs
//                .cors(cors -> {}) // Enable CORS
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/auth/**", "/register/**","/admin/user-queries/**","/admin/tourist-user-queries/**","/reviews/**","/upload-review/**",
//                                "/uploads/**","/admin/all-user/**","/user/tourist-user-queries/**","user/education-user-queries/**","/api/admin/login", "/api/admin/register").permitAll() // Public endpoints
//                        .anyRequest().authenticated() // Protect all other endpoints
//                )
//                .sessionManagement(session -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Stateless session
//                );
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}
//adding admin

package com.Travel_The_World.config;


import com.Travel_The_World.security.JwtRequestFilter;
import com.Travel_The_World.service.admin_service.AdminService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> {})
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/**","/auth/**", "/register/**", "/admin/user-queries/**",
                                "/admin/tourist-user-queries/**", "/reviews/**", "/upload-review/**",
                                "/uploads/**", "/admin/all-user/**", "/user/tourist-user-queries/**",
                                "/user/education-user-queries/**", "/api/admin/login", "/api/admin/register").permitAll()
                        .requestMatchers("/api/admin/**").hasAuthority("ROLE_ADMIN")
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                ).exceptionHandling(exception -> exception
                        .accessDeniedHandler((request, response, accessDeniedException) -> {
                            System.out.println("❌ Access Denied: " + accessDeniedException.getMessage());
                            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied");
                        })
                );

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(AdminService adminService) {
        return adminService;
    }
}
