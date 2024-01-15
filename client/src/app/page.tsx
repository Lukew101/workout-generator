"use client"
import StrengthTrainingInputForm from "./components/userInput/StrengthTrainingInput";
import ExcerciseBoard from "./components/ExerciseBoard";
import CardioInputForm from "./components/userInput/CardioTrainingInput";
import PlyometricsInputForm from "./components/userInput/PlyometricsInput";
import StretchingInputForm from "./components/userInput/StretchingInput";
import { useState } from "react";

export default function Home() {
  const [selectedExerciseType, setSelectedExerciseType] = useState("");
  const [exercises, setExercises] = useState<{
    [key: string]: Exercise[];
  }>({});

  const handleExerciseTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedExerciseType(event.target.value);
  };

  const handleGenerateExerciseSet = (exercises: Exercise[]) => {
    setExercises((prevExercises) => ({
      ...prevExercises,
      [selectedExerciseType]: [
        ...(prevExercises[selectedExerciseType] || []),
        ...exercises,
      ],
    }));
  };

  const renderExerciseFormAndBoard = () => {
    if (selectedExerciseType) {
      switch (selectedExerciseType) {
        case "strength":
          return (
            <>
              <StrengthTrainingInputForm
                setExercises={handleGenerateExerciseSet}
              />
              <ExcerciseBoard
                exercises={exercises[selectedExerciseType] || []}
                formTitle="Strength Exercises"
              />
            </>
          );
        case "cardio":
          return (
            <>
              <CardioInputForm setExercises={handleGenerateExerciseSet} />
              <ExcerciseBoard
                exercises={exercises[selectedExerciseType] || []}
                formTitle="Cardiovascular Exercises"
              />
            </>
          );
        case "plyometrics":
          return (
            <>
              <PlyometricsInputForm setExercises={handleGenerateExerciseSet} />
              <ExcerciseBoard
                exercises={exercises[selectedExerciseType] || []}
                formTitle="Plyometric Exercises"
              />
            </>
          );
        case "stretching":
          return (
            <>
              <StretchingInputForm setExercises={handleGenerateExerciseSet} />
              <ExcerciseBoard
                exercises={exercises[selectedExerciseType] || []}
                formTitle="Stretching Exercises"
              />
            </>
          );
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <main>
      <h1>The Workout Generator</h1>
      <h2>How to use?</h2>
      <p>
        Fill out the inputs below, click generate to get a list of exercise
        cards for each exercise type, flip the cards, save the program and save
        the program if you like it.
      </p>
      <label>Select Exercise Type:</label>
      <select value={selectedExerciseType} onChange={handleExerciseTypeChange}>
        <option value="">Select an exercise type</option>
        <option value="strength">Strength Training</option>
        <option value="cardio">Cardiovascular</option>
        <option value="plyometrics">Plyometrics</option>
        <option value="stretching">Stretching</option>
      </select>
      {renderExerciseFormAndBoard()}
    </main>
  );
}
