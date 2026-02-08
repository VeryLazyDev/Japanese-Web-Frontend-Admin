import { LoaderCircle } from "lucide-react";

const LoadingDialog = ({ message }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <LoaderCircle className="animate-spin" />
      <div className="text-sm">{message}</div>
    </div>
  );
};
export default LoadingDialog;
