package com.example.backend.Exercise;

import com.example.backend.Exercise.ExerciseAPIResponseDTO;
import com.example.backend.Exercise.ExerciseResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ExerciseService {

    public ExerciseAPIResponseDTO getExerciseList(ExerciseResponseDTO exerciseReponseDTO) {
        WebClient webClient = WebClient.create("https://exercises-by-api-ninjas.p.rapidapi.com");

        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/v1/exercises")
                        .queryParam("type", exerciseReponseDTO.type())
                        .queryParam("muscle", exerciseReponseDTO.muscle())
                        .queryParam("difficulty", exerciseReponseDTO.difficulty())
                        .build())
                .retrieve()
                .bodyToMono(ExerciseAPIResponseDTO.class)
                .block();
    }
}
