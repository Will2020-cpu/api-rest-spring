package com.appjwt.jwtlearning.service;

import com.appjwt.jwtlearning.models.Role;
import com.appjwt.jwtlearning.models.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();

}
