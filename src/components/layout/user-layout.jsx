import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
const UserLayout = () => {
    return (
        <main className="w-full min-h-screen bg-primary-bg font-inter text-primary-font flex flex-col items-center relative">
            <Navbar />
            <div className="bg-transparent w-90 sm:w-150 lg:w-250 mt-15 h-auto flex flex-col justify-center pt-3 pb-10 px-5">
                <Outlet />
            </div>
            
        </main>
    );
};
export default UserLayout;
