package com.example.backend;

import com.example.backend.Exercise.ExerciseAPIResponseListDTO;
import com.example.backend.Exercise.ExerciseResponseDTO;
import com.example.backend.Exercise.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Controller {

    private final ExerciseService exerciseService;

    @Autowired
    public Controller(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping
    ResponseEntity<ExerciseAPIResponseListDTO> getExerciseList(
            @RequestParam("duration") int duration,
            @RequestParam("type") String type,
            @RequestParam("muscle") String muscle,
            @RequestParam("difficulty") String difficulty
    ) throws IOException, InterruptedException {
        ExerciseResponseDTO exerciseResponseDTO = new ExerciseResponseDTO(duration, type, muscle, difficulty);
        ExerciseAPIResponseListDTO exerciseList = exerciseService.getExerciseList(exerciseResponseDTO);

        return ResponseEntity.ok(exerciseList);
    }
}
