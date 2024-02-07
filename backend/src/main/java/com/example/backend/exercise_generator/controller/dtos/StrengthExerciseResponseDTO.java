package com.example.backend.exercise_generator.controller.dtos;

public record ExerciseResponseDTO(String name,
                                  String type,
                                  String muscle,
                                  String equipment,
                                  String difficulty,
                                  String instructions) {
}
