import { FormEvent } from "react";

interface AddEntityFormProps {
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const UserInputForm = ({ setExercises }: AddEntityFormProps) => {
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    const duration = (event.target as HTMLFormElement).duration.value;
    const trainingType = (event.target as HTMLFormElement).type.value;
    const muscle = (event.target as HTMLFormElement).muscle.value;
    const difficulty = (event.target as HTMLFormElement).difficulty.value;

    formData.append("duration", duration);
    formData.append("type", trainingType);
    formData.append("muscle", muscle);
    formData.append("difficulty", difficulty);

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
    <div>
      <h2>Generate Exercises</h2>
      <form onSubmit={handleFormSubmit} id="programFormInput">
        <label>Session Duration</label>
        <select name="duration" defaultValue="" id="trainingDuration">
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60+">60+ minutes</option>
        </select>
        <label>Training type</label>
        <select name="type" defaultValue="" id="trainingType">
          <option value="strength">Strength</option>
          {/*
          <option value="cardio">Cardio</option>
          <option value="powerLifting">Power Lifting</option>
          <option value="strongman">Strongman</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="stretching">Stretching</option>
          */}
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
          <option value="lowerBack">Lower Back</option>
          <option value="middleBack">Middle Back</option>
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
  );
};

export default UserInputForm;
