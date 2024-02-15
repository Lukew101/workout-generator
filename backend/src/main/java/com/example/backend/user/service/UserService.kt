package com.example.backend.user.service

import com.example.backend.exceptionHandler.exception.UserNotFoundException
import com.example.backend.user.controller.dtos.ProgramListResponse
import com.example.backend.user.controller.dtos.ProgramRequestDTO
import com.example.backend.user.controller.dtos.UserResponseData
import com.example.backend.user.model.Program
import org.springframework.security.access.AccessDeniedException
import org.springframework.security.oauth2.core.oidc.user.OidcUser
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(
    private val userRepository: UserRepository,
    private val programRepository: ProgramRepository
) {
    fun getUserByEmail(user: OidcUser?): UserResponseData {
        val email = user?.email ?: throw AccessDeniedException("User not authenticated")

        val workoutCreativeUser = userRepository.findByEmail(email)
            ?: throw UserNotFoundException("User not found")

        return UserResponseData(
            name = workoutCreativeUser.name,
            email = workoutCreativeUser.email,
            profilePicture = workoutCreativeUser.profilePicture
        )
    }

    fun getAllUsersPrograms(jwt: Jwt): ProgramListResponse {
        val userEmail = jwt.getClaimAsString("email")
        val user = userRepository.findByEmail(userEmail)
            ?: throw UserNotFoundException("User not found")

        return ProgramListResponse(user.programs)
    }

    fun getProgramById(programId: String): Program {
        val programOptional: Optional<Program> = programRepository.findById(programId.toLong())
        return programOptional.orElseThrow { NoSuchElementException("Program not found for id: $programId") }
    }

    fun createProgram(programData: ProgramRequestDTO, jwt: Jwt): Program {
        val program = Program()
        val userEmail = jwt.getClaimAsString("email")

        program.name = programData.name

        programData.strengthExercises.forEach { exercise ->
            exercise.program = program
            program.strengthExercises.add(exercise)
        }

        programData.cardioExercises.forEach { exercise ->
            exercise.program = program
            program.cardioExercises.add(exercise)
        }

        programData.stretchingExercises.forEach { exercise ->
            exercise.program = program
            program.stretchingExercises.add(exercise)
        }

        programData.plyometricExercises.forEach { exercise ->
            exercise.program = program
            program.plyometricExercises.add(exercise)
        }

        program.user = userRepository.findByEmail(userEmail)
            ?: throw UserNotFoundException("User not found")

        programRepository.save(program)

        return program
    }
}