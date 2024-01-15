package com.example.backend.model

import jakarta.persistence.*

@Entity
data class Exercise (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    val name: String = "",
    val type: String = "",
    val muscle: String? = null,
    val equipment: String? = null,
    val difficulty: String? = null,
    val instructions: String? = null,
)