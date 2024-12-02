'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartTable from '../_components/CartTable';
import { CartItem } from '../types/cart';
import '../../../app/globals.css';
import UnderNavbar from '@/app/product/components/Undernavbar';
import CartSummary from '../_components/CartSummary';
import { CartSummary as CartSummaryType } from '../types/cart';
// import Navbar from '@/app/product/components/NavBar';
// import UnderNavbar from '@/app/product/components/Undernavbar';

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const userId = 1;
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/v1/cart/${userId}`,
        );
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching cart items:', err);
        setError('Failed to fetch cart items.');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userId]);

  const updateQuantity = async (cartId: number, quantity: number) => {
    try {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(1, quantity) }
            : item,
        ),
      );

      await axios.put(
        `http://localhost:8082/api/v1/cart/update/${cartId}`,
        null,
        {
          params: { quantity: Math.max(1, quantity) },
        },
      );
      console.log('Updated quantity:', quantity);
    } catch (err) {
      console.error('Error updating quantity:', err);
      setError('Failed to update item quantity.');
    }
  };

  const removeItem = async (cartId: number) => {
    try {
      await axios.delete(`http://localhost:8082/api/v1/cart/delete/${cartId}`);

      setItems((prevItems) =>
        prevItems.filter((item) => item.cartId !== cartId),
      );
    } catch (err) {
      console.error('Error deleting item:', err);
      setError('Failed to remove item from cart.');
    }
  };

  const calculateSummary = (): CartSummaryType => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const discount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return { itemCount, subtotal, total, discount };
  };

  const summary = calculateSummary();

  return (
    <>
      {/* <Navbar /> */}
      <UnderNavbar />
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
