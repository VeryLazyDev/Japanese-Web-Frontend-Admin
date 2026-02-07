import { FuriganaProvider } from "./context/furigana-provider";
import { NewExerciseProvider } from "./context/new-exercise-provider";
import { QuestionStateProvider } from "./context/question-states-provider";
import NewExercisePage from "./page";
const NewExercisePageWrapper = () => {
  return (
    <QuestionStateProvider>
      <FuriganaProvider>
        <NewExerciseProvider>
          <NewExercisePage />
        </NewExerciseProvider>
      </FuriganaProvider>
    </QuestionStateProvider>
  );
};
export default NewExercisePageWrapper;
