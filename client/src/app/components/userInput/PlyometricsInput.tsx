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

const PlyometricsInputForm = ({ setExercises }: AddEntityFormProps) => {
  const [formData, setFormData] = useState({
    duration: "15",
    type: "plyometrics",
    muscle: "",
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
      <GenerateButton handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default PlyometricsInputForm;
