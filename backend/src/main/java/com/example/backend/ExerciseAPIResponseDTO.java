package com.example.backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ExerciseAPIResponseDTO(String name, String type, String muscle, String equipment, String difficulty, String instructions) {
}
