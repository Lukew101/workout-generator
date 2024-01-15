type Exercise = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

type ResponseExerciseList = {
  exerciseList: Exercise[];
};

type ExerciseListWithType = {
  type: string;
  exerciseList: Exercise[];
};
