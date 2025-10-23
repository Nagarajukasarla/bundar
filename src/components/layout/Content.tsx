import FeaturedWrapper from "@/components/feature/FeaturedWrapper";
import { products } from "@/constants/products";
import type { ContainerProps } from "@/types/component";
import React from "react";

interface ContentProps extends ContainerProps { }

const Content: React.FC<ContentProps> = ({ className }) => {
    return (
        <div className={className}>
            <FeaturedWrapper
                theme="kitchen"
                className="mt-2"
                title={
                    <div className="flex items-center font-semibold">
                        <p>Essentials in</p>&nbsp;
                        <p className="text-primary font-bold">Kitchen</p>
                    </div>
                }
                heroicTitle={
                    <div className="text-2xl font-bold">
                        <p>Fill Your Kitchen</p>
                        <p className="">with Flavor</p>
                    </div>
                }
                products={products} />
        </div>
    );
};

export default Content;
