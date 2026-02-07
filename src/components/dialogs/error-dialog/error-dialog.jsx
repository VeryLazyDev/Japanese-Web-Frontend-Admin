import useDialogs from "@/hooks/useDialogs";
import { MdOutlineError } from "react-icons/md";
const ErrorDialog = ({ header, message }) => {
  const { PopDialog } = useDialogs();

  return (
    <div className=" flex flex-col w-100 min-h-40 p-4 bg-primary-bg rounded items-center justify-between">
      <MdOutlineError size={35} />
      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-semibold text-md">{header || "Error"}</h3>
        <div>{message || "An error occurred"}</div>
      </div>
      <button
        className="p-1 text-primary-bg bg-primary w-full rounded mt-5"
        onClick={PopDialog}
      >
        Close
      </button>
    </div>
  );
};
export default ErrorDialog;
