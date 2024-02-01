package com.example.backend.exceptionHandler

import lombok.AllArgsConstructor

@Data
@AllArgsConstructor
class ErrorMessageResponse {
    private val timestamp: LocalDateTime? = null
    private val status = 0
    private val path: String? = null
    private val message: String? = null
}