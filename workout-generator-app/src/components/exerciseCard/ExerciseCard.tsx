interface Exercise {
  name: string;
  difficulty: string;
  description: string;
}

const ExerciseCard = ({name, description, difficulty}: Exercise) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{difficulty}</p>
    </div>
  )
}

export default ExerciseCard