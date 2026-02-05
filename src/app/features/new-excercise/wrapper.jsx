import { NewExerciseProvider } from "./context/new-exercise-provider";
import { QuestionStateProvider } from "./context/question-states-provider";
import NewExercisePage from "./page";
const NewExercisePageWrapper = () => {
    return (
        <QuestionStateProvider>
            <NewExerciseProvider>
                <NewExercisePage />
            </NewExerciseProvider>
        </QuestionStateProvider>
    );
};
export default NewExercisePageWrapper;
