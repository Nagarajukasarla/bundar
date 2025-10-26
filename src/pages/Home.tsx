import FeaturedWrapper from "@/components/feature/FeaturedWrapper";
import { categories } from "@/constants/categories";
import { products } from "@/constants/products";
import React from "react";
import CategorySection from "@/components/feature/CategorySection";

const Home: React.FC = () => {
    return (
        <div>
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
                products={products}
            />
            <FeaturedWrapper
                theme="household"
                className="mt-10"
                title={
                    <div className="flex items-center font-semibold">
                        <p>Your </p>&nbsp;
                        <p className="text-primary font-bold">Home</p>&nbsp;
                        <p>Needs</p>
                    </div>
                }
                heroicTitle={
                    <div className="text-2xl font-bold">
                        <p>Fresh Finds for </p>
                        <p className="">Heartfelt Living</p>
                    </div>
                }
                products={products}
            />
            <FeaturedWrapper
                theme="bodycare"
                className="mt-10"
                title={
                    <div className="flex items-center font-semibold">
                        <p>Self Care & </p>&nbsp;
                        <p className="text-primary font-bold">Beauty</p>
                    </div>
                }
                heroicTitle={
                    <div className="text-2xl font-bold">
                        <p>Embrace Your </p>
                        <p className="">Radiance Daily</p>
                    </div>
                }
                products={products}
            />
            <FeaturedWrapper
                theme="snacks"
                className="mt-10"
                title={
                    <div className="flex items-center font-semibold">
                        <p>Time For </p>&nbsp;
                        <p className="text-primary font-bold">Snacks</p>
                    </div>
                }
                heroicTitle={
                    <div className="text-2xl font-bold">
                        <p>Fuel your Cravings </p>
                        <p className="">with Crunchy</p>
                    </div>
                }
                products={products}
            />
            <CategorySection
                className="mt-8"
                title="Grocery & Kitchen"
                categories={categories.grocery}
            />
            <CategorySection
                className="mt-8"
                title="Snacks"
                categories={categories.snacks}
            />
            <CategorySection
                className="mt-8"
                title="Self Care"
                categories={categories.selfCare}
            />
            <CategorySection
                className="mt-8"
                title="Household"
                categories={categories.household}
            />
        </div>
    );
};

export default Home;
