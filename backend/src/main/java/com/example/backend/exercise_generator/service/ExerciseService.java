package com.example.backend.exercise_generator.service;

import com.example.backend.exercise_generator.controller.ExerciseAPIResponseDTO;
import com.example.backend.exercise_generator.controller.ExerciseResponseDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class ExerciseService {

    @Value("${API_KEY}")
    private String apiKey;

    public List<ExerciseAPIResponseDTO> getExerciseList(ExerciseResponseDTO responseDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> selectedExercises = new ArrayList<>();
        Random random = new Random();
        String apiUri = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=" + responseDTO.type() + "&muscle=" + responseDTO.muscle() + "&difficulty=" + responseDTO.difficulty();

        if (responseDTO.muscle() == null) {
            apiUri = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=" + responseDTO.type() + "&difficulty=" + responseDTO.difficulty();
        }
        if (responseDTO.difficulty() == null) {
            apiUri = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=" + responseDTO.type() + "&muscle=" + responseDTO.muscle();
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUri))
                .header("X-RapidAPI-Key", apiKey)
                .header("X-RapidAPI-Host", "exercises-by-api-ninjas.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();

        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();

        ObjectMapper objectMapper = new ObjectMapper();

        List<ExerciseAPIResponseDTO> responseExerciseList = objectMapper.readValue(
                responseBody,
                new TypeReference<List<ExerciseAPIResponseDTO>>() {
                });

        int numExercises = switch (responseDTO.duration()) {
            case 15 -> 2;
            case 30 -> 4;
            case 45 -> 5;
            case 60 -> 6;
            default -> 0;
        };

        if (responseExerciseList.size() < numExercises) {
            numExercises = responseExerciseList.size();
        }

        for (int i = 0; i < numExercises; i++) {
            int randomExerciseIndex = random.nextInt(responseExerciseList.size());
            ExerciseAPIResponseDTO selectedExercise = responseExerciseList.get(randomExerciseIndex);
            selectedExercises.add(selectedExercise);
            responseExerciseList.remove(randomExerciseIndex);
        }
        return selectedExercises;
    }
}
