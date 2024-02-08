import { Exercise } from '../utils/types'; 

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchExerciseList(exerciseType: string, formData: any, setExercises: (exercises: Exercise[]) => void) {
    try {
        const response = await fetch(`${BACKEND_URL}/exercise/${exerciseType}`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error("Failed to add generate exercises");
        }
        const exerciseList = await response.json();
        setExercises(exerciseList);
    } catch (error) {
        console.error("Error while submitting the form:", error);
    }
}