package com.example.backend.Exercise;

import com.example.backend.Exercise.ExerciseAPIResponseListDTO;
import com.example.backend.Exercise.ExerciseResponseDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class ExerciseService {

    @Value("${apiKey}")
    private String apiKey;

    public ExerciseAPIResponseListDTO getExerciseList(ExerciseResponseDTO exerciseReponseDTO) throws IOException, InterruptedException {

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength&muscle=biceps&difficulty=beginner"))
                .header("X-RapidAPI-Key", apiKey)
                .header("X-RapidAPI-Host", "exercises-by-api-ninjas.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();

        try {
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body();

            ObjectMapper objectMapper = new ObjectMapper();

            System.out.println(objectMapper.readValue(responseBody, ExerciseAPIResponseListDTO.class));

            return objectMapper.readValue(responseBody, ExerciseAPIResponseListDTO.class);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            throw e;
        }
    }
}
