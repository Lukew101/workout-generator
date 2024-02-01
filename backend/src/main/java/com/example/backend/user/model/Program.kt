package com.example.backend.user.model

import com.example.backend.exercise_generator.model.Exercise
import jakarta.persistence.*

@Entity
class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long = 0

    var name: String = ""

    @OneToMany(mappedBy = "program")
    var exercises: MutableList<Exercise> = mutableListOf()

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: WorkoutCreativeUser? = null
}