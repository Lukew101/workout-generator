package com.example.backend.exceptionHandler

import com.example.backend.exceptionHandler.exception.UserNotFoundException
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import java.time.LocalDateTime

@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException::class)
    fun handleUserNotFoundException(ex: UserNotFoundException): ResponseEntity<ErrorMessageResponse> {
        return displayErrorMessage(LocalDateTime.now(), 404, "api/user", ex.message!!)
    }

    @ExceptionHandler(AccessDeniedException::class)
    fun handleAccessDeniedException(ex: AccessDeniedException): ResponseEntity<ErrorMessageResponse> {
        return displayErrorMessage(LocalDateTime.now(), 403, "api/user", ex.message!!)
    }

    private fun displayErrorMessage(
        time: LocalDateTime,
        status: Int,
        path: String,
        errorMessage: String
    ): ResponseEntity<ErrorMessageResponse> {
        val errorResponse = ErrorMessageResponse(
            time,
            status,
            path,
            errorMessage
        )
        return ResponseEntity.status(status).body(errorResponse)
    }
}