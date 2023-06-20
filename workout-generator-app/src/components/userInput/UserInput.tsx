import { useState } from "react";

interface ExerciseSearchProps {
    onSearch: (searchValues: { sessionLength: string, trainingType: string, difficulty: string }) => void;
  }

const UserInput = ({ onSearch }: ExerciseSearchProps) => {
    const [searchValues, setSearchValues] = useState({
        sessionLength: '',
        trainingType: '',
        difficulty: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearchValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchValues);
      };

  return (
    <div>
        <h2>Exercise Search</h2>
        <form onSubmit={handleFormSubmit}>
            <label>Session Length</label>
            <input type="text" name="sessionLength" value={searchValues.sessionLength} onChange={handleInputChange}></input>
            <label>Training type</label>
            <input type="text" name="trainingType" value={searchValues.trainingType} onChange={handleInputChange}></input>
            <label>Difficulty</label>
            <input type="text" name="difficulty" value={searchValues.difficulty} onChange={handleInputChange}></input>
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default UserInput