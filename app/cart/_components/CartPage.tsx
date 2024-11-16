'use client';
import React, { useState } from 'react';
import CartTable from '../_components/CartTable';
import CartSummary from '../_components/CartSummary';
import { CartItem, CartSummary as CartSummaryType } from '../types/cart';
import '../../../app/globals.css';
import Navbar from '@/public/components/NavBar';

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Sample Product 1',
      price: 990,
      quantity: 1,
      imageUrl:
        'https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic1209.jpg',
      discount: 100,
    },
    {
      id: '2',
      name: 'Sample Product 2',
      price: 630,
      quantity: 1,
      imageUrl:
        'https://d3fgegizptfhv.cloudfront.net/9ec6ba5290735b1924916dc0912a24ef/productImages/small/1602251844_56ab07ffc90da87dda7f592b3a90e1e6.jpg',
      discount: 150,
    },
    {
      id: '3',
      name: 'Sample Product 3',
      price: 1600,
      quantity: 1,
      imageUrl: 'https://janet.lk/cdn/shop/files/Orange_c.png?v=1726040294',
      discount: 200,
    },
    {
      id: '4',
      name: 'Sample Product 4',
      price: 1450,
      quantity: 1,
      imageUrl:
        'https://essstr.blob.core.windows.net/essimg/350x/Small/Pic125933.jpg',
      discount: 200,
    },
    {
      id: '5',
      name: 'Sample Product 5',
      price: 1000,
      quantity: 1,
      imageUrl:
        'https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic124717_20240802172901.jpg',
      discount: 0,
    },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSummary = (): CartSummaryType => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const total = items.reduce(
      (sum, item) => sum + (item.price * item.quantity - item.discount),
      0,
    );
    const discount = items.reduce(
      (sum, item) => sum + item.discount * item.quantity,
      0,
    );

    return { itemCount, subtotal, total, discount };
  };

  const summary = calculateSummary();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="p-6  bg-gray-50  min-h-screen">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4CAF50]">
            Your Cart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white shadow-lg p-6 ">
              <CartTable
                items={items}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            </div>
            <div className="bg-gray-50 p-6 ">
              <CartSummary summary={summary} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
