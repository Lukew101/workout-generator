package com.example.backend.user.security

import com.example.backend.user.model.WorkoutCreativeUser
import com.example.backend.user.service.UserRepository
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.hibernate.jdbc.Work
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component
import java.io.IOException

@Component
class CustomAuthenticationSuccessHandler(
    @Autowired
    private val userRepository: UserRepository
) : AuthenticationSuccessHandler {
    @Throws(IOException::class)
    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication
    ) {
        val oidcUser = authentication.principal as OidcUser
        val userEmail = oidcUser.email
        val user: WorkoutCreativeUser? = userRepository.findByEmail(userEmail)

        if (user == null) {
            val newUser = WorkoutCreativeUser()
            newUser.email = userEmail
            newUser.name = oidcUser.fullName
            newUser.profilePicture = oidcUser.picture
            userRepository.save(newUser)
        }

        response.setHeader("Access-Control-Allow-Credentials", "true")

        response.sendRedirect("http://localhost:3000/myworkouts")
    }
}