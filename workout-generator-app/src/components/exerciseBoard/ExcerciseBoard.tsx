import 'bootstrap/dist/css/bootstrap.css';
import './exerciseBoard.css'
import ExerciseCard from "../exerciseCard/ExerciseCard";

type AddEntityFormProps = {
  exercises: Exercise[];
};

const ExcerciseBoard = ({ exercises }: AddEntityFormProps) => {
  return (
    <div>
      <h2>Exercises</h2>
      <div className='container'>
        <div className='row card-gaps'>
          {exercises.map((exercise) => (
            <div className='col-md-4'>
              <ExerciseCard
                key={exercise.name}
                exercise={exercise} />
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}

export default ExcerciseBoard