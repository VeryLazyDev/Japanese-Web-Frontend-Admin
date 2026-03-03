import { useContext } from "react";
import { NewExerciseContext } from "../context/new-exercise-provider";
const useNewExercise = () => useContext(NewExerciseContext);
export default useNewExercise;
