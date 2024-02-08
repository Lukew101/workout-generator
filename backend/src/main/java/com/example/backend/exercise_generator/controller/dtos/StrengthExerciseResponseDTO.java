package com.example.backend.exercise_generator.controller.dtos;

public record StrengthExerciseResponseDTO(
        String name,
        String type,
        String muscle,
        String equipment,
        String difficulty,
        String instructions,
        int sets,
        int reps
) {
}
