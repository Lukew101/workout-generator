type ExerciseProps = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseProps) => {
  return (
    <div>
        <h2>{exercise.name}</h2>
        <p>{exercise.instructions}</p>
        <p>{exercise.equipment}</p>
        <p>{exercise.difficulty}</p>
        <p>{exercise.muscle}</p>
    </div>
  )
}

export default ExerciseCard