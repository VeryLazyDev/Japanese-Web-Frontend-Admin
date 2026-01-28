const DockBtn = (props) => {
    const { currentFocus, pageName, route, onClick, icon: Icon, id } = props;
    const baseDockBtnStyle = `w-11 h-11 items-center justify-center flex rounded transition-all  ${currentFocus === id ? "text-primary-bg" : ""}`;

    return (
        <button
            className={`${baseDockBtnStyle}`}
            onClick={onClick}
            title={pageName}
        >
            <Icon className="z-1" />
        </button>
    );
};
export default DockBtn;
