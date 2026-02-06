import { NavLink, useLocation } from "react-router-dom";
const BottomDockBtn = ({ dockInfo }) => {
  const location = useLocation();
  return (
    <NavLink
      to={dockInfo.route}
      className={`flex-1 flex justify-center items-center flex-col cursor-pointer`}
    >
      <div className="p-1 flex flex-col items-center justify-center">
        <dockInfo.icon size={20} />
        <p className="text-xs">{dockInfo.pageName}</p>
        <div
          className={`h-1 bg-primary w-full rounded-full mt-0.5 transition-opacity ${location.pathname === dockInfo.route ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </NavLink>
  );
};
export default BottomDockBtn;
