export async function postForm(formData: any, setExercises: (exercises: Exercise[]) => void) {
    try {
        const response = await fetch("http://localhost:8080/api/exercise/exerciseList", {
            method: "POST",
            body: JSON.stringify(formData),
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