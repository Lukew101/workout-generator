package com.example.backend.model

class Program {
    var id: Long? = null
    var name: String? = null
    var exercises: List<Exercise> = ArrayList()

    constructor(name: String?) {
        this.name = name
    }

    constructor()
}