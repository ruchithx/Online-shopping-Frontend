'use client';
import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';

export default function CategoryProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { category: 'Vegetables' },
    { category: 'Foods' },
    { category: 'Meat' },
    { category: 'Fish' },
    { category: 'Homeware' },
    { category: 'Books' },
    { category: 'Bakery Products' },
    { category: 'Electronic Devices' },
    { category: 'Beauty' },
    { category: 'Kids' },
    { category: 'Pets' },
  ];

  const products = [
    {
      name: 'Beetroot',
      price: 150,
      imageUrl: '/betroot.jpeg',
      category: 'Vegetables',
      stock: 10,
    },
    {
      name: 'Carrot',
      price: 50,
      imageUrl: '/Carrot Sub1.jpg',
      category: 'Vegetables',
      stock: 0,
    },

    {
      name: 'Shampoo',
      price: 300,
      imageUrl: '/Shampoo.jpeg',
      category: 'Beauty',
      stock: 0,
    },
    {
      name: 'Baby Soap',
      price: 300,
      imageUrl: '/Soap.jpeg',
      category: 'Beauty',
      stock: 10,
    },

    {
      name: 'Cabbage',
      price: 20,
      imageUrl: '/Cabbage.jpeg',
      category: 'Vegetables',
      stock: 10,
    },
    {
      name: 'Onion',
      price: 50000,
      imageUrl: '/onion.jpg',
      category: 'Vegetables',
      stock: 10,
    },
    {
      name: 'Orange',
      price: 200,
      imageUrl: '/Orange.jpeg',
      category: 'Foods',
      stock: 10,
    },
    {
      name: 'Potato',
      price: 300,
      imageUrl: '/Potato.jpeg',
      category: 'Vegetables',
      stock: 0,
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <div className="mt-12 flex flex-row">
        <div className="w-1/6 flex flex-col items-center shadow-md">
          <div className="text-xl text-[#1A202C] font-sm">Shop by Category</div>
          <div className="text-sm text-[#1A202C] mt-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center border-b border-gray-300 py-4  cursor-pointer ${
                  selectedCategory === category.category
                    ? 'text-[#4CAF50] '
                    : ''
                }`}
                onClick={() => setSelectedCategory(category.category)}
              >
                <div className="flex-1">{category.category}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600 ml-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/6 grid grid-cols-4 gap-12 p-8 shadow-md ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                productId={'123'}
                key={index}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                stock={product.stock}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-3">
              No products available for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
