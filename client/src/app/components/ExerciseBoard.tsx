import ExerciseCard from "./ExerciseCard";

type AddEntityFormProps = {
  exercises: Exercise[];
  formTitle: string;
};

const ExcerciseBoard = ({ exercises, formTitle }: AddEntityFormProps) => {
  return (
    <div>
      <h2>{formTitle}</h2>
      <div className="container">
        <div className="row card-gaps">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExcerciseBoard;
