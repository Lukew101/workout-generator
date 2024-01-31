package com.example.backend.user.controller

import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.web.bind.annotation.CrossOrigin

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/user")
class UserController {
    @GetMapping
    fun getUser(@AuthenticationPrincipal user: OidcUser?): String {
        if (user == null) return "No user"
        return user.email.toString()
    }
}