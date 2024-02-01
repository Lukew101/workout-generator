package com.example.backend.user.controller.dtos;

import com.example.backend.exercise_generator.model.Exercise;

import java.util.List;

public record ProgramRequestDTO(String name, List<Exercise> exerciseList) {
}
