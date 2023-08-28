import ExerciseCard from "../exerciseCard/ExerciseCard";

type AddEntityFormProps = {
  exercises: Exercise[];
};

const ExcerciseBoard = ({ exercises }: AddEntityFormProps) => {
  return (
    <div>
      <h2>Exercises</h2>
      {exercises.map((exercise) => (
        <ExerciseCard
        key={exercise.name}
        exercise={exercise} />
      ))}
    </div>
  )
}

export default ExcerciseBoard