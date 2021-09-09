package com.appjwt.jwtlearning.service;

import com.appjwt.jwtlearning.models.Author;
import com.appjwt.jwtlearning.models.Book;
import com.appjwt.jwtlearning.repository.AuthorRepo;
import com.appjwt.jwtlearning.repository.BookRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepo bookRepo;
    @Autowired
    private AuthorRepo authorRepo;

    @Override
    public Book saveBook(Book book) {
        log.info("Add book {}",book.getName());
        bookRepo.save(book);
        return book;
    }

    @Override
    public Book editBook(Long id, Book book) {
       return null;
    }

    @Override
    public void addAuthorToBook(String nameAuthor, String nameBook) {
        log.info("Add author {} to book {}",nameAuthor,nameBook);
        Author author = authorRepo.findByName(nameAuthor);
        Book book = bookRepo.findByName(nameBook);
        book.getAuthors().add(author);
    }

    @Override
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }

    @Override
    public Book getBook(String name) {
        log.info("Searching book by {} ",name);
        return bookRepo.findByName(name);
    }
}
