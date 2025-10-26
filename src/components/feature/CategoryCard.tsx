import React from "react";
import type { CategoryCardProps } from "@/types/component";
import { cn } from "@/utils/tailwindMerge";


const CategoryCard: React.FC<CategoryCardProps> = ({ className, image, name }) => {
    return (
        <div className={cn("flex flex-col items-center border border-gray-700 p-2 rounded w-[105px] md:w-[120px]", className)}>
            <div className="mb-2 bg-gray-200 p-2 rounded h-[100px] w-[100px] md:h-[120px] md:w-[120px]">
                <img src={image} className="w-full h-full rounded object-cover" alt={name} />
            </div>
            <p className="text-xs md:text-[13px] font-semibold text-gray-900 overflow-wrap break-words text-center">{name}</p>
        </div>
    )
}

export default CategoryCard;
