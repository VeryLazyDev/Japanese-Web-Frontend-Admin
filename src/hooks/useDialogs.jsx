import { DialogContext } from "@/context/dialog-provider";
import { useContext } from "react";
const useDialogs = () => useContext(DialogContext);
export default useDialogs;
