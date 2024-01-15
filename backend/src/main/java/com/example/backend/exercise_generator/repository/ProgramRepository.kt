package com.example.backend.exercise_generator.repository

import com.example.backend.exercise_generator.model.Program
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProgramRepository : JpaRepository<Program, Long> {
}