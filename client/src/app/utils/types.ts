export type Exercise = {
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

export type StrengthExercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  reps: number;
  sets: number;
}

export type PlyometricExercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  reps: number;
  sets: number;
}

export type StretchingExercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  duration: number;
  sets: number;
}

export type CardioExercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  duration: number;
  sets: number;
}