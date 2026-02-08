import useDialogs from "@/hooks/useDialogs";
import { X } from "lucide-react";
import { MdOutlineError } from "react-icons/md";
const ErrorDialog = ({ title, message }) => {
  const { CloseCurrentDialog } = useDialogs();

  return (
    <div className=" flex flex-col w-80 min-h-20 h-auto p-4 bg-primary-bg rounded-sm items-center relative">
      <div className="flex flex-row justify-end w-full absolute top-0 left-0 p-1">
        <button
          className="p-1 text-primary rounded cursor-pointer"
          onClick={CloseCurrentDialog}
        >
          <X />
        </button>
      </div>
      <MdOutlineError size={30} />
      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-semibold text-sm">{title || "Error"}</h3>
        <div className="text-sm">{message || "An error occurred"}</div>
      </div>
    </div>
  );
};
export default ErrorDialog;
