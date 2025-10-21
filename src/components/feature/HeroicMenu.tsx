import { BagIcon, BeautyIcon, FoodIcon, NewIcon, RupeeIcon } from "@/assets/icons";
import type { ContainerProps } from "@/types/component";
import React, { useState } from "react";

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

interface HeroicMenuProps extends ContainerProps { }

const menuItems: MenuItem[] = [
    {
        id: "1",
        label: "All",
        icon: <BagIcon className=""/>
    },
    {
        id: "2",
        label: "Snacks",
        icon: <FoodIcon/>
    },
    {
        id: "3",
        label: "Beauty",
        icon: <BeautyIcon />
    },
    {
        id: "4",
        label: "Sale",
        icon: <RupeeIcon />
    },
    {
        id: "5",
        label: "New",
        icon: <NewIcon />
    }
];

const MenuItemComponent: React.FC<{ item: MenuItem; isActive: boolean; onClick: () => void }> = ({
    item,
    isActive,
    onClick,
}) => {
    return (
        <div className="">
            <div
                className={`flex flex-col md:flex-row items-center justify-center min-w-[70px] md:min-w-[100px] cursor-pointer transition-colors ${isActive ? "text-primary border-b border-primary" : ""
                    }`}
                onClick={onClick}
            >
                {item.icon}
                <p className={`text-sm text-center ${isActive ? "text-primary font-medium" : "text-foreground"}`}>
                    {item.label}
                </p>
            </div>
        </div>
    );
};

const HeroicMenu: React.FC<HeroicMenuProps> = ({ className }) => {
    const [activeItem, setActiveItem] = useState<string>("all");

    return (
        <div className={className}>
            <div className="mx-auto">
                <div className="flex overflow-x-auto scrollbar-hide gap-0">
                    {menuItems.map(item => (
                        <MenuItemComponent
                            key={item.id}
                            item={item}
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroicMenu;
