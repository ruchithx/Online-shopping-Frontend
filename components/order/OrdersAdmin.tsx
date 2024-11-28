import { Order } from '@/Type/OrderTypes';
import React from 'react';

export default function OrdersAdmin({ orderData }: { orderData: Order }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      case 'On Hold':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <tr className="border-b">
      <td className="px-4 py-4">{orderData.id}</td>
      <td className="px-4 py-4">{orderData.userId}</td>
      <td className="px-4 py-4">{orderData.address}</td>
      <td className="px-4 py-4">{orderData.createdAt.substring(0, 10)}</td>
      <td className="px-4 py-4">{orderData.totalPrice}</td>
      <td className="px-4 py-4">
        <span
          className={`flex items-center justify-center w-24 h-8 rounded-md text-sm font-medium ${getStatusColor(orderData.status)}`}
        >
          {orderData.status}
        </span>
      </td>
    </tr>
  );
}
