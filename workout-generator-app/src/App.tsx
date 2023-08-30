import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import './App.css'
import ExcerciseBoard from './components/exerciseBoard/ExcerciseBoard'
import StrengthTrainingInputForm from './components/userInput/StrengthTrainingInputForm';
import CardioInputForm from './components/userInput/CardioTrainingInputForm';
import PlyometricsInputForm from './components/userInput/PlyometricsInputForm';
import StretchingInputForm from './components/userInput/StretchingInputForm';


function App() {
  const [stengthExercisesOne, setStrengthExercisesOne] = useState<Exercise[]>([]);
  const [stengthExercisesTwo, setStrengthExercisesTwo] = useState<Exercise[]>([]);
  const [cardioExercises, setCardioExercises] = useState<Exercise[]>([]);
  const [plyometricExercises, setPlyometricExercises] = useState<Exercise[]>([]);
  const [stretchingExercises, setStretchingExercises] = useState<Exercise[]>([]);

  return (
    <main>
      <h1>The Workout Generator</h1>
      <h2>How to use?</h2>
      <p>Fill out the inputs below, click generate to get a list of exercise cards, pick the number of specified cards, perform the exercises and save the program if you like it.</p>
      <StrengthTrainingInputForm setExercises={setStrengthExercisesOne} />
      <ExcerciseBoard exercises={stengthExercisesOne} />
      <StrengthTrainingInputForm setExercises={setStrengthExercisesTwo} />
      <ExcerciseBoard exercises={stengthExercisesTwo} />
      <CardioInputForm setExercises={setCardioExercises} />
      <ExcerciseBoard exercises={cardioExercises} />
      <PlyometricsInputForm setExercises={setPlyometricExercises} />
      <ExcerciseBoard exercises={plyometricExercises} />
      <StretchingInputForm setExercises={setStretchingExercises} />
      <ExcerciseBoard exercises={stretchingExercises} />
    </main>
  )
}

export default App
