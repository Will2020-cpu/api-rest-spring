package com.appjwt.jwtlearning.service;

import com.appjwt.jwtlearning.models.Author;
import com.appjwt.jwtlearning.repository.AuthorRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service @RequiredArgsConstructor @Transactional @Slf4j
public class AuthorServiceImpl implements AuthorService {

    @Autowired
    private AuthorRepo authorRepo;

    @Override
    public Author saveAuthor(Author author) {
        log.info("Saving author {}",author.getName());
        authorRepo.save(author);
        return author;
    }

    @Override
    public Author getAuthor(String name) {
        return authorRepo.findByName(name);
    }

    @Override
    public List<Author> getAuthors() {
        return authorRepo.findAll();
    }
}
