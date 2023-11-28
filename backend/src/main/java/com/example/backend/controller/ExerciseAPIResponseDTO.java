package com.example.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ExerciseAPIResponseDTO(String name, String type, String muscle, String equipment, String difficulty, String instructions) {
}
