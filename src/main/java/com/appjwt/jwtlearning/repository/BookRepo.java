package com.appjwt.jwtlearning.repository;

import com.appjwt.jwtlearning.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepo extends JpaRepository<Book,Long> {
    Book findByName(String name);

}
