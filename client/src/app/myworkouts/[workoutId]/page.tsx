"use client";
import { ExerciseProgram } from "@/app/components/ExerciseProgram";
import { fetchUserProgram } from "@/app/functions/httpFunctions";
import { ExerciseProgramResponse } from "@/app/utils/types";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type Props = {
  params: {
    workoutId: string;
  };
};

export default function UserExerciseProgram(props: Props) {
  const exerciseProgramId = props.params.workoutId;
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [program, setProgram] = useState<ExerciseProgramResponse>();

  const fetchExerciseProgram = async () => {
    const program = await fetchUserProgram(exerciseProgramId, cookies.JwtToken);
    setProgram(program);
  };

  useEffect(() => {
    if (cookies.JwtToken) {
      fetchExerciseProgram();
    }
  }, []);

  if (program) {
    return (
      <>
        <h1 className="mt-20">{program.name}</h1>
        <ExerciseProgram
          strengthExercises={program.strengthExercises}
          stretchingExercises={program.stretchingExercises}
          plyometricExercises={program.plyometricExercises}
          cardioExercises={program.cardioExercises}
        />
      </>
    );
  }
}
