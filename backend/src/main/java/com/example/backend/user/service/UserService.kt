package com.example.backend.user.service

import com.example.backend.exceptionHandler.exception.UserNotFoundException
import com.example.backend.user.controller.dtos.UserResponseData
import org.springframework.security.access.AccessDeniedException
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository
) {
    fun getUserByEmail(user: OidcUser?): UserResponseData {
        val email = user?.email ?: throw AccessDeniedException("User not authenticated")

        val workoutCreativeUser = userRepository.findByEmail(email)
            ?: throw UserNotFoundException("User not found")

        return UserResponseData(
            name = workoutCreativeUser.name,
            email = workoutCreativeUser.email,
            profilePicture = workoutCreativeUser.profilePicture
        )
    }
}