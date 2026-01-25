import { useContext } from "react";
import { EditQuestionContext } from "../context/edit-provider";

export const useEditQuestion = () => {
    const context = useContext(EditQuestionContext);
    if (!context) {
        throw new Error(
            "useEditQuestion must be used within an EditQuestionProvider.",
        );
    }
    return context;
};
