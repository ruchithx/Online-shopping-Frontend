'use client';
import React, { useEffect, useState } from 'react';

import { BiFilterAlt } from 'react-icons/bi';
import OrdersAdmin from './OrdersAdmin';
import { Order } from '@/Type/OrderTypes';
import axios from 'axios';
import Loader from '../Loader';

export default function OrderViewForAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // State for sorting order

  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      const response = await axios.get(
        'http://localhost:8081/api/v1/admin/orders',
      );
      setOrders(response.data);
    };
    fetchOrders();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!loading && !orders) {
    return (
      <div
        className="bg-red-100 border grid place-content-center text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">No Orders Found!</strong>
        <span className="block sm:inline">There are no orders.</span>
      </div>
    );
  }

  // Function to sort orders by date
  const sortedOrders = [...orders]
    .filter((order) => order.status === filter || filter === '')
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === 'asc'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-8 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Order Lists</h1>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 flex items-center gap-2">
            <BiFilterAlt />
            Filter By
          </button>

          <select
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-600"
            onChange={(e) => setFilter(e.target.value)} // Use onChange here
            value={filter}
          >
            <option value="">Order Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="On Hold">On Hold</option>
          </select>

          <button
            onClick={() => setFilter('')}
            className="px-4 py-2 bg-red-200 rounded-md text-red-600"
          >
            Reset Filter
          </button>

          {/* Sort By Date */}
          <div>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-600"
            >
              Sort By Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
          </div>
        </div>

        {/* Order Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-white ">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">User Id</th>
                <th className="px-4 py-2 text-left text-gray-600">Address</th>
                <th className="px-4 py-2 text-left text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Total Price
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Details</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order) => (
                <OrdersAdmin orderData={order} key={order.id} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
