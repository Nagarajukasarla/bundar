import React from "react";
import HeaderLogo from "@/components/feature/HeaderLogo";
import HeaderUserPanel from "@/components/feature/HeaderUserPanel";
import CInput from "@/components/core/CInput";
import { SearchIcon } from "lucide-react";
import HeroicMenu from "@/components/feature/HeroicMenu";
import type { ContainerProps } from "@/types/component";

interface HeaderProps extends ContainerProps { }

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="bg-gradient-to-b from-primary-light to-primary-light md:from-primary-light md:to-white px-2 md:px-12">
                {/* Header top row */}
                <div className="mx-auto py-2 flex justify-between items-center gap-4">
                    {/* Left: Logo */}
                    <HeaderLogo className="flex-shrink-0 max-w-60 sm:max-w-80 md:max-w-full" />

                    {/* Middle search bar */}
                    <div className="hidden md:block md:flex-grow">
                        <CInput
                            styles="w-full sm:mt-2"
                            icon={<SearchIcon className="w-5 h-5" />}
                            iconPosition="left"
                            value={""}
                            placeholder="Search for"
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>

                    {/* Right: User panel */}
                    <HeaderUserPanel className="flex-shrink-0" />
                </div>

                {/* Heroic menu below */}
                <HeroicMenu className="bg-transparent hidden md:block mx-auto py-2 md:py-5" />
            </div>
        </div>
    );
};

export default Header;
