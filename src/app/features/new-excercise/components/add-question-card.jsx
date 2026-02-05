import { useMemo } from "react";
import AddAnswerSection from "./add-answer";
import useQuestionState from "../hooks/userQuestionState";

const AddQuestionCard = ({ questionId, currentQuestion }) => {
    const { Questions, ChangeCorrectAnswer } = useQuestionState();
    return useMemo(() => {
        return (
            <div
                className={`grid grid-cols-2 gap-4 ${currentQuestion === questionId ? "" : "hidden"}`}
            >
                <div>
                    <p className="text-sm font-inter w-auto pb-3">
                        Question Text {questionId}
                    </p>
                    <textarea
                        name={`question-${questionId}`}
                        required
                        className="w-full h-38 bg-light-bg p-3 rounded-md outline-none border border-neutral-500 resize-none text-xs"
                        placeholder="Enter the main paragraph..."
                    ></textarea>
                </div>
                <div className="">
                    <p className="text-sm font-inter w-auto pb-3">
                        Answer Options for Question {questionId}
                    </p>
                    {Array.from({ length: 4 }).map((_, id) => (
                        <AddAnswerSection
                            key={id}
                            correctAnswer={
                                Questions.find(
                                    (ques) => ques.questionId === questionId,
                                ).correctAnswerId
                            }
                            answerId={id}
                            questionId={questionId}
                            onChange={() => ChangeCorrectAnswer(questionId, id)}
                        />
                    ))}
                    {/* <div className="flex justify-end py-3 mr-17"></div>*/}
                </div>
            </div>
        );
    }, [questionId, currentQuestion, Questions, ChangeCorrectAnswer]);
};
export default AddQuestionCard;
