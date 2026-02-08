import useDialogs from "@/hooks/useDialogs";
import { CheckCircle } from "lucide-react";
import { X } from "lucide-react";

const ConfirmDialog = ({ title, message, onConfirm }) => {
  const { CloseCurrentDialog } = useDialogs();
  const handleOnConfirm = () => {
    CloseCurrentDialog();
    if (!onConfirm) return;
    onConfirm();
  };
  return (
    <div className="min-w-20 min-h-20 w-100 bg-primary-bg border border-primary-bd relative p-2">
      <div className="w-full flex justify-end absolute top-0 left-0 p-1">
        <button className="p-1 cursor-pointer" onClick={CloseCurrentDialog}>
          <X />
        </button>
      </div>
      <CheckCircle size={30} />
      <div>
        <h3 className="font-semibold text-sm">{title || "Confirm"}</h3>
        <div className="text-sm">{message || "Are you sure?"}</div>
      </div>
      <div className="flex flex-row gap-2">
        <button onClick={CloseCurrentDialog} className="p-2 bg-red-400">
          Cancel
        </button>
        <button
          onClick={handleOnConfirm}
          className="p-2 bg-primary text-primary-bg"
        >
          Sure
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
