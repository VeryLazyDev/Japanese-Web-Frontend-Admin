import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";
import PullChain from "../pullchain/pullchain";
import BottomDock from "../bottom-dock/bottom-dock";
import DialogStage from "../dialogs/stage";

const AdminLayout = () => {
<<<<<<< HEAD
    return (
        <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative max-md:pb-15">
            <Dock />
            <DialogStage />
            <BottomDock />
            <PullChain />
            <Outlet />
        </main>
    );
=======
  return (
    <main
      className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative
       px-4 lg:px-40 md:px-20 pt-10"
    >
      <Dock />
      <DialogStage />
      <BottomDock />
      <PullChain />
      <Outlet />
    </main>
  );
>>>>>>> f5ba93a (Add setting for loading furigana data)
};

export default AdminLayout;
