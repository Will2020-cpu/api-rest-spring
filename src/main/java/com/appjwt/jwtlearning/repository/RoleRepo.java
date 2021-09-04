package com.appjwt.jwtlearning.repository;

import com.appjwt.jwtlearning.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
