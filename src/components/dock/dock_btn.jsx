const DockBtn = (props) => {
    const { currentFocus, pageName, route, onClick, icon: Icon } = props;
    const baseDockBtnStyle =
        "w-12 h-12 items-center justify-center flex rounded";

    return (
        <button
            className={`${baseDockBtnStyle} ${currentFocus === pageName ? "bg-light-bg" : ""}`}
            onClick={() => onClick(pageName)}
        >
            <Icon />
        </button>
    );
};
export default DockBtn;
