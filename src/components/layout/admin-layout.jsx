import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";
import PullChain from "../pullchain/pullchain";
import BottomDock from "../bottom-dock/bottom-dock";

const AdminLayout = () => {
<<<<<<< HEAD
  return (
    <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative max-md:pb-15">
      <Dock />
      <BottomDock />
      <PullChain />
      <Outlet />
    </main>
  );
=======
    return (
        <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative">
            <Dock />
            <BottomDock />
            <PullChain />
            <Outlet />
        </main>
    );
>>>>>>> 3299204 (add)
};

export default AdminLayout;
