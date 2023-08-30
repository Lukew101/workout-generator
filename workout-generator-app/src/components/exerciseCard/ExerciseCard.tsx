import "bootstrap/dist/css/bootstrap.css";
import "./exerciseCard.css";
import { useState } from "react";

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
          <div>
            <h2 className="card-title card-title-multi-line">
              {exercise.name}
            </h2>
            <p className="instructions-style">{exercise.instructions}</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="card-subtitle">Equipment</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
