"use client";
import { useState } from "react";
import StrengthTrainingInputForm from "../components/userInput/StrengthTrainingInput";
import CardioInputForm from "../components/userInput/CardioTrainingInput";
import PlyometricsInputForm from "../components/userInput/PlyometricsInput";
import StretchingInputForm from "../components/userInput/StretchingInput";
import {
  CardioExercise,
  PlyometricExercise,
  StrengthExercise,
  StretchingExercise,
} from "../utils/types";
import ExerciseBoard from "../components/ExerciseBoard";

export default function CreateWorkout() {
  const [selectedExerciseType, setSelectedExerciseType] = useState("");
  const [strengthExercises, setStrengthExercises] = useState<
    StrengthExercise[]
  >([]);
  const [stretchingExercises, setstretchingExercises] = useState<
    StretchingExercise[]
  >([]);
  const [plyometricExercises, setPlyometricExercises] = useState<
    PlyometricExercise[]
  >([]);
  const [cardioExercises, setCardioExercises] = useState<CardioExercise[]>([]);

  const handleExerciseTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedExerciseType(event.target.value);
  };

  const handleGenerateStretchingExercises = (
    generatedExercises: StretchingExercise[]
  ) => {
    setstretchingExercises((prevExercises) => [
      ...prevExercises,
      ...generatedExercises,
    ]);
  };

  const handleGenerateStrengthExercises = (
    generatedExercises: StrengthExercise[]
  ) => {
    setStrengthExercises((prevExercises) => [
      ...prevExercises,
      ...generatedExercises,
    ]);
  };

  const handleGeneratePlyometricExercises = (
    generatedExercises: PlyometricExercise[]
  ) => {
    setPlyometricExercises((prevExercises) => [
      ...prevExercises,
      ...generatedExercises,
    ]);
  };

  const handleGenerateCardioExercises = (
    generatedExercises: CardioExercise[]
  ) => {
    setCardioExercises((prevExercises) => [
      ...prevExercises,
      ...generatedExercises,
    ]);
  };

  const renderExerciseForm = () => {
    if (selectedExerciseType) {
      const selectedExerciseInputForm = () => {
        switch (selectedExerciseType) {
          case "strength":
            return (
              <StrengthTrainingInputForm
                setExercises={handleGenerateStrengthExercises}
              />
            );
          case "cardio":
            return (
              <CardioInputForm setExercises={handleGenerateCardioExercises} />
            );
          case "plyometrics":
            return (
              <PlyometricsInputForm
                setExercises={handleGeneratePlyometricExercises}
              />
            );
          case "stretching":
            return (
              <StretchingInputForm
                setExercises={handleGenerateStretchingExercises}
              />
            );
          default:
            return null;
        }
      };
      return selectedExerciseInputForm();
    }
    return null;
  };

  const hasExercises =
    strengthExercises.length > 0 ||
    cardioExercises.length > 0 ||
    plyometricExercises.length > 0 ||
    stretchingExercises.length > 0;

  return (
    <main className="mt-24 flex flex-col items-center">
      <div className="mb-3 flex flex-col items-center">
        <h2 className="text-5xl mb-2 text-center ">Create your workout</h2>
        <ol className="text-base ps-8 my-2 space-y-1 list-decimal list-inside">
          <li>Select an exercise type + fill out the form</li>
          <li>Generate exercises</li>
          <li>Generate your program</li>
          <li>Save the program</li>
        </ol>
      </div>
      <div className="w-64">
        <select
          value={selectedExerciseType}
          onChange={handleExerciseTypeChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select an exercise type</option>
          <option value="strength">Strength Training</option>
          <option value="cardio">Cardiovascular</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="stretching">Stretching</option>
        </select>
        {renderExerciseForm()}
      </div>
      {hasExercises && (
        <ExerciseBoard
          strengthExercises={strengthExercises}
          cardioExercises={cardioExercises}
          plyometricExercises={plyometricExercises}
          stretchingExercises={stretchingExercises}
        />
      )}
    </main>
  );
}
