package com.example.backend.exerciseGenerator.Repository

import com.example.backend.exerciseGenerator.model.Program
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProgramRepository : JpaRepository<Program, Long> {
}