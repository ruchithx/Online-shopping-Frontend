import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
  productId: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  stock,
  productId,
}) => {
  return (
    <div className="max-w-xs mx-auto h-72 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full h-36  flex items-center justify-center">
        <Link href={`/product/${productId}`}>
          <Image
            src={imageUrl}
            alt={name}
            width={500}
            height={500}
            className="flex object-contain h-36 rounded-xl"
          />
        </Link>
      </div>

      <Link href={`/product/${productId}`}>
        <div className="px-4 py-2 text-center">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-[#4CAF50] text-lg font-bold mt-2">Rs {price}</p>
        </div>
      </Link>
      <div className="px-4 py-2 ">
        <button
          className={`w-full flex items-center justify-center  text-gray-700 font-medium py-2 px-2 rounded-full border border-gray-300 shadow-sm  ${
            stock > 0
              ? 'bg-white border border-gray-300 transition-transform transform hover:scale-105 hover:bg-[#4CAF50]'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={stock === 0}
        >
          {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
