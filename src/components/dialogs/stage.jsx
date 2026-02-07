import useDialogs from "@/hooks/useDialogs";

const DialogStage = () => {
  const { Dialogs } = useDialogs();
  return (
    <div
      className={`fixed top-0 left-0 bg-black/5 w-screen h-screen z-100 flex items-center justify-center ${Dialogs.length <= 0 ? "hidden" : ""}`}
    >
      <div>{Dialogs[0]}</div>
    </div>
  );
};
export default DialogStage;
