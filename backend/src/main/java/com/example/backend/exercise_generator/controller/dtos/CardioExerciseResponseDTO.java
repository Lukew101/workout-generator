package com.example.backend.exercise_generator.controller.dtos;

public record CardioExerciseResponseDTO(
        String name,
        String type,
        String equipment,
        String difficulty,
        String instructions,
        int sets,
        int duration
) {
}
