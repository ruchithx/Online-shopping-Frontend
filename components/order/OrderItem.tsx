import React from 'react';
import Image from 'next/image';
const product = {
  id: 1,
  image: '/products/iphone images.jpeg', // replace with actual image path
  name: 'Apple Watch Series 4',
  category: 'Digital Product',
  price: '$690.00',
  quantity: 63,
};

export default function OrderItem() {
  return (
    <tr>
      <td className="px-4 py-4">
        <Image
          src={product.image}
          alt={product.name}
          width={48}
          height={48}
          className="rounded-lg object-cover"
        />
      </td>
      <td className="px-4 py-4">{product.name}</td>
      <td className="px-4 py-4">{product.category}</td>
      <td className="px-4 py-4">{product.price}</td>
      <td className="px-4 py-4">{product.quantity}</td>
      <td className="px-4 py-4">{product.price}</td>
    </tr>
  );
}
