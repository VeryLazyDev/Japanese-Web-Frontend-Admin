import React from "react";
import { Outlet } from "react-router-dom";
import Dock from "../dock/dock";
import PullChain from "../pullchain/pullchain";

const AdminLayout = () => {
  return (
    <main className="w-screen h-screen bg-primary-bg font-inter text-primary-font flex flex-row relative">
      <Dock />
      <PullChain />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
