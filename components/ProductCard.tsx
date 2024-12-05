import Link from 'next/link';
import React from 'react';

export default function ProductCard({
  discountPercent,
  image,
  name,
  id,
  // specialDiscount,
  // oldPrice,
  newPrice,
  color,
}: {
  discountPercent: number;
  image: string;
  name: string;
  id: number;
  // specialDiscount: string;
  // oldPrice: number;
  newPrice: number;
  color: string;
}) {
  console.log(discountPercent, image, name, newPrice, color);

  const totalPrice = newPrice - (newPrice * discountPercent) / 100;

  return (
    <div className="bg-white w-52 h-72 rounded-xl border overflow-hidden shadow-md">
      <Link href={`/product/${id}`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-cover grid justify-end bg-center bg-no-repeat h-3/5"
        >
          {color == 'Green' && discountPercent > 0 && (
            <div
              className={`grid place-content-center bg-${color} size-14 rounded-bl-xl px-2 py-1`}
            >
              <div className="text-center text-white font-poppins text-sm leading-4 font-bold">
                {discountPercent}% OFF
              </div>
            </div>
          )}
          {color == 'GoldenYellow' && (
            <div
              className={`grid place-content-center bg-red-500 size-14 rounded-bl-xl px-2 py-1`}
            >
              <div className="text-center text-white font-poppins text-sm leading-4 font-bold">
                Best deal
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="font-poppins grid content-center text-DeepGray text-[15px] font-medium px-4 border-t h-1/5">
        {name}
        {/* {specialDiscount && (
          <span className="text-Green font-semibold"> ({specialDiscount})</span>
        )} */}
      </div>

      <div className="flex items-center justify-between border-t mx-4 h-1/5">
        <div className="text-Green font-bold">₹{totalPrice}</div>
        {/* {oldPrice != newPrice && ( */}
        <div className="text-sm line-through text-Gray">₹{newPrice}</div>
        {/* )} */}
        <button className="text-Green rounded w-16 h-7 border border-Green hover:bg-Green hover:text-white transition duration-200">
          ADD
        </button>
      </div>
    </div>
  );
}
