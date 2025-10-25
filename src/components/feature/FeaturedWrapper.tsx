import type { ContainerProps, FeaturedWrapperTheme, ProductCardProps } from "@/types/component";
import React from "react";
import CButton from "@/components/core/CButton";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "@/components/feature/ProductCard";
import { cn } from "@/utils/tailwindMerge";

interface FeaturedWrapperProps extends ContainerProps {
    theme?: FeaturedWrapperTheme;
    title: React.ReactNode;
    heroicTitle: React.ReactNode;
    products: ProductCardProps[];
}

const themeClasses: Record<FeaturedWrapperTheme, string> = {
    kitchen: "md:bg-kitchen",
    snacks: "md:bg-snacks",
    bodycare: "md:bg-bodycare",
    household: "md:bg-household",
    special: "md:bg-special",
};

const FeaturedWrapper: React.FC<FeaturedWrapperProps> = ({ className, title, heroicTitle, products, theme }) => {
    return (
        <div className={className}>
            <div className={cn("flex flex-col md:p-4", theme ? themeClasses[theme] : "", className)}>
                <div className="flex justify-between items-center mb-2 pr-2 md:pr-0 md:mb-0 ">
                    {title}
                    <CButton className="md:hidden text-primary font-semibold bg-white">
                        <div className="flex items-center gap-2">
                            <p className="text-xs ">View All</p>
                            <ArrowRightIcon className="w-4 h-4" />
                        </div>
                    </CButton>
                </div>
                <div className="flex items-center justify-between">
                    <div className="hidden md:block flex flex-wrap justify-center items-center mr-2">
                        {heroicTitle}
                        <CButton className="mt-2 text-white font-semibold">
                            <div className="flex items-center">
                                <p className="text-xs font-semibold">View All</p>
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </CButton>
                    </div>

                    {/* Horizontal Scroll */}
                    {/* Performance: For many items, add React.memo or virtual scrolling (e.g., react-window). */}
                    <div className="flex overflow-x-scroll px-2 md:px-0 ">
                        <div className="flex">
                            {products.map((product, index) => (
                                <ProductCard key={index} className="ml-2 mr-2" {...product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedWrapper;
