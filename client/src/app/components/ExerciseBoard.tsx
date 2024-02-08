import { useEffect, useState } from "react";
import {
  CardioExercise,
  PlyometricExercise,
  StrengthExercise,
  StretchingExercise,
} from "../utils/types";
import ExerciseCard from "./ExerciseCard";
import { useCookies } from "react-cookie";

type ExerciseBoardProps = {
  strengthExercises: StrengthExercise[];
  cardioExercises: CardioExercise[];
  plyometricExercises: PlyometricExercise[];
  stretchingExercises: StretchingExercise[];
};

const ExerciseBoard = ({
  strengthExercises,
  cardioExercises,
  plyometricExercises,
  stretchingExercises,
}: ExerciseBoardProps) => {
  const [showExercises, setShowExercises] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);

  const handleSaveProgram = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/program`, {
        method: "POST",
        body: JSON.stringify({
          "name": "My Program",
          strengthExercises,
          cardioExercises,
          plyometricExercises,
          stretchingExercises
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cookies.JwtToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to save program");
      }
      console.log("Program saved successfully");
    } catch (error) {
      console.error("Error while saving the program:", error);
    }
  }

  const handleBuildProgramClick = () => {
    setShowExercises(false);
  };

  return (
    <div className="w-full my-3 flex flex-col items-center">
      {showExercises ? (
        <>
          <h2 className="text-center text-2xl font-semibold mb-3">Exercises</h2>
          <div className="flex justify-center flex-wrap gap-3">
            {strengthExercises.map((exercise, index) => (
              <ExerciseCard key={`strength_${index}`} exercise={exercise} />
            ))}
            {cardioExercises.map((exercise, index) => (
              <ExerciseCard key={`cardio_${index}`} exercise={exercise} />
            ))}
            {plyometricExercises.map((exercise, index) => (
              <ExerciseCard key={`plyometric_${index}`} exercise={exercise} />
            ))}
            {stretchingExercises.map((exercise, index) => (
              <ExerciseCard key={`stretching_${index}`} exercise={exercise} />
            ))}
          </div>
          <button
            onClick={handleBuildProgramClick}
            className="max-w-44 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-lg px-5 py-2.5 me-2 mt-6"
          >
            Build Program
          </button>
        </>
      ) : (
        <>
          <h2>Your Program</h2>
          <button
            onClick={handleSaveProgram}
            className="max-w-44 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-lg px-5 py-2.5 me-2 mt-6"
          >
            Save Program
          </button>
        </>
      )}
    </div>
  );
};

export default ExerciseBoard;
