package com.appjwt.jwtlearning.repository;

import com.appjwt.jwtlearning.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookRepo extends JpaRepository<Book,Long> {
    Book findByName(String name);
}
