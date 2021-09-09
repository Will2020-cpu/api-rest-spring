package com.appjwt.jwtlearning.service;

import com.appjwt.jwtlearning.models.Author;

import java.util.List;

public interface AuthorService {
    Author saveAuthor(Author author);
    Author getAuthor(String name);
    List<Author> getAuthors();
}
