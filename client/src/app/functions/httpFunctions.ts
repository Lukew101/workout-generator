import { Exercise, FormData } from "../utils/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchExerciseList(
  exerciseType: string,
  formData: FormData,
  setExercises: (exercises: Exercise[]) => void
) {
  try {
    const response = await fetch(`${BACKEND_URL}/exercise/${exerciseType}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to add generate exercises");
    }
    const exerciseList = await response.json();
    setExercises(exerciseList);
  } catch (error) {
    console.error("Error while submitting the form:", error);
  }
}

export async function saveProgram(
  name: string,
  strengthExercises: any,
  cardioExercises: any,
  plyometricExercises: any,
  stretchingExercises: any,
  token: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/program`,
      {
        method: "POST",
        body: JSON.stringify({
          name,
          strengthExercises,
          cardioExercises,
          plyometricExercises,
          stretchingExercises,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to save program");
    }
    console.log("Program saved successfully");
  } catch (error) {
    console.error("Error while saving the program:", error);
  }
}
