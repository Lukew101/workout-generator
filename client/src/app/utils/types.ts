export interface Exercise  {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

export type User = {
  name: string;
  email: string;
  picture: string;
};

export interface StrengthExercise extends Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  reps: number;
  sets: number;
}

export interface PlyometricExercise extends Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  reps: number;
  sets: number;
}

export interface StretchingExercise extends Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  duration: number;
  sets: number;
}

export interface CardioExercise extends Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  duration: number;
  sets: number;
}

export type FormData = {
  duration: string;
  type: string;
  muscle: string;
  difficulty: string;
};

export type ExerciseTypeProps = {
  strengthExercises: StrengthExercise[];
  cardioExercises: CardioExercise[];
  plyometricExercises: PlyometricExercise[];
  stretchingExercises: StretchingExercise[];
};