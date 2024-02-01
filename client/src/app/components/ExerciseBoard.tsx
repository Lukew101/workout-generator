import ExerciseCard from "./ExerciseCard";

type AddEntityFormProps = {
  exercises: Exercise[];
};

const ExcerciseBoard = ({ exercises }: AddEntityFormProps) => {
  return (
    <div className="w-full my-3 flex flex-col items-center">
      <h2 className="text-center text-2xl font-semibold mb-3">Exercises</h2>
      <div className="flex justify-center flex-wrap gap-3">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <button className="max-w-44 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-lg px-5 py-2.5 me-2 mt-6">
        Build Program
      </button>
    </div>
  );
};

export default ExcerciseBoard;
