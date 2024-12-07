'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartTable from '../_components/CartTable';
import { CartItem } from '../types/cart';
import '../../../app/globals.css';
import UnderNavbar from '@/app/product/components/Undernavbar';
import CartSummary from '../_components/CartSummary';
import { CartSummary as CartSummaryType } from '../types/cart';
import Footer from '../../../components/layouts/Footer';
import { useSession } from 'next-auth/react';
import Loader from '@/components/Loader';
// import Navbar from '@/app/product/components/NavBar';
// import UnderNavbar from '@/app/product/components/Undernavbar';

interface OrderItems {
  productId: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession(); // Correctly typed from next-auth
  console.log(session?.user?.id);
  const userId = session?.user?.id;
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/v1/cart/${userId}`,
        );

        if (response.data) {
          setItems(response.data);
          console.log(response.data);
          setLoading(false);

          const orderItems = response.data.map((item: OrderItems) => ({
            productId: item.productId,
            quantity: item.quantity,
          }));
          setOrderItems(orderItems);
        }
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

      await axios.patch(
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
  // const removeAllItems = async (userId: string) => {
  //   try {
  //     await axios.delete(
  //       `http://localhost:8082/api/v1/cart/delete/all/${userId}`,
  //     );
  //     setItems([]); // Clear the cart items locally after successful deletion
  //     console.log(`All items for user ${userId} deleted successfully.`);
  //   } catch (err) {
  //     console.error('Error deleting all items:', err);
  //     setError('Failed to remove all items from cart.');
  //   }
  // };

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
        <div className="p-6 min-h-screen">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4CAF50]">
            My Cart
          </h2>
          {loading ? (
            <Loader />
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2  shadow-lg p-6">
                <CartTable
                  items={items}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              </div>
              <div className="p-6">
                <CartSummary
                  summary={summary}
                  userId={userId!}
                  orderItems={orderItems}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
