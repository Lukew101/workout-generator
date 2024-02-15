import { Exercise, ExerciseProgramResponse, ExerciseProgramsResponse, FormData } from "../utils/types";

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

export async function fetchUserProgramList(token: string) {
    try {
        const response = await fetch(`${BACKEND_URL}/user/program`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        if (!response.ok) {
        throw new Error("Failed to fetch programs");
        }
        const programs: ExerciseProgramsResponse = await response.json();
        return programs.programs;
    } catch (error) {
        console.error("Error while fetching the programs:", error);
    }  
}

export async function fetchUserProgram(programId: string, token: string) {
    try {
        const response = await fetch(`${BACKEND_URL}/user/program/${programId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        if (!response.ok) {
        throw new Error("Failed to fetch programs");
        }
        const program: ExerciseProgramResponse = await response.json();
        return program;
    } catch (error) {
        console.error("Error while fetching the programs:", error);
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
