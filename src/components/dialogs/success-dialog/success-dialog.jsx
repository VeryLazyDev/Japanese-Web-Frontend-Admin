import useDialogs from "@/hooks/useDialogs";

const SuccessDialog = ({ title, message, onClose }) => {
    const { CloseCurrentDialog } = useDialogs();
    const handleOnClick = () => {
        CloseCurrentDialog();
        if (onClose) {
            onClose();
        }
    };
    return (
        <div className="bg-primary-bg border border-primary-bd rounded p-3">
            <h3>{title}</h3>
            <div>{message}</div>
            <button onClick={handleOnClick}>Close</button>
        </div>
    );
};
export default SuccessDialog;
