import { useState } from "react";

type ExerciseProps = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseProps) => {
  return (
    <>
      <h2>{exercise.name}</h2>
      <p>{exercise.instructions}</p>
      <div>
        <h3>Equipment</h3>
        <p>{exercise.equipment}</p>
      </div>
      <div className="col-md-6">
        <h3 className="card-subtitle">Difficulty</h3>
        <p>{exercise.difficulty}</p>
      </div>
      <div className="col-md-6">
        <h3 className="card-subtitle">Muscle/s</h3>
        <p>{exercise.muscle}</p>
      </div>
    </>
  );
};

export default ExerciseCard;
