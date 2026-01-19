import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";

const AdminLayout = () => {
    return (
        <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative">
            <Dock />
            <Outlet />
        </main>
    );
};

export default AdminLayout;
