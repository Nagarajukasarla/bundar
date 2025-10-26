// import React from "react";
// import HeaderLogo from "@/components/feature/HeaderLogo";
// import HeaderUserPanel from "@/components/feature/HeaderUserPanel";
// import CInput from "@/components/core/CInput";
// import { SearchIcon } from "lucide-react";
// import HeroicMenu from "@/components/feature/HeroicMenu";
// import type { ContainerProps } from "@/types/component";

// interface HeaderProps extends ContainerProps { }

// const Header: React.FC<HeaderProps> = ({ className }) => {
//     return (
//         <div className={className}>
//             <div className="bg-gradient-to-b from-primary-light to-primary-light md:from-primary-light md:to-white px-2 md:px-12">
//                 {/* Header top row */}
//                 <div className="mx-auto py-2 flex justify-between items-center gap-4">
//                     {/* Left: Logo */}
//                     <HeaderLogo className="flex-shrink-0 max-w-60 sm:max-w-80 md:max-w-full" />

//                     {/* Middle search bar */}
//                     <div className="flex-grow">
//                         <CInput
//                             styles="w-full sm:mt-2"
//                             icon={<SearchIcon className="w-5 h-5" />}
//                             iconPosition="left"
//                             value={""}
//                             placeholder="Search for"
//                             onChange={(e) => console.log(e.target.value)}
//                         />
//                     </div>

//                     {/* Right: User panel */}
//                     <HeaderUserPanel className="flex-shrink-0" />
//                 </div>

//                 {/* Heroic menu below */}
//                 <HeroicMenu className="bg-transparent mx-auto py-2 md:py-5" />
//             </div>
//         </div>
//     );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import HeaderLogo from "@/components/feature/HeaderLogo";
import HeaderUserPanel from "@/components/feature/HeaderUserPanel";
import CInput from "@/components/core/CInput";
import { SearchIcon } from "lucide-react";
import HeroicMenu from "@/components/feature/HeroicMenu";
import type { ContainerProps } from "@/types/component";
import { button } from "framer-motion/client";

interface HeaderProps extends ContainerProps { }

const Header: React.FC<HeaderProps> = ({ className }) => {
    const [scrollDown, setScrollDown] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Only trigger hiding when user scrolls down past threshold
            if (currentScroll > 50 && currentScroll > lastScroll) {
                setScrollDown(true);
            }

            // Only trigger show when user scrolls back to top area
            if (currentScroll < 50) {
                setScrollDown(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <div className={className}>
            <div className="bg-gradient-to-b from-primary-light to-primary-light md:from-primary-light md:to-white px-2 md:px-12 transition-all duration-500">
                {/* Header top row */}
                <div className="mx-auto py-2 flex justify-between items-center overflow-hidden">
                    {/* Left: Logo (hide when scrolling down on mobile) */}
                    <HeaderLogo
                        className={`flex-shrink-0 max-w-[60%] sm:max-w-80 md:max-w-full mr-2 transition-all duration-500 
                            ${scrollDown ? "hidden md:block" : "block"}`}
                    />

                    {/* Middle: Search bar */}
                    <div className={`flex-grow transition-all duration-500 ease-in-out ${scrollDown ? "w-full" : ""}`}>
                        <CInput
                            styles="w-full sm:mt-2 transition-all duration-500"
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
                <HeroicMenu className="bg-transparent mx-auto py-2 md:py-5" />
            </div>
        </div>
    );
};

export default Header;
