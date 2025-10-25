
/**
 * Option for select component
 */
export type Option = {
    /**
     * Key of the option
     */
    key: string;
    /**
     * Label of the option
     */
    label: string;
    /**
     * Value of the option
     */
    value: string;
    /**
     * Complete object associated with the option
     */
    object?: any;
}

export interface ContainerProps {
    className?: string;
}

export interface ProductCardProps extends ContainerProps {
    /**
     * Whether the product is vegetarian
     */
    veg: boolean;
    /**
     * URL of the product image
     */
    image: string;
    /**
     * Original price of the product
     */
    originalPrice: number | string;
    /**
     * Discounted price of the product
     */
    discountedPrice: number | string;
    /**
     * Amount saved in the discount
     */
    savings: number | string;
    /**
     * Number of pieces or weight
     */
    pieces: string;
    /**
     * Name of the product
     */
    name: string;
    /**
     * Variant of the product
     */
    variant: string;
    /**
     * Product rating (optional)
     */
    rating?: number;
    /**
     * Number of reviews (optional)
     */
    reviews?: string;
}

export type FeaturedWrapperTheme = "kitchen" | "snacks" | "bodycare" | "household" | "special";