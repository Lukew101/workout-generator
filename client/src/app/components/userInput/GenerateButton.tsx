import React from "react";

interface GenerateButtonProps {
  handleFormSubmit: (event: {    preventDefault: () => void;}) => Promise<void>;
}

export default function GenerateButton({ handleFormSubmit }: GenerateButtonProps){
  return (
    <button
      type="button"
      className="w-4/5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={handleFormSubmit}
    >
      Generate
    </button>
  );
};
