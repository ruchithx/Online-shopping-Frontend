'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartTable from '../_components/CartTable';
import CartSummary from '../_components/CartSummary';
import { CartItem, CartSummary as CartSummaryType } from '../types/cart';
import '../../../app/globals.css';
import Navbar from '@/public/components/NavBar';

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/cart'); // Replace with your API URL
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cart items:', err);
        setError('Failed to fetch cart items.');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (itemId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemId === itemId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  };

  const removeItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
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
        <div className="p-6 bg-gray-50 min-h-screen">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4CAF50]">
            Your Cart
          </h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 bg-white shadow-lg p-6">
                <CartTable
                  items={items}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              </div>
              <div className="bg-gray-50 p-6">
                <CartSummary summary={summary} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
