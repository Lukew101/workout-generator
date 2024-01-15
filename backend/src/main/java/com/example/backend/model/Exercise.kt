package com.example.backend.model

import jakarta.persistence.*

@Entity
data class Exercise (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private val id: Long? = null,
    val name: String,
    val type: String,
    val muscle: String? = null,
    val equipment: String? = null,
    val difficulty: String? = null,
    val instructions: String? = null
)