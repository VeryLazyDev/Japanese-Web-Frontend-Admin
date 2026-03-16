import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { LevelProvider } from "@/context/level-provider";
import DialogStage from "../dialogs/stage";

const UserLayout = () => {
    return (
        <LevelProvider>
            <main className="w-full min-h-screen bg-primary-bg font-inter text-primary-font flex flex-col items-center relative">
                <Navbar />
                <DialogStage />
                <div className="bg-transparent max-w-full w-full sm:w-150 lg:w-250 mt-15 h-auto flex flex-col justify-center pt-3 pb-10 px-5">
                    <Outlet />
                </div>
            </main>
        </LevelProvider>
    );
};
export default UserLayout;
