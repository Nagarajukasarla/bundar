import React from "react";
import type { CategoryCardProps, ContainerProps } from "@/types/component";
import CategoryCard from "./CategoryCard";

interface CategorySectionProps extends ContainerProps {
    title: string;
    categories: CategoryCardProps[];
}

const CategorySection: React.FC<CategorySectionProps> = ({className, title, categories}) => {
    return (
        <div className={className}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="flex flex-wrap gap-4">
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </div>
    )
}

export default CategorySection