package com.example.backend.user.model

import com.example.backend.exercise_generator.model.*
import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long = 0

    var name: String = ""

    @OneToMany(mappedBy = "program", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var strengthExercises: MutableList<StrengthExercise> = mutableListOf()

    @OneToMany(mappedBy = "program", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var cardioExercises: MutableList<CardioExercise> = mutableListOf()

    @OneToMany(mappedBy = "program", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var plyometricExercises: MutableList<PlyometricExercise> = mutableListOf()

    @OneToMany(mappedBy = "program", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var stretchingExercises: MutableList<StretchingExercise> = mutableListOf()

    @ManyToOne
    @JoinColumn(name = "user_id")
    var user: WorkoutCreativeUser? = null
}