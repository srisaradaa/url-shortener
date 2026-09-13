package com.url.shortener.controller;

import com.url.shortener.dto.LoginRequest;
import com.url.shortener.dto.RegisterRequest;
import com.url.shortener.entity.User;
import com.url.shortener.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private UserService userService;

    @PostMapping("/public/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest){
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setRole("ROLE_USER");
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/public/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(userService.authenticateUser(loginRequest));
    }
}
