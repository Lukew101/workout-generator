package com.example.backend.user.service

import com.example.backend.user.model.Program
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProgramRepository: JpaRepository<Program, Long>