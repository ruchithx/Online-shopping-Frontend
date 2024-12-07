import React, { useState } from 'react';
import { CartSummary as CartSummaryType } from '../types/cart';
import Pay from '@/components/Pay';

interface OrderItems {
  productId: number;
  quantity: number;
}
interface CartSummaryProps {
  summary: CartSummaryType;
  userId: string;
  orderItems: OrderItems[];
}

const CartSummary: React.FC<CartSummaryProps> = ({
  summary,
  userId,
  orderItems,
}) => {
  const [address, setAddress] = useState('');

  // const handleSaveAddress = () => {
  //   if (address.trim()) {
  //     setIsAddressSaved(true);
  //   } else {
  //     alert('Please enter a valid address.');
  //   }
  // };

  const paymentDetails = {
    items: 'FreshMart Items',
    fullAmount: summary.total.toFixed(2),
    currency: 'LKR',
    address: address,
    userId,
  };

  const order = [
    {
      productId: 1,
      quantity: 2,
    },
    {
      productId: 2,
      quantity: 4,
    },
  ];

  return (
    <div className="bg-green-100 p-6  shadow-md text-black text-sm space-y-4 ">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-black">Item Count</span>
          <span>{summary.itemCount}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {summary.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>Rs. 0.00</span>
        </div>
        {/* <div className="flex justify-between">
          <span>Discount</span>
          <span>- Rs. {summary.discount.toFixed(2)}</span>
        </div> */}
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>Rs. {summary.total.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between ml-1">
        <span>Your Address</span>
      </div>
      <input
        type="text"
        placeholder="Enter your address"
        className="w-full border rounded-lg px-4 py-2 bg-white text-black"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* <button
        className={`w-full text-white font-bold py-2 rounded-lg ${
          isAddressSaved
            ? 'bg-[#ff686b] hover:bg-[#ff686b]'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!isAddressSaved}
        onClick={handlePayment}
      >
        Proceed to Checkout
      </button> */}
      <Pay
        orderId="1"
        item={paymentDetails?.items}
        order={orderItems}
        amount={paymentDetails.fullAmount}
        currency={paymentDetails?.currency}
        address={paymentDetails?.address}
        userId={paymentDetails?.userId}
        first_name=""
        last_name=""
        email=""
        phone=""
        city=""
        country=""
        // orderItems={orderItems}
      />
    </div>
  );
};

export default CartSummary;
