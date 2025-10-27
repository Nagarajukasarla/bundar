import type { FC } from "react";
import ContentSection from "./ContentSection";
import SideMenu from "./SideMenu";
import { useState } from "react";
import type { ProfileMenuItemType } from "@/types/component";

const LargeScreenProfileSection: FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<ProfileMenuItemType>("Orders");
    return (
        <div className="flex">
            <SideMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <ContentSection selectedMenu={selectedMenu} />
        </div>
    );
};

export default LargeScreenProfileSection;
