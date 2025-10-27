import OrdersIcon from '@/assets/icons/BagIcon'; // Assuming appropriate icons
import FavouritesIcon from '@/assets/icons/FavouriteOutlined';
import type { ProfileMenuItemType } from '@/types/component';
import React from 'react';

interface MenuItem {
    icon: React.ComponentType<{ className?: string }>;
    label: ProfileMenuItemType;
}

const menuItems: MenuItem[] = [
    { 
        icon: OrdersIcon, 
        label: 'Orders', 
    },
    { 
        icon: FavouritesIcon, 
        label: 'Favourites', 
    },
    // { icon: SettingsIcon, label: 'Settings' },
];

interface SideMenuProps {
    selectedMenu: ProfileMenuItemType;
    setSelectedMenu: (menu: ProfileMenuItemType) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ selectedMenu, setSelectedMenu }) => {
    
    const handleMenuItemClick = (menu: ProfileMenuItemType) => {
        let item = menuItems.find(item => item.label === menu);
        if (item) {
            setSelectedMenu(menu);
        }
    };

    return (
        <div className="w-64 bg-gray-100 h-screen p-4 border-r">
            <nav className="space-y-4">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center p-2 rounded cursor-pointer ${item.label === selectedMenu ? 'bg-primary text-white' : 'hover:bg-gray-200'
                            }`}
                        onClick={() => handleMenuItemClick(item.label)}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span className="text-sm font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default SideMenu;
