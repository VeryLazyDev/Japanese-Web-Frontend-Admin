import { useState } from "react";
import { createContext } from "react";
const DialogContext = createContext({});
const DialogProvider = ({ children }) => {
  const [Dialogs, setDialogs] = useState([]);

  const PushDialog = (dialog) => {
    setDialogs([...Dialogs, dialog]);
  };
  const PopDialog = () => {
    setDialogs(Dialogs.slice(1));
  };

  return (
    <DialogContext.Provider value={{ PushDialog, PopDialog, Dialogs }}>
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogProvider };
