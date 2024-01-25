import { useState } from "react";
import { postForm } from "../../functions/httpFunctions";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import GenerateButton from "./GenerateButton";

interface AddEntityFormProps {
  setExercises: (exercises: Exercise[]) => void;
}

const StretchingInputForm = ({ setExercises }: AddEntityFormProps) => {
  const [formData, setFormData] = useState({
    duration: "15",
    type: "stretching",
    muscle: "abdominals",
    difficulty: "beginner",
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

  const handleMuscleChange = (event: SelectChangeEvent) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      muscle: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    postForm(formData, setExercises);
  };

  return (
    <div className="mb-5 flex flex-col items-center">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
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
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
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
          <MenuItem value={"expert"}>Expert</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Muscle</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={formData.muscle}
          onChange={handleMuscleChange}
          label="muscle"
        >
          <MenuItem value="abdominals">Abdominals</MenuItem>
          <MenuItem value="abductors">Abductors</MenuItem>
          <MenuItem value="biceps">Biceps</MenuItem>
          <MenuItem value="calves">Calves</MenuItem>
          <MenuItem value="Chest">Chest</MenuItem>
          <MenuItem value="forearms">Forearms</MenuItem>
          <MenuItem value="glutes">Glutes</MenuItem>
          <MenuItem value="hamstrings">Hamstrings</MenuItem>
          <MenuItem value="lats">Lats</MenuItem>
          <MenuItem value="lower_back">Lower Back</MenuItem>
          <MenuItem value="middle_back">Middle Back</MenuItem>
          <MenuItem value="neck">Neck</MenuItem>
          <MenuItem value="quadriceps">Quadriceps</MenuItem>
          <MenuItem value="traps">Traps</MenuItem>
          <MenuItem value="triceps">Triceps</MenuItem>
        </Select>
      </FormControl>
      <GenerateButton handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default StretchingInputForm;
