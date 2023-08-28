package com.example.backend;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Random;

@Service
public class ExerciseService {

    @Value("${API_KEY}")
    private String apiKey;

    public List<ExerciseAPIResponseDTO> getExerciseList(ExerciseResponseDTO responseDTO) throws IOException, InterruptedException {

        Random r = new Random();
        int min = 0;
        int max = 20;
        int randomOffset = r.nextInt(max - min + 1) + min;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=" + responseDTO.type()+ "&muscle=" + responseDTO.muscle() + "&difficulty=" + responseDTO.difficulty() + "&offset=" + randomOffset))
                .header("X-RapidAPI-Key", apiKey)
                .header("X-RapidAPI-Host", "exercises-by-api-ninjas.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();

            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            String responseBody = response.body();

            ObjectMapper objectMapper = new ObjectMapper();

            return objectMapper.readValue(
                    responseBody,
                    new TypeReference<List<ExerciseAPIResponseDTO>>() {});
    }
}
