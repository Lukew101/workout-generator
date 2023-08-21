package com.example.backend;

import jakarta.persistence.*;
import net.minidev.json.annotate.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Program {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "program", cascade = CascadeType.ALL)
    @JsonIgnore
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
