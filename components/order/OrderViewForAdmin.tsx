'use client';
import React, { useEffect, useState } from 'react';

import { BiFilterAlt } from 'react-icons/bi';
import OrdersAdmin from './OrdersAdmin';
import { Order } from '@/Type/OrderTypes';
import axios from 'axios';
import Loader from '../Loader';

export default function OrderViewForAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(
        'http://localhost:8080/api/v1/admin/orders',
      );
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  if (orders.length == 0) {
    return <Loader />;
  }

  return (
    <div className=" flex flex-col lg:flex-row min-h-screen">
      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-8 bg-gray-100 ">
        <h1 className="text-2xl font-semibold mb-4">Order Lists</h1>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 flex items-center gap-2">
            <BiFilterAlt />
            Filter By
          </button>

          <button className="text-gray-600">
            {/* <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-600"
              placeholderText="Pick a date"
            /> */}
          </button>

          <select className="px-4 py-2 bg-gray-200 rounded-md text-gray-600">
            <option>Order Type</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Groceries</option>
            <option>Furniture</option>
          </select>
          <select className="px-4 py-2 bg-gray-200 rounded-md text-gray-600">
            <option>Order Status</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Rejected</option>
            <option>On Hold</option>
          </select>
          <button className="px-4 py-2 bg-red-200 rounded-md text-red-600">
            Reset Filter
          </button>
        </div>

        {/* Order Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-white ">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Address</th>
                <th className="px-4 py-2 text-left text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Total Price
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrdersAdmin orderData={order} key={order.id} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-gray-600">
          <span>Showing 1-9 of 78</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
            <button className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
}
