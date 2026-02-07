import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";
import PullChain from "../pullchain/pullchain";
import BottomDock from "../bottom-dock/bottom-dock";
import DialogStage from "../dialogs/stage";

const AdminLayout = () => {
    return (
        <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative max-md:pb-15">
            <Dock />
            <DialogStage />
            <BottomDock />
            <PullChain />
            <Outlet />
        </main>
    );
};

export default AdminLayout;
