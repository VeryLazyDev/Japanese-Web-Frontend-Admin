import { NavLink } from "react-router-dom";
const DockBtn = (props) => {
  const { currentFocus, pageName, route, icon: Icon, id } = props;
  const baseDockBtnStyle = `w-11 h-11 items-center justify-center flex rounded transition-all  ${currentFocus === id ? "text-primary-bg" : ""}`;

  return (
    <NavLink className={`${baseDockBtnStyle}`} to={route} title={pageName}>
      <Icon className="z-1" />
    </NavLink>
  );
};
export default DockBtn;
