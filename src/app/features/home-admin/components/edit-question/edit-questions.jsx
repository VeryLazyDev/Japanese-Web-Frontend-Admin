import { useEditQuestion } from "../../hooks/useEditQuestions";
import EditQuestionSection from "./edit-questions-section";

const EditQuestions = () => {
    const { editQuestionSidebar, closeEdit } = useEditQuestion();
    return (
        <>
            <div
                className={`absolute inset-0 z-40 flex transition-all duration-200  ${editQuestionSidebar ? "bg-black/30 backdrop-blur-xs" : "pointer-events-none"}`}
            >
                <div
                    className="w-full h-full absolute"
                    onClick={closeEdit}
                ></div>
                <div
                    className={`top-0 right-0 z-50 h-screen transition-all duration-200 absolute
                        overflow-hidden p-5 min-w-120 max-w-full ${editQuestionSidebar ? "translate-x-0 " : "translate-x-full"}
                            `}
                >
                    <EditQuestionSection />
                </div>
            </div>
            )
        </>
    );
};
export default EditQuestions;
