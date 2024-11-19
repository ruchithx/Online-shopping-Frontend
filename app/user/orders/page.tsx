import React from 'react';

export default function PastOrders() {
  return (
    <div className="flex flex-col md:flex-row md:p-4 lg:p-16 md:mx-24">
      {/* Sidebar */}
      <aside className="md:w-1/6 w-full p-4 bg-white shadow-md rounded-lg mb-4 md:mb-0">
        <div className="space-y-4">
          <button className="text-left w-full">
            <div className="text-lg font-semibold text-gray-700">
              Manage My Account
            </div>
          </button>
          <ul className="text-gray-600">
            <li className=" pl-4 cursor-pointer hover:text-green-600">
              My Profile
            </li>
            <li className="pl-4 cursor-pointer hover:text-green-600">
              Change Password
            </li>
          </ul>

          <button className="text-left w-full">
            <div className="text-lg font-semibold text-gray-700">My Orders</div>
          </button>
          <ul className="text-gray-600">
            <li className="pl-4 cursor-pointer hover:text-green-600">
              Past Orders
            </li>
            <li className="pl-4 cursor-pointer hover:text-green-600">
              Track My Orders
            </li>
          </ul>

          <button className="text-left w-full">
            <div className="text-lg font-semibold text-gray-700">
              My Wishlist
            </div>
          </button>
        </div>
      </aside>

      <main className="flex-1 bg-white shadow-md rounded-lg p-4 md:ml-4 text-center">
        <div className="overflow-x-auto">
          <div className="pb-4">
            <div className="grid grid-cols-5 items-center bg-green-100 px-4 py-4 rounded-lg shadow-sm ">
              <p className="text-gray-800">Order Number</p>
              <p className="text-gray-800">Created Date</p>
              <p className="text-gray-800">Shipping Address </p>
              <p className="text-gray-800">Amount</p>
              <p className="text-gray-800"></p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 'K1001',
                date: '2024/10/25',
                address: '6 A, Thihagoda, Matara.',
                amount: 'Rs.2500.00',
                status: 'Delivery',
              },
              {
                id: 'K1002',
                date: '2024/10/27',
                address: '6 A, Thihagoda, Matara.',
                amount: 'Rs.3500.00',
                status: 'Delivery',
              },
              {
                id: 'K1003',
                date: '2024/10/30',
                address: '6 A, Thihagoda, Matara.',
                amount: 'Rs.1500.00',
                status: 'Delivery',
              },
            ].map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-5 items-center text-gray-800  bg-slate-100 px-4 py-4 rounded-lg shadow-sm font-medium"
              >
                <p>{order.id}</p>
                <p>{order.date}</p>
                <p>{order.address}</p>
                <p>{order.amount}</p>
                <div className="flex items-center space-x-4">
                  <button className="text-white bg-green-500 px-4  rounded-lg shadow hover:bg-green-600">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
