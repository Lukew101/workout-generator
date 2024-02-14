"use client";
import { useState } from "react";
import StrengthTrainingInputForm from "../components/userInput/StrengthTrainingInput";
import CardioInputForm from "../components/userInput/CardioTrainingInput";
import PlyometricsInputForm from "../components/userInput/PlyometricsInput";
import StretchingInputForm from "../components/userInput/StretchingInput";
import {
  CardioExercise,
  Exercise,
  PlyometricExercise,
  StrengthExercise,
  StretchingExercise,
} from "../utils/types";
import ExerciseBoard from "../components/ExerciseBoard";
import { useCookies } from "react-cookie";
import { ExerciseProgram } from "../components/ExerciseProgram";
import { saveProgram } from "../functions/httpFunctions";

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
  const [showProgram, setShowProghram] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);

  const handleSaveProgram = async () => {
    await saveProgram(
      "My Program",
      strengthExercises,
      cardioExercises,
      plyometricExercises,
      stretchingExercises,
      cookies.JwtToken
    );
  };

  const handleExerciseTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedExerciseType(event.target.value);
  };

  const handleGenerateStretchingExercises = (
    generatedExercises: Exercise[]
  ) => {
    const stretchingExercises = generatedExercises as StretchingExercise[];
    setstretchingExercises((prevExercises) => [
      ...prevExercises,
      ...stretchingExercises,
    ]);
  };

  const handleSetProgram = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowProghram(false);
  };

  const handleGenerateStrengthExercises = async (
    generatedExercises: Exercise[]
  ) => {
    const strengthExercises = generatedExercises as StrengthExercise[];
    setStrengthExercises((prevExercises) => [
      ...prevExercises,
      ...strengthExercises,
    ]);
  };

  const handleGeneratePlyometricExercises = async (
    generatedExercises: Exercise[]
  ) => {
    const plyometricExercises = generatedExercises as PlyometricExercise[];
    setPlyometricExercises((prevExercises) => [
      ...prevExercises,
      ...plyometricExercises,
    ]);
  };

  const handleGenerateCardioExercises = async (
    generatedExercises: Exercise[]
  ) => {
    const cardioExercises = generatedExercises as CardioExercise[];
    setCardioExercises((prevExercises) => [
      ...prevExercises,
      ...cardioExercises,
    ]);
  };

  const renderExerciseForm = () => {
    if (selectedExerciseType) {
      const selectedExerciseInputForm = () => {
        switch (selectedExerciseType) {
          case "strength":
            return (
              <StrengthTrainingInputForm
                setStrengthExercises={handleGenerateStrengthExercises}
              />
            );
          case "cardio":
            return (
              <CardioInputForm
                setCardioExercises={handleGenerateCardioExercises}
              />
            );
          case "plyometrics":
            return (
              <PlyometricsInputForm
                setPlyometricExercises={handleGeneratePlyometricExercises}
              />
            );
          case "stretching":
            return (
              <StretchingInputForm
                setStretchingExercises={handleGenerateStretchingExercises}
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
      {showProgram ? (
        <>
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
              handleSetProgram={handleSetProgram}
            />
          )}
        </>
      ) : (
        <div className="w-full max-w-2xl">
          <h2 className="text-center mb-5 text-3xl">Your Program</h2>
          <ExerciseProgram
            strengthExercises={strengthExercises}
            stretchingExercises={stretchingExercises}
            plyometricExercises={plyometricExercises}
            cardioExercises={cardioExercises}
          />
          <div className="flex flex-col items-center">
            <button
              onClick={handleSaveProgram}
              className="max-w-44 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-lg px-5 py-2.5 me-2 mt-6"
            >
              Save Program
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
