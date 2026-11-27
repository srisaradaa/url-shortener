package com.url.shortener.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CreateShortUrlRequest {
    private String originalUrl;
}
