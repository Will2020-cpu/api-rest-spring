package com.appjwt.jwtlearning.api;


import com.appjwt.jwtlearning.models.Author;
import com.appjwt.jwtlearning.service.AuthorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class AuthorResource {

    @Autowired
    private AuthorService authorService;

    @GetMapping("/authors")
    public ResponseEntity<List<Author>> getAuthors(){
        return ResponseEntity.ok(authorService.getAuthors());
    }

    @PostMapping("/author/save")
    public ResponseEntity<Author> saveAuthor(@RequestBody Author author){

        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/author/save").toUriString());
        return ResponseEntity.created(uri).body(authorService.saveAuthor(author));
    }
}
