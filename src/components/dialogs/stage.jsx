import useDialogs from "@/hooks/useDialogs";
import ConfirmDialog from "./confirm-dialog/confirm-dialog";
import LoadingDialog from "./loading-dialog/loading-dialog";
import ErrorDialog from "./error-dialog/error-dialog";
import SuccessDialog from "./success-dialog/success-dialog";

const DialogStage = () => {
    const { Dialogs } = useDialogs();
    return (
        <div
            className={`fixed top-0 left-0 bg-black/5 w-screen h-screen backdrop-blur-xs z-100 flex items-center justify-center ${Dialogs.length <= 0 ? "hidden" : ""}`}
        >
            <div>
                {Dialogs && Dialogs.length > 0 ? (
                    <DialogRenderer {...Dialogs[0]} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
const DialogRenderer = ({ type, title, message, onConfirm, onClose }) => {
    switch (type) {
        case "confirm":
            return (
                <ConfirmDialog
                    title={title}
                    onConfirm={onConfirm}
                    message={message}
                />
            );
        case "loading":
            return <LoadingDialog message={message} />;
        case "error":
            return <ErrorDialog title={title} message={message} />;
        case "success":
            return (
                <SuccessDialog
                    title={title}
                    message={message}
                    onClose={onClose}
                />
            );
        default:
            return null;
    }
};
export default DialogStage;
