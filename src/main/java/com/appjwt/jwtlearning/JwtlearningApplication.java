package com.appjwt.jwtlearning;

import com.appjwt.jwtlearning.models.Author;
import com.appjwt.jwtlearning.models.Book;
import com.appjwt.jwtlearning.models.Role;
import com.appjwt.jwtlearning.models.User;
import com.appjwt.jwtlearning.service.AuthorService;
import com.appjwt.jwtlearning.service.BookService;
import com.appjwt.jwtlearning.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class JwtlearningApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtlearningApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run (UserService userService, BookService bookService, AuthorService authorService){
		return args -> {
			userService.saveRole(new Role(null,"ROLE_USER"));
			userService.saveRole(new Role(null,"ROLE_MANAGER"));
			userService.saveRole(new Role(null,"ROLE_ADMIN"));
			userService.saveRole(new Role(null,"ROLE_SUPER_ADMIN"));


			userService.saveUser(new User(null,"William Camacho","new-user","123456", new ArrayList<>()));
			userService.saveUser(new User(null,"Peter Parker","spiderman","123456", new ArrayList<>()));
			userService.saveUser(new User(null,"Tony Stark","ironman","123456", new ArrayList<>()));
			userService.saveUser(new User(null,"Scott","antman","123456", new ArrayList<>()));

			userService.addRoleToUser("new-user","ROLE_USER");
			userService.addRoleToUser("new-user","ROLE_MANAGER");
			userService.addRoleToUser("spiderman","ROLE_MANAGER");
			userService.addRoleToUser("antman","ROLE_ADMIN");
			userService.addRoleToUser("antman","ROLE_SUPER_ADMIN");
			userService.addRoleToUser("antman","ROLE_USER");
			userService.addRoleToUser("ironman","ROLE_USER");

			authorService.saveAuthor(new Author(null,"Willian","Escribo libros",null));

			bookService.saveBook(new Book(null,"Shining","description","https://i.ebayimg.com/images/g/e6wAAOSw2jVhE7Wf/s-l300.png",null,null,null, new ArrayList<>()));
			bookService.addAuthorToBook("Stephen King","Shining");
		};
	}

}
