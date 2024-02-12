package com.example.backend.user.service

import com.example.backend.user.model.WorkoutCreativeUser
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<WorkoutCreativeUser, Long> {
    fun findByEmail(email: String): WorkoutCreativeUser?
}
