package com.example.backend.exerciseGenerator.controller;

import java.util.List;

public record ExerciseListDTO (List<ExerciseAPIResponseDTO> exerciseList) {
}
