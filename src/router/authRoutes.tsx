// authRoutes.tsx
import NoLayout from "@/components/layout/NoLayout";
import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));

const authRoutes = [
  {
    element: <NoLayout />,
    children: [
      { path: "/login", element: <Login /> },
    ],
  },
];

export default authRoutes;
