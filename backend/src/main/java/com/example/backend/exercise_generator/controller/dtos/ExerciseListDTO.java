package com.example.backend.exercise_generator.controller.dtos;

import com.example.backend.exercise_generator.controller.dtos.ExerciseAPIResponseDTO;

import java.util.List;

public record ExerciseListDTO (List<ExerciseAPIResponseDTO> exerciseList) {
}
