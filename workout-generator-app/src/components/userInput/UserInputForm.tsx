import 'bootstrap/dist/css/bootstrap.css';
import { FormEvent } from "react";

interface AddEntityFormProps {
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const UserInputForm = ({ setExercises }: AddEntityFormProps) => {
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    const formElement = event.target as HTMLFormElement;

    const duration = formElement.duration.value;
    formData.append("duration", duration);

    const trainingType = formElement.type.value;
    formData.append("type", trainingType);

    const muscleField = formElement.muscle;
    const muscle = muscleField ? muscleField.value : null;
    formData.append("muscle", muscle);

    const difficultyField = formElement.difficulty;
    const difficulty = difficultyField ? difficultyField.value : null;
    formData.append("difficulty", difficulty);

    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/api/exercises", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add generate exercises");
      }

      const data = await response.json();
      const exerciseList: Exercise[] = await data;
      console.log(exerciseList);
      setExercises(exerciseList);
    } catch (error) {
      console.error("Error while submitting the form:", error);
    }
  };

  return (
    <>
        <div>
            <h2>Strength - muscle 1</h2>
            <form onSubmit={handleFormSubmit} id="muscle1FormInput">
                <label>Session Duration</label>
                <select name="duration" defaultValue="" id="trainingDuration">
                    <option value="0">Null</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60+">60+ minutes</option>
                </select>
                <label>Training type</label>
                <select name="type" defaultValue="" id="trainingType">
                    <option value="strength">Strength</option>
                </select>
                <label>Muscle</label>
                <select name="muscle" defaultValue="" id="trainingMuscle">
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
                <label>Difficulty</label>
                <select name="difficulty" defaultValue="" id="trainingType">
                    <option value="beginner">Beginner (0-3 months)</option>
                    <option value="intermediate">Intermediate (4-12 months)</option>
                    <option value="expert">Expert (12+ months)</option>
                </select>
                <button type="submit" className="form__button">
                Generate
                </button>
            </form> 
        </div>
        <div>
            <h2>Strength - muscle 2</h2>
            <form onSubmit={handleFormSubmit} id="muscle2FormInput">
                <label>Session Duration</label>
                <select name="duration" defaultValue="" id="trainingDuration">
                    <option value="0">Null</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60+">60+ minutes</option>
                </select>
                <label>Training type</label>
                <select name="type" defaultValue="" id="trainingType">
                    <option value="strength">Strength</option>
                </select>
                <label>Muscle</label>
                <select name="muscle" defaultValue="" id="trainingMuscle">
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
                <label>Difficulty</label>
                <select name="difficulty" defaultValue="" id="trainingType">
                    <option value="beginner">Beginner (0-3 months)</option>
                    <option value="intermediate">Intermediate (4-12 months)</option>
                    <option value="expert">Expert (12+ months)</option>
                </select>
                <button type="submit" className="form__button">
                Generate
                </button>
            </form> 
        </div>
        <div>
            <h2>Cardio</h2>
            <form onSubmit={handleFormSubmit} id="muscle1FormInput">
                <label>Session Duration</label>
                <select name="duration" defaultValue="" id="trainingDuration">
                    <option value="0">Null</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60+">60+ minutes</option>
                </select>
                <label>Training type</label>
                <select name="type" defaultValue="" id="trainingType">
                    <option value="cardio">Cardio</option>
                </select>
                <label>Difficulty</label>
                <select name="difficulty" defaultValue="" id="trainingType">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                </select>
                <button type="submit" className="form__button">
                Generate
                </button>
            </form> 
        </div>
        <div>
            <h2>Plyometrics</h2>
            <form onSubmit={handleFormSubmit} id="plyometrics">
                <label>Session Duration</label>
                <select name="duration" defaultValue="" id="trainingDuration">
                    <option value="0">Null</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60+">60+ minutes</option>
                </select>
                <label>Training type</label>
                <select name="type" defaultValue="" id="trainingType">
                    <option value="plyometrics">Plyometrics</option>
                </select>
                <label>Difficulty</label>
                <select name="difficulty" defaultValue="" id="trainingType">
                    <option value="beginner">Beginner (0-3 months)</option>
                    <option value="intermediate">Intermediate (4-12 months)</option>
                    <option value="expert">Expert (12+ months)</option>
                </select>
                <button type="submit" className="form__button">
                Generate
                </button>
            </form> 
        </div>
        <div>
            <h2>Stretching</h2>
            <form onSubmit={handleFormSubmit} id="stretching">
                <label>Session Duration</label>
                <select name="duration" defaultValue="" id="trainingDuration">
                    <option value="0">Null</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60+">60+ minutes</option>
                </select>
                <label>Training type</label>
                <select name="type" defaultValue="" id="trainingType">
                <option value="stretching">Stretching</option>
                </select>
                <label>Muscle</label>
                <select name="muscle" defaultValue="" id="trainingMuscle">
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
    </> 
  );
};

export default UserInputForm;

// Make it so there are drop down menus for each training type (couple for strength)
// The user then puts in how long they will train on each. The time will
// determine how many cards they can select.
