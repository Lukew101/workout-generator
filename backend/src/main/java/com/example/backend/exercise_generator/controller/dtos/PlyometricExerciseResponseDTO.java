package com.example.backend.exercise_generator.controller.dtos;

public record PlyometricExerciseResponseDTO(
        String name,
        String type,
        String equipment,
        String difficulty,
        String instructions,
        int sets,
        int reps
) {
}
