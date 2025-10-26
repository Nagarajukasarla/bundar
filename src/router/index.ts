import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import appRoutes from "./AppRoutes";
import mainRoutes from "./mainRoutes";
// import authRoutes from "./authRoutes";
import React from "react";

const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
    ...appRoutes,
    ...mainRoutes,
    {
        path: "*",
        element: React.createElement(NotFound),
    },
    //   ...authRoutes,
]);

export default router;
