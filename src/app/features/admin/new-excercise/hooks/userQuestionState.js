import { useContext } from "react";
import { QuestionStateContext } from "../context/question-states-provider";
const useQuestionState = () => useContext(QuestionStateContext);
export default useQuestionState;
