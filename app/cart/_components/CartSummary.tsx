import React from 'react';
import { CartSummary as CartSummaryType } from '../types/cart';

interface CartSummaryProps {
  summary: CartSummaryType;
}

const CartSummary: React.FC<CartSummaryProps> = ({ summary }) => {
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
        <div className="flex justify-between">
          <span>Discount</span>
          <span>- Rs. {summary.discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>Rs. {summary.total.toFixed(2)}</span>
        </div>
      </div>

      <input
        type="text"
        placeholder="Cart Name"
        className="w-full border rounded-lg px-4 py-2 bg-white text-black"
      />
      <button className="w-full bg-[#4CAF50] text-white font-bold py-2 rounded-lg hover:bg-green-700">
        Save
      </button>
      <button className="w-full bg-[#FFD93D] text-white font-bold py-2 rounded-lg hover:bg-[#ff686b]">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
