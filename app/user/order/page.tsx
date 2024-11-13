import React from 'react';

const UserOrder = () => {
  return (
    <div>
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full divide-y-2 divide-green-400 bg-green-100 text-sm my-3">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">Order Number</th>
            <th className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">Created Date</th>
            <th className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">Shipping Address</th>
            <th className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">Amount</th>
            <th className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">Shipping Method</th>
          </tr>
        </thead>
  
        <tbody className="divide-y divide-green-400">
          <tr className="odd:bg-gray-50">
            <td className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">K1001</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">24/05/2024</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Galigamuwa, Kegalle</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Rs. 2500</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Delivery</td>
          </tr>
       
  
      <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">K1001</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">24/05/2024</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Galigamuwa, Kegalle</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Rs. 2500</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Delivery</td>
      </tr>

      <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-5 font-medium text-left text-gray-900">K1001</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">24/05/2024</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Galigamuwa, Kegalle</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Rs. 2500</td>
            <td className="whitespace-nowrap px-4 py-5 text-left text-gray-700">Delivery</td>
      </tr>

    </tbody>
  </table>
</div>
  </div>
  );
};

export default UserOrder;
