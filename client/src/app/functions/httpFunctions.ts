export async function postForm(formData: FormData, setExercises: (exercises: Exercise[]) => void) {
    try {
        const response = await fetch("http://localhost:8080/api/exercise/exerciseList", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to add generate exercises");
        }

        const data = await response.json();
        const exerciseList = await data;
        console.log(exerciseList);
        setExercises(exerciseList);
    } catch (error) {
        console.error("Error while submitting the form:", error);
    }
}