package com.appjwt.jwtlearning.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private String url_picture;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date published_date;

    @CreationTimestamp
    private LocalDateTime created_at;

    @UpdateTimestamp
    private LocalDateTime update_at;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Author> authors = new ArrayList<>();
}
