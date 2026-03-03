import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const DialogContext = createContext({
    PushDialog: () => {},
    CloseCurrentDialog: () => {},
    CloseDialogWithId: () => {},
    Dialogs: [],
    UpdateDialogMessage: () => {},
});
const DialogProvider = ({ children }) => {
    const [Dialogs, setDialogs] = useState([]);

    const PushDialog = (dialog) => {
        console.log(dialog);
        setDialogs((prev) => [...prev, dialog]);
    };
    const CloseCurrentDialog = () => {
        setDialogs(Dialogs.slice(1));
    };
    const CloseDialogWithId = (id) => {
        setDialogs(Dialogs.filter((dialog) => dialog.id !== id));
    };
    const UpdateDialogMessage = (id, message) => {
        setDialogs(
            Dialogs.map((dialog) =>
                dialog.id === id ? { ...dialog, message } : dialog,
            ),
        );
    };
    useEffect(() => {
        console.log(Dialogs);
    }, [Dialogs]);
    return (
        <DialogContext.Provider
            value={{
                PushDialog,
                CloseCurrentDialog,
                CloseDialogWithId,
                Dialogs,
                UpdateDialogMessage,
            }}
        >
            {children}
        </DialogContext.Provider>
    );
};

export { DialogContext, DialogProvider };
