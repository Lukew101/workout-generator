package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApplicationController {

    private final ExerciseService exerciseService;

    @Autowired
    public ApplicationController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @PostMapping("/exercises")
    ResponseEntity<List<ExerciseAPIResponseDTO>> getExerciseList(
            @RequestParam("duration") int duration,
            @RequestParam("type") String type,
            @RequestParam("muscle") String muscle,
            @RequestParam("difficulty") String difficulty
    ) throws IOException, InterruptedException {
        ExerciseResponseDTO exerciseResponseDTO = new ExerciseResponseDTO(duration, type, muscle, difficulty);
        List<ExerciseAPIResponseDTO> exerciseList = exerciseService.getExerciseList(exerciseResponseDTO);
        return ResponseEntity.ok(exerciseList);
    }
}
