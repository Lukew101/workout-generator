package com.example.backend.Program;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProgramRepository {
    private final JPAProgramRepository programRepository;

    @Autowired
    public ProgramRepository(JPAProgramRepository programRepository) {
        this.programRepository = programRepository;
    }
}
