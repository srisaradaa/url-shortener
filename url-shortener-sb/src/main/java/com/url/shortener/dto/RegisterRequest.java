package com.url.shortener.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Set;

@Data
public class RegisterRequest {
    @NotBlank(message = "Username is required")
    private String username;

    @NotBlank(message = "Email id is required")
    @Email(message = "Enter a valid email id")
    private String email;

    @NotEmpty(message = "Role is required")
    private Set<@NotBlank String> role;

    @NotBlank
    @Size(min = 6, message = "Password should be at least 6 characters long")
    private String password;
}
