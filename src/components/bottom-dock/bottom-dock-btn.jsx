const BottomDockBtn = ({ dockInfo, currentSelected, onClick }) => {
    return (
        <div
            onClick={() => onClick(dockInfo.id)}
            className={`flex-1 flex justify-center items-center flex-col cursor-pointer `}
        >
            <div className="p-1 flex flex-col items-center ">
                <dockInfo.icon size={24} />
                <p className="text-xs font-semibold">{dockInfo.pageName}</p>
                <div
                    className={`h-1 bg-primary w-full rounded-full mt-0.5 transition-opacity ${currentSelected === dockInfo.id ? "opacity-100" : "opacity-0"}`}
                ></div>
            </div>
        </div>
    );
};
export default BottomDockBtn;
