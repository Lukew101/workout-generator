package com.example.backend.exceptionHandler

import java.time.LocalDateTime

data class ErrorMessageResponse (
    private val timestamp: LocalDateTime? = null,
    private val status: Int = 0,
    private val path: String? = null,
    private val message: String? = null,
)