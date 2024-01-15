package com.example.backend.exercise_generator.controller;

import java.util.List;

public record ExerciseListDTO (List<ExerciseAPIResponseDTO> exerciseList) {
}
