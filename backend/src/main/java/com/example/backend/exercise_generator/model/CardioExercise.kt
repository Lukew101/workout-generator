package com.example.backend.exercise_generator.model

import com.example.backend.user.model.Program
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
class CardioExercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0
    var name: String = ""
    var type: String = ""
    var equipment: String? = null
    var difficulty: String? = null
    @Column(length = 5000)
    var instructions: String? = null
    var sets: Int? = null
    var duration: Int? = null

    @ManyToOne
    @JoinColumn(name = "program_id")
    @JsonIgnore
    var program: Program? = null
}