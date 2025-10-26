import Header from "@/components/layout/Header";
import useTheme from "@/hooks/useTheme";
import React from "react";
import { Outlet } from "react-router-dom";
import BottomMenu from "../feature/BottomMenu";

const MainLayout: React.FC = () => {
    useTheme(); // Initialize theme at app level;
    // You can remove this after placing  theme toggle button in settings or header
    return (
        <div className="min-h-screen bg-background">
            <Header className="sticky top-0 z-50" />
            <div className="px-2 md:px-8 lg:px-16 pb-16 md:pb-0">
                <Outlet />
            </div>
            <BottomMenu />
        </div>
    );
};

export default MainLayout;
