import { FormEvent, useState } from "react";
import { postForm } from "../../functions/httpFunctions";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface AddEntityFormProps {
  setExercises: (exercises: Exercise[]) => void;
}

const CardioInputForm = ({ setExercises }: AddEntityFormProps) => {
  const [formData, setFormData] = useState({
    duration: "",
    type: "cardio",
    muscle: "",
    difficulty: "",
  });

  const handleDurationChange = (event: SelectChangeEvent) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      duration: event.target.value,
    }));
  };

  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      difficulty: event.target.value,
    }));
  };

  // const buildFormData = (formElement: HTMLFormElement): FormData => {
  //   const formData = new FormData();

  //   const { duration, type, muscle, difficulty } = formElement;

  //   formData.append("duration", duration.value);
  //   formData.append("type", type.value);
  //   formData.append("muscle", muscle?.value || "");
  //   formData.append("difficulty", difficulty?.value || "");

  //   return formData;
  // };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // const formElement = event.target as HTMLFormElement;
    // const formData = buildFormData(formElement);

    // console.log(formData);

    postForm(formData, setExercises);
  };

  return (
    <div className="text-center mb-5">
      <h2 className="mt-1 font-bold">Cardiovascular Training</h2>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={formData.duration}
          onChange={handleDurationChange}
          label="duration"
        >
          <MenuItem value={"15"}>15 mins</MenuItem>
          <MenuItem value={"30"}>30 mins</MenuItem>
          <MenuItem value={"45"}>45 mins</MenuItem>
          <MenuItem value={"60"}>60 mins</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Difficulty
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={formData.difficulty}
          onChange={handleDifficultyChange}
          label="difficulty"
        >
          <MenuItem value={"beginner"}>Beginner</MenuItem>
          <MenuItem value={"intermediate"}>Intermediate</MenuItem>
        </Select>
      </FormControl>
      <button onClick={handleFormSubmit} type="submit" className="form__button">
        Generate
      </button>
    </div>
  );
};

export default CardioInputForm;
