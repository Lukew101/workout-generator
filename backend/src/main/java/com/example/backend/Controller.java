package com.example.backend;

import com.example.backend.Exercise.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Controller {

    private final ExerciseService exerciseService;

    @Autowired
    public Controller(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }
}
