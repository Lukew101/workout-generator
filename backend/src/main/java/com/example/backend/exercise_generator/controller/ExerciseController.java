package com.example.backend.exercise_generator.controller;

import com.example.backend.exercise_generator.controller.dtos.ExerciseAPIResponseDTO;
import com.example.backend.exercise_generator.controller.dtos.ExerciseResponseDTO;
import com.example.backend.exercise_generator.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/exercise")
public class ExerciseController {

    private final ExerciseService exerciseService;

    @Autowired
    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/exerciseList")
    ResponseEntity<List<ExerciseAPIResponseDTO>> getExerciseList(@RequestBody ExerciseResponseDTO exerciseResponseDTO
    ) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> exerciseList = exerciseService.getExerciseList(exerciseResponseDTO);
        return ResponseEntity.ok(exerciseList);
    }
}
