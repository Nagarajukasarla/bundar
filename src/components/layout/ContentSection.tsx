import React from "react";
import Order from "@/components/feature/Order";
import CButton from "../core/CButton";
import type { ProfileMenuItemType } from "@/types/component";
import { AlignRight, ArrowRight } from "lucide-react";

interface OrderData {
    id: string;
    title: string;
    orderDateTime: string;
    price: string;
    status: "Delivered" | "Failed" | "Pending";
}

interface ContentSectionProps {
    selectedMenu: ProfileMenuItemType;
}

const ContentSection: React.FC<ContentSectionProps> = ({ selectedMenu }) => {
    // Sample data based on the provided image
    const orders: OrderData[] = [
        {
            id: "195291232867130",
            title: "Hotel Swagath Grand - Dhanturi Group of Hotel",
            orderDateTime: "Wed, Jan 8, 2025, 01:03 PM",
            price: "₹148",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
        {
            id: "1946523018437897",
            title: "Mehfil",
            orderDateTime: "Tue, Dec 31, 2024, 07:26 PM",
            price: "₹61",
            status: "Delivered",
        },
    ];

    const favourites = [
        {
            id: "fav1",
            title: "Kamadhenu Super Market",
        },
        {
            id: "fav2",
            title: "Vijay Super Market",
        },
        {
            id: "fav3",
            title: "Vasavi Super Market",
        },
        {
            id: "fav4",
            title: "Sai Super Market",
        },
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case "Orders":
                return (
                    <div className="p-4">
                        <h2 className="text-md font-semibold mb-4">Past Orders</h2>
                        {orders.map(order => (
                            <Order
                                key={order.id}
                                title={order.title}
                                orderDateTime={order.orderDateTime}
                                price={order.price}
                                status={order.status}
                                orderId={order.id}
                            />
                        ))}
                    </div>
                );
            case "Favourites":
                return (
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Favourites</h2>
                        <div className="space-y-4">
                            {favourites.map(fav => (
                                <div key={fav.id} className="flex items-center justify-between p-4 bg-white border-b">
                                    <div className="flex-1">
                                        <div className="text-sm font-[500]">{fav.title}</div>
                                    </div>
                                    <CButton className="flex-shrink-0 bg-primary text-white hover:bg-primary-dark">
                                        <ArrowRight className="w-5 h-5" />
                                    </CButton>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return <div className="p-4">No Items in your {selectedMenu} </div>;
        }
    };

    return <div className="flex-1 bg-white">{renderContent()}</div>;
};

export default ContentSection;
