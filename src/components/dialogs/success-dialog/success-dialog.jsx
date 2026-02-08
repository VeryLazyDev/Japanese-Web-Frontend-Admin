import useDialogs from "@/hooks/useDialogs";

const SuccessDialog = ({ title, message }) => {
  const { CloseCurrentDialog } = useDialogs();
  return (
    <div className="bg-primary-bg border border-primary-bd rounded p-3">
      <h3>{title}</h3>
      <div>{message}</div>
      <button onClick={CloseCurrentDialog}>Close</button>
    </div>
  );
};
export default SuccessDialog;
