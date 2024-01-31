package com.example.backend.user.security

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.core.Authentication
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component
import java.io.IOException

@Component
class CustomAuthenticationSuccessHandler : AuthenticationSuccessHandler {
    @Throws(IOException::class)
    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication
    ) {
        val oidcUser = authentication.principal as OidcUser
        val token = oidcUser.idToken.tokenValue
        response.setHeader("Access-Control-Allow-Credentials", "true")

//        response.addCookie(createNewCookie(oidcUser.getIdToken().getTokenValue()));
        response.sendRedirect("http://localhost:3000/?token=$token")
    }

//    private Cookie createNewCookie(String tokenValue) {
    //        Cookie cookie = new Cookie("JwtToken", tokenValue);
    //        cookie.setHttpOnly(true);
    //        cookie.setMaxAge(3500);
    //        cookie.setSecure(true);
    //        cookie.setPath("/");
    //        cookie.setDomain(getDomain(websiteProperties.frontend()));
    //        return cookie;
    //    }
}