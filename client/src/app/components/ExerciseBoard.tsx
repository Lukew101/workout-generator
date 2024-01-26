import ExerciseCard from "./ExerciseCard";

type AddEntityFormProps = {
  exercises: Exercise[];
};

const ExcerciseBoard = ({ exercises }: AddEntityFormProps) => {
  return (
    <div className="w-full my-3">
      <h2 className="text-center text-2xl font-semibold mb-3">Exercises</h2>
      <div>
        <div className="flex justify-center flex-wrap gap-3">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExcerciseBoard;
