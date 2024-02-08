package com.example.backend.exercise_generator.controller;

import com.example.backend.exercise_generator.controller.dtos.*;
import com.example.backend.exercise_generator.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

//    @PostMapping("/exerciseList")
//    ResponseEntity<List<ExerciseAPIResponseDTO>> getExerciseList(@RequestBody ExerciseRequestDTO exerciseRequestDTO
//    ) throws IOException, InterruptedException {
//        List<ExerciseAPIResponseDTO> exerciseList = exerciseService.getExerciseList(exerciseRequestDTO);
//        return ResponseEntity.ok(exerciseList);
//    }

    @PostMapping("/strength")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<List<StrengthExerciseResponseDTO>> getStrengthExercises(@RequestBody ExerciseRequestDTO exerciseRequestDTO
    ) throws IOException, InterruptedException {
        List<StrengthExerciseResponseDTO> exerciseList = exerciseService.getStrengthExercises(exerciseRequestDTO);
        return ResponseEntity.ok(exerciseList);
    }

    @PostMapping("/plyometrics")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<List<PlyometricExerciseResponseDTO>> getPlyometricExercises(@RequestBody ExerciseRequestDTO exerciseRequestDTO
    ) throws IOException, InterruptedException {
        List<PlyometricExerciseResponseDTO> exerciseList = exerciseService.getPlyometricExercises(exerciseRequestDTO);
        return ResponseEntity.ok(exerciseList);
    }

    @PostMapping("/stretching")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<List<StretchingExerciseResponseDTO>> getStretchingExercises(@RequestBody ExerciseRequestDTO exerciseRequestDTO
    ) throws IOException, InterruptedException {
        List<StretchingExerciseResponseDTO> exerciseList = exerciseService.getStretchingExercises(exerciseRequestDTO);
        return ResponseEntity.ok(exerciseList);
    }

    @PostMapping("/cardio")
    @ResponseStatus(HttpStatus.OK)
    ResponseEntity<List<CardioExerciseResponseDTO>> getCardioExercises(@RequestBody ExerciseRequestDTO exerciseRequestDTO
    ) throws IOException, InterruptedException {
        List<CardioExerciseResponseDTO> exerciseList = exerciseService.getCardioExercises(exerciseRequestDTO);
        return ResponseEntity.ok(exerciseList);
    }
}
