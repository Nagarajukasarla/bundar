import { Outlet } from "react-router-dom";
import React from "react";
import BottomMenu from "../feature/BottomMenu";

const AppLayout: React.FC = () => {
    return (
        <div>
            <div className="px-2 md:px-8 lg:px-16 pb-16 md:pb-0">
                <Outlet />
            </div>
            <BottomMenu />
        </div>
    );
};

export default AppLayout;
