package com.example.backend.user.model

import jakarta.persistence.*

@Entity
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private val id: Long = 0

    var email: String = ""

    var name: String = ""

    @ManyToMany
    @JoinTable(
        name = "user_exercise_program",
        joinColumns = [JoinColumn(name = "user_id")],
        inverseJoinColumns = [JoinColumn(name = "exercise_program_id")]
    )
    var exercisePrograms: List<ExerciseProgram> = ArrayList()
}