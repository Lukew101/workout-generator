package com.example.backend.exercise_generator.model

import com.example.backend.user.model.Program
import jakarta.persistence.*

@Entity
class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0
    var name: String = ""
    var type: String = ""
    var muscle: String? = null
    var equipment: String? = null
    var difficulty: String? = null
    var instructions: String? = null

    @ManyToOne
    @JoinColumn(name = "program_id")
    var program: Program? = null
}