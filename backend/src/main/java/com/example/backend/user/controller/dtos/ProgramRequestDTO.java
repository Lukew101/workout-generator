package com.example.backend.user.controller.dtos;

import com.example.backend.exercise_generator.model.*;

import java.util.List;

public record ProgramRequestDTO(
        String name,
        List<StrengthExercise> strengthExercises,
        List<CardioExercise> cardioExercises,
        List<PlyometricExercise> plyometricExercises,
        List<StretchingExercise> stretchingExercises) {
}
