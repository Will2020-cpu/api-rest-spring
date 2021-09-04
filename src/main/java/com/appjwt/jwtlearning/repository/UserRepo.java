package com.appjwt.jwtlearning.repository;

import com.appjwt.jwtlearning.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
    User findByUsername(String username);
}
