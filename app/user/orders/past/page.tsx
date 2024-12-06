'use client';
import Loader from '@/components/Loader';
import axiosInstance from '@/lib/auth/axiosInstance';
import { Order } from '@/Type/OrderTypes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PastOrders() {
  const { data: session } = useSession();
  const [pastOrders, setPastOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPastOrders = async () => {
      setLoading(true);
      try {
        const ordersData = await axiosInstance.get(
          `http://localhost:8081/api/v1/orders/past?userId=${session?.user?.id}`,
        );
        setPastOrders(ordersData.data);
        console.log(ordersData.data);
      } catch (error: any) {
        console.error(error);
        console.log('Error', error);
      }
    };
    fetchPastOrders();
    setLoading(false);
  }, []);

  if (loading || !pastOrders) {
    return <Loader />;
  }

  if (pastOrders?.length === 0) {
    return (
      <div
        className="bg-red-100 border grid place-content-center text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">No Orders Found!</strong>
        <span className="block sm:inline">You have no past orders.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <main className="flex-1 bg-white rounded-lg p-4 md:ml-4 text-center">
        <div className="overflow-x-auto">
          <div className="pb-4">
            <div className="grid grid-cols-6 items-center bg-green-100 px-4 py-4 rounded-lg shadow-sm ">
              <p className="text-gray-800">Order Number</p>
              <p className="text-gray-800">Created Date</p>
              <p className="text-gray-800">Shipping Address </p>
              <p className="text-gray-800">Amount</p>
              <p className="text-gray-800">Status</p>
              <p className="text-gray-800">Details</p>
            </div>
          </div>
          <div className="space-y-4">
            {pastOrders?.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-6 items-center text-gray-800  bg-slate-100 px-4 py-4 rounded-lg shadow-sm font-medium"
              >
                <p>{order.id}</p>
                <p>{order.createdAt.substring(0, 10)}</p>
                <p>{order.address}</p>
                <p>{order.totalPrice}</p>
                <p>{order.status}</p>
                <div className="flex items-center space-x-4">
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-white bg-Green px-4  rounded-lg shadow hover:bg-HoverGreen"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
