// components/ProductPage.tsx
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../../components/NavBar';

const CategoryProducts: React.FC = () => {
  return (
    <div className="flex flex-col  bg-gray-50 min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-left mb-4">Products</h1>
        <div className="flex items-center w-full mb-8">
          <div className="flex items-center w-full max-w-md mx-4 border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder="Search product name"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 text-gray-600">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl rounded-lg  ms-48 p-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center md:w-1/2">
          <div className="border-4 border-green-500 p-4 relative">
            <img src="/carrot.png" alt="Carrots" className="w-full max-w-sm" />
          </div>

          <div className="flex space-x-4 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-green-500 p-1 rounded">
                <img
                  src={`/Carrot Sub${i}.png`}
                  alt={`Thumbnail ${i}`}
                  className="w-16 h-16 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Carrots</h2>
          <p className="text-gray-500">FreshMart#915007</p>
          <p className="text-xl font-semibold text-gray-800">Rs. 190</p>

          <div className="flex items-center space-x-2">
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-l-md">
              -
            </button>
            <input
              type="text"
              value="0.5"
              className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
              readOnly
            />
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-r-md">
              +
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md ml-4">
              Add to cart
            </button>
          </div>

          {/* Tags */}
          <div>
            <p className="text-gray-500 font-semibold">Tags :</p>
            <p className="text-green-600">
              Vegetables, Upcountry vegetables, Roots
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 font-semibold">Share :</p>
            <FaFacebook className="text-gray-700 cursor-pointer" size={20} />
            <FaWhatsapp className="text-gray-700 cursor-pointer" size={20} />
            <FaEnvelope className="text-gray-700 cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
