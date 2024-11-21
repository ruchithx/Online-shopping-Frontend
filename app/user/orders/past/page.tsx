import React from 'react';

export default function PastOrders() {
  return (
    <div className="flex flex-col md:flex-row">
      <main className="flex-1 bg-white rounded-lg p-4 md:ml-4 text-center">
        <div className="overflow-x-auto">
          <div className="pb-4">
            <div className="grid grid-cols-5 items-center bg-green-100 px-4 py-4 rounded-lg shadow-sm ">
              <p className="text-gray-800">Order Number</p>
              <p className="text-gray-800">Created Date</p>
              <p className="text-gray-800">Shipping Address </p>
              <p className="text-gray-800">Amount</p>
              <p className="text-gray-800">Status</p>
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
                <p>{order.status}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
