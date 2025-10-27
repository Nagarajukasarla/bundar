import React from 'react';
import CButton from '@/components/core/CButton';

interface OrderProps {
    title: string;
    orderDateTime: string;
    price: string;
    status: 'Delivered' | 'Failed' | 'Pending';
    orderId: string;
}

const Order: React.FC<OrderProps> = ({
    title,
    orderDateTime,
    price,
    status,
    orderId,
}) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Delivered':
                return 'text-green-600';
            case 'Failed':
                return 'text-red-600';
            case 'Pending':
                return 'text-yellow-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="flex flex-col border rounded-lg p-4 mb-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-2">
                <div className="">
                    <p className="font-semibold text-lg font-[Sans-serif]">{price}</p>
                    <p className={`text-xs font-medium ${getStatusColor(status)}`}>
                        {status}
                    </p>
                </div>
                <div className="flex items-center">
                    <h3 className="font-semibold text-sm">
                        ORDER #{orderId} | {orderDateTime}
                    </h3>
                </div>
            </div>
            <CButton className="bg-transparent text-primary border-none p-0 self-end">
                <p className="text-xs">VIEW DETAILS</p>
            </CButton>
        </div>
    );
};

export default Order;
