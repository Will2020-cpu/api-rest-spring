package com.appjwt.jwtlearning.repository;

import com.appjwt.jwtlearning.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepo extends JpaRepository<Author,Long> {
    Author findByName(String name);
}
