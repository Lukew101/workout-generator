import "bootstrap/dist/css/bootstrap.css";
import { FormEvent } from "react";
import { postForm } from "../../functions/httpFunctions";

interface AddEntityFormProps {
  setExercises: (exercises: Exercise[]) => void;
}

const PlyometricsInputForm = ({ setExercises }: AddEntityFormProps) => {
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
      <h2>Plyometrics</h2>
      <form onSubmit={handleFormSubmit} id="plyometrics">
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
          <option value="plyometrics">Plyometrics</option>
        </select>
        <label>Difficulty</label>
        <select
          className="form-select"
          name="difficulty"
          defaultValue=""
          id="trainingType"
        >
          <option value="beginner">Beginner (0-3 months)</option>
          <option value="intermediate">Intermediate (4-12 months)</option>
          <option value="expert">Expert (12+ months)</option>
        </select>
        <button type="submit" className="form__button">
          Generate
        </button>
      </form>
    </div>
  );
};

export default PlyometricsInputForm;
