import React from 'react';
import { CartItem } from '../types/cart';

interface CartTableProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemove: (itemId: number) => void;
}

const CartTable: React.FC<CartTableProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="overflow-x-auto flex ">
      <table className="w-full  text-sm ">
        <thead className="bg-[#4caf50] p-4 text-[#f4f4f9] ">
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Discount</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-black justify-items-center ">
          {items.map((item) => {
            const totalAfterDiscount =
              item.price * item.quantity - item.discount * item.quantity;
            return (
              <tr key={item.itemId} className="border-b">
                <td className=" flex items-center transform translate-y-1  ">
                  <img
                    src={item.imageUrl}
                    className="w-12 h-12 object-cover rounded-lg m-3 "
                  />
                  <span>{item.productName}</span>
                </td>
                <td className="p-2">Rs. {item.price.toFixed(2)}</td>
                <td className="p-2 flex items-center   transform -translate-y-5">
                  <button
                    onClick={() =>
                      onUpdateQuantity(
                        item.itemId,
                        Math.max(1, item.quantity - 1),
                      )
                    }
                    className="bg-[#4caf50] px-3 py-1 rounded hover:bg-green-600"
                  >
                    -
                  </button>
                  <input
                    value={item.quantity}
                    onChange={(e) =>
                      onUpdateQuantity(item.itemId, parseInt(e.target.value))
                    }
                    className="w-8 text-center bg-green-100"
                  />
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.itemId, item.quantity + 1)
                    }
                    className="bg-[#4caf50] px-3 py-1 rounded hover:bg-green-700"
                  >
                    +
                  </button>
                </td>
                <td className="p-4 font-bold text-[#4caf50]  ">
                  Rs. {item.discount.toFixed(2)}
                </td>
                <td className="p-4 font-semibold ">
                  Rs. {totalAfterDiscount.toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => onRemove(item.itemId)}
                    className=" text-[#ff686b] ml-10 rounded hover:text-red-600 font-bold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
