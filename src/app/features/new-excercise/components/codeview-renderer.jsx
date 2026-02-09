import useFurigana from "../hooks/useFurigana";

const CodeViewRenderer = () => {
    const { code } = useFurigana();
    return (
        <textarea
            value={code}
            className="w-full h-full overflow-auto resize-none min-h-50 text-sm"
            readOnly
        />
    );
};
export default CodeViewRenderer;
