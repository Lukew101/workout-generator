package com.example.backend;

import com.example.backend.exerciseGenerator.controller.ExerciseAPIResponseDTO;
import com.example.backend.exerciseGenerator.controller.ExerciseResponseDTO;
import com.example.backend.exerciseGenerator.service.ExerciseService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;


@SpringBootTest
public class ExerciseServiceTest {

    @Autowired
    private ExerciseService exerciseService;

    @Test
    public void testGetExerciseList() {
        try {
            ExerciseResponseDTO exerciseResponseDTO = new ExerciseResponseDTO(30, "strength", "biceps", "beginner");
            List<ExerciseAPIResponseDTO> exerciseList = exerciseService.getExerciseList(exerciseResponseDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}