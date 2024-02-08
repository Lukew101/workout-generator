package com.example.backend.user.security;

import static com.example.backend.user.security.CorsConfig.withWorkoutCreativeDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;

import java.io.IOException;


import static org.springframework.security.web.util.matcher.AntPathRequestMatcher.antMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;
    @Value("${okta.oauth2.issuer}")
    private String issuer;
    @Value("${okta.oauth2.client-id}")
    private String clientId;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(antMatcher("/api/exercise/**"), antMatcher("/api/status")).permitAll()
                        .anyRequest().authenticated()
                )
                .cors(withWorkoutCreativeDefaults("http://localhost:3000"))
                .csrf(CsrfConfigurer::disable)
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(customAuthenticationSuccessHandler))
                .logout(logout -> logout
                        .addLogoutHandler(logoutHandler()))
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> jwt
                                .decoder(jwtDecoder())
                        )
                );
        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withJwkSetUri(issuer + ".well-known/jwks.json").build();
    }

    private LogoutHandler logoutHandler() {
        return (request, response, authentication) -> {
            try {
                String frontendUrl = "http://localhost:3000/";
                response.sendRedirect(issuer + "v2/logout?client_id=" + clientId + "&returnTo=" + frontendUrl);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        };
    }
}

