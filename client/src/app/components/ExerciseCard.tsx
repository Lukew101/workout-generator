import { useState } from "react";
import { Exercise } from "../utils/types";

type ExerciseProps = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlipped}
    >
      <div className="card-inner">
        <div className="card-front">
          <p className="click-to-flip">Click to view exercise</p>
        </div>
        <div className="card-back">
          <h2 className="card-title card-title-multi-line">{exercise.name}</h2>
          <p className="instructions-style">{exercise.instructions}</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="card-subtitle">Equipment</h3>
              <p>{exercise.equipment}</p>
            </div>
            <div>
              <h3 className="card-subtitle">Difficulty</h3>
              <p>{exercise.difficulty}</p>
            </div>
            <div>
              <h3 className="card-subtitle">Muscle/s</h3>
              <p>{exercise.muscle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
