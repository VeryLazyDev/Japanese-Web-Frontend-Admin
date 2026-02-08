import { useState } from "react";
import { createContext } from "react";
const DialogContext = createContext({});
const DialogProvider = ({ children }) => {
  const [Dialogs, setDialogs] = useState([]);

  const PushDialog = (dialog) => {
    setDialogs([...Dialogs, dialog]);
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
