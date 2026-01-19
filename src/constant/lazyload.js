import { lazy } from "react";
import PageLoader from "../components/page-loader";

export const AdminLayout = PageLoader(
    lazy(() => import("@/components/layout/admin-layout")),
);
export const UserLayout = PageLoader(
    lazy(() => import("@/components/layout/user-layout")),
);
