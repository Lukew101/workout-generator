package com.example.backend.user.controller

import com.example.backend.user.controller.dtos.UserResponseData
import com.example.backend.user.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.web.bind.annotation.CrossOrigin

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/user")
class UserController(
    @Autowired
    private val userService: UserService
) {

    @GetMapping
    fun getUser(@AuthenticationPrincipal user: OidcUser?): UserResponseData? {
        return userService.getUserById(user)
    }

}