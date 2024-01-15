package com.example.backend.model

import jakarta.persistence.*

@Entity
class Program (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private val id: Long = 0,

    var name: String = "",

    @ManyToMany
    @JoinTable(
        name = "program_exercise",
        joinColumns = [JoinColumn(name = "program_id")],
        inverseJoinColumns = [JoinColumn(name = "exercise_id")]
    )
    var exercises: List<Exercise> = ArrayList()
)