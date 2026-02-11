import { createContext } from "react";
import useParagraph from "../hooks/useParagraph";
import { useState } from "react";
import useDialogs from "@/hooks/useDialogs";

const EditQuestionContext = createContext({});
const EditQuestionProvider = ({ children }) => {
    const { paragraphList, deleteParagraph } = useParagraph();
    const { PushDialog } = useDialogs();
    const [editQuestionSidebar, setEditQuestionSidebar] = useState(false);
    const [selectedParagraph, setSelectedParagraph] = useState(null);
    const [previewMode, setPreviewMode] = useState("code");
    const [activeQuestionNo, setActiveQuestionNo] = useState(0);
    const openEdit = (paragraphId) => {
        const paragraph = paragraphList.find(
            (paragraph) => paragraph.id === paragraphId,
        );
        if (!paragraph) return;
        setSelectedParagraph(paragraph);
        setActiveQuestionNo(paragraph.questionList[0]?.id || 0);
        setEditQuestionSidebar(true);
    };
    const closeEdit = () => {
        setEditQuestionSidebar(false);
        setSelectedParagraph(null);
    };
    const handleDeleteQuestion = () => {
        if (!selectedParagraph) return;
        PushDialog({
            id: "delete-paragraph-confirm",
            type: "confirm",
            title: "Delete Paragraph",
            message: "Are you sure you want to delete this paragraph?",
            onConfirm: () => {
                deleteParagraph(selectedParagraph.id);
                closeEdit();
            },
        });
    };

    return (
        <EditQuestionContext.Provider
            value={{
                openEdit,
                closeEdit,
                editQuestionSidebar,
                selectedParagraph,
                handleDeleteQuestion,
                previewMode,
                setPreviewMode,
                activeQuestionNo,
                setActiveQuestionNo,
            }}
        >
            {children}
        </EditQuestionContext.Provider>
    );
};
export { EditQuestionContext, EditQuestionProvider };
