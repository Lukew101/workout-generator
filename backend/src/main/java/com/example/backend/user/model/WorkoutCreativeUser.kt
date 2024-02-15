package com.example.backend.user.model

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
class WorkoutCreativeUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0

    var email: String = ""

    var name: String = ""

    var profilePicture: String = ""

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    var programs: MutableList<Program> = mutableListOf()
}