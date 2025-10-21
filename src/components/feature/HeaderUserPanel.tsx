import type { ContainerProps } from "@/types/component";
import React from "react";

interface HeaderUserPanelProps extends ContainerProps {}

const HeaderUserPanel: React.FC<HeaderUserPanelProps> = ({ className }) => {
    return (
        <div className={className}>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 text-gray-700 dark:text-gray-300">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                        <path
                            d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default HeaderUserPanel;
