import useDialogs from "@/hooks/useDialogs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const ParagraphContext = createContext();

const FetchAllParagraph = async () => {
    const { data } = await axios.get(
        "https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/all?size=100",
    );
    return data;
};

const ParagraphProvider = ({ children }) => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["paragraph"],
        queryFn: FetchAllParagraph,
    });
    const { PushDialog, CloseDialogWithId } = useDialogs();
    const [paragraphList, setParagraphList] = useState([]);
    useEffect(() => {
        if (!data?.content) return;
        const update = () => {
            setParagraphList(data.content);
        };
        update();
    }, [data]);

    const deleteParagraph = async (id) => {
        // 1. Show loading dialog
        PushDialog({
            id: "paragraph-delete-loading",
            type: "loading",
            message: "Please wait...",
        });

        try {
            // 2. Call API
            await axios.delete(
                "https://proxy.phyoheinko.com?" +
                    `https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/delete/${id}`,
            );
            CloseDialogWithId("paragraph-delete-loading");
            // 3. On success
            PushDialog({
                id: "paragraph-delete-success",
                type: "success",
                title: "Success",
                message: "Paragraph deleted successfully",
            });
        } catch (error) {
            CloseDialogWithId("paragraph-delete-loading");
            // 4. On error
            PushDialog({
                id: "paragraph-delete-error",
                type: "error",
                title: "Error",
                message: "Failed to delete paragraph" + error.message,
            });
        } finally {
            refetch();
        }
    };

    return (
        <ParagraphContext.Provider
            value={{ paragraphList, isPending, error, deleteParagraph }}
        >
            {children}
        </ParagraphContext.Provider>
    );
};
export { ParagraphContext, ParagraphProvider };
