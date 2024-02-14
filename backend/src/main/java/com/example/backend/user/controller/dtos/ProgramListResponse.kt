package com.example.backend.user.controller.dtos

import com.example.backend.user.model.Program

data class ProgramListResponse(var programs: MutableList<Program>)
