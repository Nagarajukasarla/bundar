import React from "react";

interface NonVegIconProps {
    className?: string;
    width?: string;
    height?: string;
}

const NonVegIcon: React.FC<NonVegIconProps> = ({ className = "", width = "24px", height = "24px" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 3387 3387"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="338"
                y="320"
                width="2739"
                height="2773"
                fill="#FEFEFE"
                stroke="#9C3B14"
                strokeWidth="85"
            />
            <circle
                cx="1707"
                cy="1733"
                r="789"
                fill="#9C3B14"
                stroke="#9C3B14"
                strokeWidth="85"
            />
        </svg>
    );
};

export default NonVegIcon;
