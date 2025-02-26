package com.Travel_The_World.repository;

import com.Travel_The_World.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest // Focuses on JPA components
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveUser() {
        // Arrange
        User user = new User();
        user.setUsername("testuser");
        user.setPassword("password123");
        user.setUserEmail("test@example.com");
        user.setUserFirstName("Test");
        user.setUserLastName("User");

        // Act
        User savedUser = userRepository.save(user);

        // Assert
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getUserId()).isNotNull();
        assertThat(savedUser.getUserEmail()).isEqualTo("test@example.com");
    }

    @Test
    public void testFindByUserEmail() {
        // Arrange
        User user = new User();
        user.setUsername("finduser");
        user.setPassword("password123");
        user.setUserEmail("find@example.com");
        user.setUserFirstName("Find");
        user.setUserLastName("User");

        userRepository.save(user);

        // Act
        User foundUser = userRepository.findByUserEmail("find@example.com");

        // Assert
        assertThat(foundUser).isNotNull();
        assertThat(foundUser.getUserEmail()).isEqualTo("find@example.com");
    }

    @Test
    public void testFindByUserEmail_NotFound() {
        // Act
        User foundUser = userRepository.findByUserEmail("nonexistent@example.com");

        // Assert
        assertThat(foundUser).isNull();
    }
}
