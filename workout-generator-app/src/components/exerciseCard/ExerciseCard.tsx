import 'bootstrap/dist/css/bootstrap.css';
import './exerciseCard.css'

type ExerciseProps = {
  exercise: Exercise;
};

const ExerciseCard = ({ exercise }: ExerciseProps) => {


  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title card-title-multi-line'>{exercise.name}</h2>
        <p className='card-text instructions-style'>{exercise.instructions}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <h3>Equipment</h3>
          <p>{exercise.equipment}</p>
        </li>
        <li className='list-group-item'>
          <h3>Difficulty</h3>
          <p>{exercise.difficulty}</p>
        </li>
        <li className='list-group-item'>
          <h3>Muscle/s</h3>
          <p>{exercise.muscle}</p>
        </li>
      </ul>
    </div>
  )
}

export default ExerciseCard