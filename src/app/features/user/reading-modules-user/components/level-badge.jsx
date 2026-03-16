import { useSearchParams } from "react-router-dom";

const LevelBadge = () => {
    const [params] = useSearchParams();
    const currentLevel = params.get("level");
    const styles = {
        N5: "bg-cyan-bg text-cyan-500",
        N4: "bg-amber-bg text-amber-500",
        N3: "bg-pink-bg text-pink-500",
        default: "bg-cyan-bg text-cyan-500",
    };

    const activeStyle = styles[currentLevel] || styles.default;

    return (
        <>
            <div className="flex items-center justify-between select-none">
                <p
                    className={`${activeStyle} px-4 py-1 rounded-md font-medium text-sm`}
                >
                    {currentLevel}
                </p>
            </div>
        </>
    );
};

export default LevelBadge;
