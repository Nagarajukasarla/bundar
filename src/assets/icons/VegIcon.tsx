import type { ContainerProps } from "@/types/component";
import React from "react";

interface VegIconProps extends ContainerProps {
    width?: string;
    height?: string;
}

const VegIcon: React.FC<VegIconProps> = ({ className = "", width = "24px", height = "24px" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 155 155"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="77.5"
                cy="77.5"
                r="50"
                fill="#008000"
            />
            <rect
                width="155"
                height="15"
                x="0"
                y="0"
                fill="#008000"
            />
            <rect
                width="155"
                height="15"
                x="0"
                y="140"
                fill="#008000"
            />
            <rect
                width="15"
                height="150"
                x="0"
                y="0"
                fill="#008000"
            />
            <rect
                width="15"
                height="150"
                x="140"
                y="0"
                fill="#008000"
            />
        </svg>
    );
};

export default VegIcon;
