'use client';
import React from 'react';
import OrderItem from './OrderItem';
import { Order } from '@/Type/OrderTypes';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { useParams } from 'next/navigation';
import axiosInstance from '@/lib/auth/axiosInstance';

export default function OrderComponent() {
  const params = useParams();
  const id = params.id;

  const [order, setOrder] = useState<Order>();
  const [roughTotal, setRoughTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    // Fetch data from API
    const fetchOrders = async () => {
      const response = await axiosInstance.get(
        'http://localhost:8081/api/v1/orders/' + id,
      );
      setOrder(response.data);
    };

    fetchOrders();
  }, [id]);

  useEffect(() => {
    if (order) {
      let total = 0;
      let discount = 0;
      order.orderItems.forEach((orderItem) => {
        total += orderItem.product?.productPrice * orderItem.quantity;
        discount +=
          (orderItem.product?.productPrice *
            orderItem.quantity *
            orderItem.product?.discount) /
          100;
      });
      setRoughTotal(total);
      setDiscount(discount);
    }
  }, [order]);

  if (order == null) {
    return <Loader />;
  }

  return (
    <div className="mx-24 lg:flex-row p-4 lg:p-8 gap-8">
      {/* Product Table */}

      <div className="flex-1 bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-gray-700 border">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Piece</th>
              <th className="px-4 py-2 text-left">Discount(%)</th>
              <th className="px-4 py-2 text-left">Total (with discount)</th>
            </tr>
          </thead>

          <tbody>
            {order.orderItems.map((orderItem) => (
              <OrderItem
                key={orderItem.id}
                product={orderItem.product}
                quantity={orderItem.quantity}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 p-4 pt-12">
        {/* Left Section */}
        <div>
          <div className="grid grid-cols-2 justify-between  mb-4  ">
            <h3 className="text-gray-600 ">Address</h3>
            <p className="text-gray-600 hover:text-green-600  text-right">
              {order?.address}
            </p>
          </div>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="flex justify-between  mb-4">
            <h3 className="text-gray-600 ">Status</h3>
            <p className="text-gray-600 hover:text-green-600">
              {order?.status}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex justify-between space-y-2 mb-4">
            <h3 className="text-gray-600 ">Product total</h3>
            <p className="text-gray-600 hover:text-green-600">{roughTotal}</p>
          </div>
          <div className="border-b border-gray-300 mb-4 "></div>
          <div className="flex justify-between mb-4 space-y-2 ">
            <h3 className="text-gray-600 ">Total Discount</h3>
            <p className="text-gray-600 hover:text-green-600">{discount}</p>
          </div>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="flex justify-between space-y-2">
            <h3 className="text-gray-600 ">Total</h3>
            <p className="text-gray-600 hover:text-green-600 font-semibold">
              Rs:{roughTotal - discount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
