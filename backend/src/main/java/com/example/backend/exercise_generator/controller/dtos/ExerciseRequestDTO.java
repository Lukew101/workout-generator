package com.example.backend.exercise_generator.controller.dtos;

public record ExerciseRequestDTO(int duration, String type, String muscle, String difficulty) {
}
