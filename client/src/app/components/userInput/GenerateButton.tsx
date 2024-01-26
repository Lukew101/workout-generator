import React from "react";

interface GenerateButtonProps {
  handleFormSubmit: (event: {    preventDefault: () => void;}) => Promise<void>;
}

export default function GenerateButton({ handleFormSubmit }: GenerateButtonProps){
  return (
    <button
    className="w-4/5 text-white bg-accent hover:bg-accentDark focus:ring-4 focus:ring-accentLight font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2"
      onClick={handleFormSubmit}
    >
      Generate
    </button>
  );
};
