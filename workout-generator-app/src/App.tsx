import { useEffect, useState } from 'react'
import './App.css'
import UserInputForm from './components/userInput/UserInputForm'
import ExcerciseBoard from './components/exerciseBoard/ExcerciseBoard'


function App() {
  const [exercises, setExercises] = useState<Exercise[]>([])

  return (
    <main>
      <h1>The Workout Generator</h1>
      <h2>How to use?</h2>
      <p>Fill out the inputs below, click generate to get a list of exercise cards, pick the number of specified cards, perform the exercises and save the program if you like it.
      </p>
      <UserInputForm setExercises={setExercises} />
      <ExcerciseBoard exercises={exercises}/>
    </main>
  )
}

export default App
