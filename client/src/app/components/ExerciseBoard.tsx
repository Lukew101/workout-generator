import {
  CardioExercise,
  PlyometricExercise,
  StrengthExercise,
  StretchingExercise,
} from "../utils/types";
import ExerciseCard from "./ExerciseCard";

export type ExerciseBoardProps = {
  strengthExercises: StrengthExercise[];
  cardioExercises: CardioExercise[];
  plyometricExercises: PlyometricExercise[];
  stretchingExercises: StretchingExercise[];
  handleSetProgram: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ExerciseBoard = ({
  strengthExercises,
  cardioExercises,
  plyometricExercises,
  stretchingExercises,
  handleSetProgram,
}: ExerciseBoardProps) => {
  return (
    <div className="w-full my-3 flex flex-col items-center">
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
          onClick={handleSetProgram}
          className="max-w-44 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-lg px-5 py-2.5 me-2 mt-6"
        >
          Build Program
        </button>
      </>
    </div>
  );
};

export default ExerciseBoard;
