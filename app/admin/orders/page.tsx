'use client';

import { VscCompass } from 'react-icons/vsc';
import { BsGrid } from 'react-icons/bs';
import { BsListCheck } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoPowerSharp } from 'react-icons/io5';
import { BiFilterAlt } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';

const Orders = () => {

  const orders = [
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed',
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Processing',
    },
    {
      id: '00003',
      name: 'Darrell Caldwell',
      address: '8587 Frida Ports',
      date: '23 Nov 2019',
      type: 'Medicine',
      status: 'Rejected',
    },
    {
      id: '00004',
      name: 'Gilbert Johnston',
      address: '768 Destiny Lake Suite 600',
      date: '05 Feb 2019',
      type: 'Mobile',
      status: 'Completed',
    },
    {
      id: '00005',
      name: 'Alan Cain',
      address: '042 Mylene Throughway',
      date: '29 Jul 2019',
      type: 'Watch',
      status: 'Processing',
    },
    {
      id: '00006',
      name: 'Alfred Murray',
      address: '543 Weinman Mountain',
      date: '15 Aug 2019',
      type: 'Medicine',
      status: 'Completed',
    },
    {
      id: '00007',
      name: 'Maggie Sullivan',
      address: 'New Scottieberg',
      date: '21 Dec 2019',
      type: 'Watch',
      status: 'Processing',
    },
    {
      id: '00008',
      name: 'Rosie Todd',
      address: 'New Jon',
      date: '30 Apr 2019',
      type: 'Medicine',
      status: 'On Hold',
    },
    {
      id: '00009',
      name: 'Dollie Hines',
      address: '124 Lyla Forge Suite 975',
      date: '09 Jan 2019',
      type: 'Book',
      status: 'Completed',
    },
  ];

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

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className=" flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="p-12 w-full lg:w-2/12 bg-white">
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <VscCompass className="mr-3" /> Dashboard
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <BsGrid className="mr-3" /> Products
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <BsListCheck className="mr-3" /> Order Lists
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <FaRegHeart className="mr-3" /> Favorites
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <HiOutlineChatAlt2 className="mr-3" /> Inbox
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <AiOutlineTeam className="mr-3" /> Team
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-green-600 hover:text-white cursor-pointer">
            <IoPowerSharp className="mr-3" /> Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-8 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Order Lists</h1>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded-md text-gray-600 flex items-center gap-2">
            <BiFilterAlt />
            Filter By
          </button>

          <button className="text-gray-600">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-600"
              placeholderText="Pick a date"
            />
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
                <th className="px-4 py-2 text-left text-gray-600">Type</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-4 py-4">{order.id}</td>
                  <td className="px-4 py-4">{order.name}</td>
                  <td className="px-4 py-4">{order.address}</td>
                  <td className="px-4 py-4">{order.date}</td>
                  <td className="px-4 py-4">{order.type}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center justify-center w-24 h-8 rounded-md text-sm font-medium ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
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

};

export default Orders;
