import { useMemo } from "react";

const AddAnswerSection = ({ onChange, correctAnswer, answerId, questionId }) =>
    useMemo(() => {
        return (
            <div className="flex items-center gap-3">
                <input
                    // value={question.answer.text}
                    // onChange={(e) => updateAnswer(answer.id, e.target.value)}
                    // placeholder={`Option${question.answer.id}`}
                    name={`question-${questionId}-answer-${answerId}`}
                    required
                    className="bg-light-bg w-full h-8 p-3 mb-2 rounded-md text-xs border border-neutral-500"
                />
                <input
                    type="radio"
                    onChange={onChange}
                    checked={correctAnswer === answerId}
                    className="-mt-2"
                />
                <label className="text-xs -mt-2">Correct</label>
            </div>
        );
    }, [correctAnswer, answerId, questionId, onChange]);
export default AddAnswerSection;
