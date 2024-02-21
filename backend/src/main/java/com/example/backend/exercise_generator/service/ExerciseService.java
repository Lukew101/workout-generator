package com.example.backend.exercise_generator.service;

import com.example.backend.exercise_generator.controller.dtos.*;
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

    private final Random random = new Random();

    public List<StrengthExerciseResponseDTO> getStrengthExercises(ExerciseRequestDTO exerciseRequestDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> responseExerciseList = getExerciseList(exerciseRequestDTO);
        int sets = responseExerciseList.size() * 3;

        List<StrengthExerciseResponseDTO> strengthExercises = new ArrayList<>();

        int remainingSets = sets;
        for (ExerciseAPIResponseDTO exercise : responseExerciseList) {
            int exerciseSets = Math.min(random.nextInt(3) + 2, remainingSets);
            int exerciseReps = random.nextInt(8) + 8;
            remainingSets -= exerciseSets;
            strengthExercises.add(new StrengthExerciseResponseDTO(exercise.name(), exercise.type(), exercise.muscle(),
                    exercise.equipment(), exercise.difficulty(), exercise.instructions(), exerciseSets, exerciseReps));
        }

        return strengthExercises;
    }

    public List<PlyometricExerciseResponseDTO> getPlyometricExercises(ExerciseRequestDTO exerciseRequestDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> responseExerciseList = getExerciseList(exerciseRequestDTO);
        int sets = responseExerciseList.size() * 3;

        List<PlyometricExerciseResponseDTO> plyometricExercises = new ArrayList<>();

        int remainingSets = sets;
        for (ExerciseAPIResponseDTO exercise : responseExerciseList) {
            int exerciseSets = Math.min(random.nextInt(3) + 2, remainingSets);
            int exerciseReps = random.nextInt(8) + 8;
            remainingSets -= exerciseSets;
            plyometricExercises.add(new PlyometricExerciseResponseDTO(exercise.name(), exercise.type(),
                    exercise.equipment(), exercise.difficulty(), exercise.instructions(), exerciseSets, exerciseReps));
        }

        return plyometricExercises;
    }

    public List<StretchingExerciseResponseDTO> getStretchingExercises(ExerciseRequestDTO exerciseRequestDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> responseExerciseList = getExerciseList(exerciseRequestDTO);

        return responseExerciseList.stream()
                .map(exercise -> new StretchingExerciseResponseDTO(exercise.name(), exercise.type(), exercise.muscle(), exercise.equipment(),
                        exercise.difficulty(), exercise.instructions(), 3, 30))
                .toList();
    }

    public List<CardioExerciseResponseDTO> getCardioExercises(ExerciseRequestDTO exerciseRequestDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> responseExerciseList = getExerciseList(exerciseRequestDTO);

        return responseExerciseList.stream()
                .map(exercise -> new CardioExerciseResponseDTO(exercise.name(), exercise.type(), exercise.equipment(),
                        exercise.difficulty(), exercise.instructions(), 1, 15))
                .toList();
    }

    private List<ExerciseAPIResponseDTO> getExerciseList(ExerciseRequestDTO responseDTO) throws IOException, InterruptedException {
        List<ExerciseAPIResponseDTO> selectedExercises = new ArrayList<>();

        List<ExerciseAPIResponseDTO> responseExerciseList = getExerciseAPIResponseDTOS(responseDTO);

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

    private List<ExerciseAPIResponseDTO> getExerciseAPIResponseDTOS(ExerciseRequestDTO responseDTO) throws IOException, InterruptedException {
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

        return objectMapper.readValue(
                responseBody,
                new TypeReference<List<ExerciseAPIResponseDTO>>() {
                });
    }
}
