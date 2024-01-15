import "bootstrap/dist/css/bootstrap.css";
import { FormEvent } from "react";
import { postForm } from "../../functions/httpFunctions";

interface AddEntityFormProps {
  setExercises: (exercises: Exercise[]) => void;
}

const StretchingInputForm = ({ setExercises }: AddEntityFormProps) => {
  function buildFormData(formElement: HTMLFormElement): FormData {
    const formData = new FormData();

    const duration = formElement.duration.value;
    formData.append("duration", duration);

    const trainingType = formElement.type.value;
    formData.append("type", trainingType);

    const muscleField = formElement.muscle;
    const muscle = muscleField ? muscleField.value : "";
    formData.append("muscle", muscle);

    const difficultyField = formElement.difficulty;
    const difficulty = difficultyField ? difficultyField.value : "";
    formData.append("difficulty", difficulty);

    return formData;
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = buildFormData(formElement);

    console.log(formData);

    postForm(formData, setExercises);
  };

  return (
    <div>
      <h2>Stretching</h2>
      <form onSubmit={handleFormSubmit} id="stretching">
        <label>Session Duration</label>
        <select
          className="form-select"
          name="duration"
          defaultValue=""
          id="trainingDuration"
        >
          <option value="15">&lt; 15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
        <label>Training type</label>
        <select
          className="form-select"
          name="type"
          defaultValue=""
          id="trainingType"
          disabled
        >
          <option value="stretching">Stretching</option>
        </select>
        <label>Muscle</label>
        <select
          className="form-select"
          name="muscle"
          defaultValue=""
          id="trainingMuscle"
        >
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="Chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="traps">Traps</option>
          <option value="triceps">Triceps</option>
        </select>
        <button type="submit" className="form__button">
          Generate
        </button>
      </form>
    </div>
  );
};

export default StretchingInputForm;
