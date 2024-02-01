package com.example.backend.user.model

import jakarta.persistence.*

@Entity
class WorkoutCreativeUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long = 0

    var email: String = ""

    var name: String = ""

    @OneToMany(mappedBy = "user")
    var programs: List<Program> = ArrayList()
}