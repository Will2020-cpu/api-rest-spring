package com.appjwt.jwtlearning.api;


import com.appjwt.jwtlearning.models.Book;
import com.appjwt.jwtlearning.service.BookService;
import lombok.Data;
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
public class BookResource {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks(){
        return ResponseEntity.ok(bookService.getBooks());
    }


    @GetMapping("/books/author/{id}")
    public ResponseEntity<List<Book>> getBookByAuthorId(@PathVariable Long id){
        return ResponseEntity.ok(bookService.getBookByAuthorId(id));
    }

    @PostMapping("/book/save")
    public ResponseEntity<Book> saveBook(@RequestBody Book book){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/book/save").toUriString());
        return ResponseEntity.created(uri).body(bookService.saveBook(book));
    }

    @PostMapping("/author/addtobook")
    public ResponseEntity<?> addAuthorToBook(@RequestBody AuthorForm authorForm){
        bookService.addAuthorToBook(authorForm.getNameAuthor(),authorForm.getNameBook());
        return ResponseEntity.ok().build();
    }
}

@Data
class AuthorForm{
    private String nameBook;
    private String nameAuthor;
}
