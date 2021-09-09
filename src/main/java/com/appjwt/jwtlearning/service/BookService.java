package com.appjwt.jwtlearning.service;

import com.appjwt.jwtlearning.models.Book;

import java.util.List;

public interface BookService {
    Book saveBook(Book book);
    Book editBook(Long id, Book book);
    void addAuthorToBook(String nameAuthor,String nameBook);
    List<Book> getBooks();
    Book getBook(String name);
}
