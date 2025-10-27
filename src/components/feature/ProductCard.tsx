import { type FC } from "react";
import CButton from "@/components/core/CButton";
import { VegIcon, NonVegIcon } from "../../assets/icons";
import type { ProductCardProps } from "@/types/component";
import { cn } from "@/utils/tailwindMerge";

const ProductCard: FC<ProductCardProps> = ({
    veg,
    image,
    originalPrice,
    discountedPrice,
    savings,
    pieces,
    name,
    variant,
    className,
    // rating,
    // reviews,
}) => {
    return (
        <div className={cn(`flex flex-col rounded w-64 max-w-[110px] md:max-w-[125px]`, className)}>
            {/* Product Image */}
            <div className="mb-1 relative">
                <img src={image} alt={name} className="w-full h-30 object-cover rounded-lg" />
                {/* Veg/Non-Veg Badge */}
                <div className="absolute top-2 right-2">
                    {veg ? <VegIcon width="12px" height="12px" /> : <NonVegIcon width="12px" height="12px" />}
                </div>
            </div>

            {/* Price Section */}
            <div className="flex flex-wrap items-center">
                <span className="text-[11px] md:text-[15px] font-[Roboto] mt-[1px] md:mt-[0px]">₹</span>
                <span className="ml-[2px] text-xs md:text-[15px] font-bold text-gray-900">{discountedPrice}</span>
                <span className="text-[9px] md:text-[13px] text-gray-500 line-through font-[Roboto] mt-[1px] md:mt-[1px] ml-[3px] md:ml-[2px]">
                    ₹{originalPrice}
                </span>
                <span className="text-[10px] md:text-[12px] text-green-600 font-semibold ml-1 md:ml-[2px]">
                    SAVE ₹{savings}
                </span>
            </div>

            {/* Pieces */}
            <div className="text-[12px] md:text-[13px] text-gray-600">{pieces}</div>

            {/* Product Name */}
            <div className="text-xs md:text-[13px] font-semibold text-gray-900 mb-1  line-clamp-2">{name}</div>

            {/* Variant */}
            <div className="text-[10px] text-blue-600 bg-blue-100 rounded-md p-[3px] max-w-[fit-content] truncate">
                {variant}
            </div>

            {/* Rating */}
            {/* <div className="flex items-center mb-4">
                <span className="text-sm text-yellow-400">★</span>
                <span className="text-xxs text-gray-900 ml-1">{rating}</span>
                <span className="text-xxs text-gray-500 ml-1">({reviews})</span>
            </div> */}

            {/* Add Button */}
            <CButton
                className="mt-1 md:mt-2 w-full h-10 bg-white text-primary 
                        border-2 font-bold py-2 rounded-lg 
                        md:hover:bg-background-btnHover md:hover:text-white
                        flex items-center justify-center top-[77px] right-1"
            >
                ADD
            </CButton>
        </div>
    );
};

export default ProductCard;
