import useTheme from "@/hooks/useTheme";
import React from "react";
import Content from "@/components/layout/Content";
import Header from "@/components/layout/Header";
import CInput from "../core/CInput";
import HeroicMenu from "../feature/HeroicMenu";
import { SearchIcon } from "lucide-react";

const AppLayout: React.FC = () => {
    useTheme(); // Initialize theme at app level;
    // You can remove this after placing  theme toggle button in settings or header
    return (
        <div className="min-h-screen bg-background">
            <Header className="md:sticky md:top-0 z-50" />

            <div className="bg-gradient-to-b from-primary-light to-white px-2 py-2 md:hidden sticky top-0 z-50">
                {/* Mobile only search bar */}
                <div className="">
                    <CInput
                        styles="w-full"
                        icon={<SearchIcon className="w-5 h-5" />}
                        iconPosition="left"
                        value={""}
                        placeholder="Search for"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>

                {/* Heroic menu below */}
                <HeroicMenu className="bg-transparent mx-auto py-2 md:py-5" />
            </div>

            <Content className="px-2 md:px-8" />
        </div>
    );
};

export default AppLayout;
