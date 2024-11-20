import Image from 'next/image';
import React from 'react';

const Orders = () => {
  const products = [
    {
      id: 1,
      image: '/products/iphone images.jpeg', // replace with actual image path
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      quantity: 63,
    },
    {
      id: 2,
      image: '/products/laptop.jpeg',
      name: 'Microsoft Headsquare',
      category: 'Digital Product',
      price: '$190.00',
      quantity: 13,
    },

    {
      id: 3,
      image: '/products/dresss.jpg',
      name: "Women's Dress",
      category: 'Fashion',
      price: '$640.00',
      quantity: 635,
    },
  ];

  return (
    <div className="mx-24 lg:flex-row p-4 lg:p-8 gap-8">
      {/* Product Table */}
      <div className="flex-1 bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-gray-700 border">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Piece</th>
              <th className="px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-white border-b">
                <td className="px-4 py-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  {/* <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" /> */}
                </td>
                <td className="px-4 py-4">{product.name}</td>
                <td className="px-4 py-4">{product.category}</td>
                <td className="px-4 py-4">{product.price}</td>
                <td className="px-4 py-4">{product.quantity}</td>
                <td className="px-4 py-4">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 p-4 pt-12">
        {/* Left Section */}
        <div>
          <div className="grid grid-cols-2 justify-between space-y-2 mb-4 ">
            <h3 className="text-gray-600 hover:text-green-600">Address</h3>
            <p className="text-gray-600 hover:text-green-600">
              Suite 456 251 Franecki Hollow, Zacharyfurt, ME 68685-3633,
            </p>
          </div>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="flex justify-between space-y-2 mb-4">
            <h3 className="text-gray-600 hover:text-green-600">Status</h3>
            <p className="text-gray-600 hover:text-green-600">Shipped</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex justify-between space-y-2 mb-4">
            <h3 className="text-gray-600 hover:text-green-600">
              Product total
            </h3>
            <p className="text-gray-600 hover:text-green-600">$124.50</p>
          </div>
          <div className="border-b border-gray-300 mb-4 "></div>
          <div className="flex justify-between mb-4 space-y-2 ">
            <h3 className="text-gray-600 hover:text-green-600">Delivery fee</h3>
            <p className="text-gray-600 hover:text-green-600">Free</p>
          </div>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="flex justify-between space-y-2">
            <h3 className="text-gray-600 hover:text-green-600">Total</h3>
            <p className="text-gray-600 hover:text-green-600 font-semibold">
              $112.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
