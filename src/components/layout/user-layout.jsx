import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
const UserLayout = () => {
    return (
        <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-col items-center relative">
            <Navbar />
            <Outlet />
        </main>
    );
};
export default UserLayout;
