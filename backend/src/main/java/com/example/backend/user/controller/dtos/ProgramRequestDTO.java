package com.example.backend.user.controller.dtos

import com.example.backend.exercise_generator.model.Exercise

@JvmRecord
data class ProgramRequestDTO(val name: String, val exerciseList: List<Exercise>)