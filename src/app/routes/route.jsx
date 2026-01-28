import { AdminLayout, UserLayout } from "@/constant/lazyload";
import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./admin-routes";
import UserRoutes from "./user-routes";
import LoginAdminWrapper from "../features/login-admin/wrapper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: UserRoutes,
    },
    // {
    //   path: "admin/login",
    //   element: <LoginAdminWrapper />,
    // },
    {
        path: "admin",
        element: <AdminLayout />,
        children: AdminRoutes,
    },
]);

export default router;
