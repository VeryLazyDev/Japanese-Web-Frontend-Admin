import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";
import PullChain from "../pullchain/pullchain";
import BottomDock from "../bottom-dock/bottom-dock";
import DialogStage from "../dialogs/stage";

const AdminLayout = () => {
  return (
    <main className="w-screen max-h-screen h-screen bg-primary-bg overflow-auto font-inter text-primary-font flex flex-row relative max-md:pb-15 px-80 py-5 max-xl:px-60 max-lg:px-40 max-md:px-20  max-sm:px-10">
      <Dock />
      <DialogStage />
      <BottomDock />
      <PullChain />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
