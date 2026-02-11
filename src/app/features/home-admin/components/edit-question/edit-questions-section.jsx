import { useEditQuestion } from "../../hooks/useEditQuestions";
import FuriganaRenderer from "../../../new-excercise/components/furiganated-renderer";
import EditQuestionBottomSection from "./edit-questions-bottom";
import EditQuestionHeader from "./edit-question-header";
import EditParagraphSection from "./edit-paragraph-section";
import EditQuestionCard from "./edit-question-card";

const EditQuestionSection = () => {
    const { selectedParagraph, setActiveQuestionNo, activeQuestionNo } =
        useEditQuestion();

    if (!selectedParagraph) return null;
    return (
        <>
            <section className="h-full flex flex-col bg-primary-bg border border-light-bg rounded-lg">
                {/* head */}
                <EditQuestionHeader />
                {/* body */}
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <div className="flex-1 flex flex-col px-6 space-y-4 overflow-y-auto">
                        <EditParagraphSection />
                        <div className="flex gap-2">
                            {selectedParagraph &&
                                selectedParagraph.questionList.map(
                                    (question, index) => {
                                        const isActive =
                                            activeQuestionNo === question.id;

                                        return (
                                            <button
                                                key={question.id}
                                                type="button"
                                                onClick={() =>
                                                    setActiveQuestionNo(
                                                        question.id,
                                                    )
                                                }
                                                className={`h-8 w-8 flex items-center justify-center text-sm rounded cursor-pointer transition-all border border-primary-bd
                      ${isActive ? "bg-light-bg" : "bg-primary-bg"}`}
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    },
                                )}
                        </div>
                        {selectedParagraph.questionList.map((question) => (
                            <EditQuestionCard
                                key={question.id}
                                question={question}
                            />
                        ))}
                    </div>
                    {/* Submit and delete button section */}
                    <EditQuestionBottomSection />
                </div>
            </section>
        </>
    );
};

export default EditQuestionSection;
