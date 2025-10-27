import type { FC } from "react";
import type { ContainerProps } from "@/types/component";

interface FavouriteOutlinedProps extends ContainerProps {
    width?: string;
    height?: string;
}

const FavouriteOutlined: FC<FavouriteOutlinedProps> = ({ className, width = "24px", height = "24px" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 6.35 6.35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M2.184 0.721C1.757 0.721 1.329 0.884 1.004 1.209C0.354 1.859 0.354 2.917 1.004 3.567L3.178 5.55C3.23 5.603 3.305 5.63 3.375 5.63C3.446 5.63 3.521 5.603 3.574 5.55L5.346 3.778C5.996 3.128 5.996 2.071 5.346 1.421C4.747 0.821 3.829 0.821 3.176 1.131C2.877 0.9 2.543 0.721 2.184 0.721ZM2.184 1.246C2.474 1.246 2.764 1.357 2.989 1.582C3.042 1.635 3.117 1.662 3.188 1.662C3.258 1.662 3.333 1.635 3.386 1.582C3.835 1.133 4.548 1.133 4.997 1.582C5.446 2.031 5.446 2.744 4.997 3.193L3.375 4.815L1.753 3.193C1.304 2.744 1.304 2.031 1.753 1.582C1.978 1.357 2.27 1.246 2.56 1.246H2.184Z"
            fill="currentColor"
        />
    </svg>
);

export default FavouriteOutlined;