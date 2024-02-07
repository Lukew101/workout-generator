package com.example.backend.user.controller

import com.example.backend.exercise_generator.model.Exercise
import com.example.backend.user.controller.dtos.ProgramRequestDTO
import com.example.backend.user.controller.dtos.UserResponseData
import com.example.backend.user.model.Program
import com.example.backend.user.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.web.bind.annotation.CrossOrigin

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/user")
class UserController(
    @Autowired
    private val userService: UserService
) {

    @GetMapping
    fun getUser(@AuthenticationPrincipal user: OidcUser?): ResponseEntity<UserResponseData> {
        val userData = userService.getUserByEmail(user)
        val idToken = user?.idToken?.tokenValue

        val headers = HttpHeaders()
        headers.add("IdToken", idToken)
        headers.accessControlExposeHeaders = listOf("IdToken")

        return ResponseEntity(userData, headers, HttpStatus.OK)
    }

    @PostMapping("/program")
    fun createProgram(@AuthenticationPrincipal user: OidcUser, @RequestBody programData: ProgramRequestDTO): Program {
        return userService.createProgram(programData, user)
    }
}