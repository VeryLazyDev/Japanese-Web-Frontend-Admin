import { lazy } from "react";
import PageLoader from "../components/page-loader";

export const MainLayout=PageLoader(
    lazy(()=>import('@/components/layout/main-layout'))
)