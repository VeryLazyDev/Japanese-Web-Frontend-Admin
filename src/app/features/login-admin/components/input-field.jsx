import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";

const InputField = ({ className, type = "text", ...props }) => {
    const [vType, setvType] = useState(type);

    const handleOnPeekClick = () => {
        setvType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <div
            className={`bg-light-bg w-full rounded flex flex-row items-center has-focus:outline-2 outline-primary border-primary/20 border ${className}`}
        >
            <input
                className="w-full h-full outline-none p-3 rounded"
                type={vType}
                {...props}
            />
            {type === "password" && (
                <div className="px-2" onClick={handleOnPeekClick}>
                    {vType === "password" ? <Eye /> : <EyeClosed />}
                </div>
            )}
        </div>
    );
};

export default InputField;
