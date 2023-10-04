package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.net.http.HttpClient;
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