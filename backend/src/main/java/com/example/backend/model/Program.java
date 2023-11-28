package com.example.backend.model;

import com.example.backend.model.Exercise;

import java.util.ArrayList;
import java.util.List;

public class Program {
    private Long id;

    private String name;

    private List<Exercise> exercises = new ArrayList<>();

    public Program(String name) {
        this.name = name;
    }

    public Program() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}
