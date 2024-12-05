import React from 'react';
import { productType } from '@/Type/Product_Type';

export default function OrderItem({
  product,
  quantity,
}: {
  product: productType;
  quantity: number;
}) {
  return product ? (
    <tr>
      <td className="px-4 py-4">
        {product?.mediaUrl ? (
          <div
            className="size-20 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${product.mediaUrl})` }}
          ></div>
        ) : (
          <div className="size-20 bg-gray-200 rounded-lg"></div>
        )}
      </td>
      <td className="px-4 py-4">{product?.productName}</td>
      <td className="px-4 py-4">{product?.productPrice}</td>
      <td className="px-4 py-4">{quantity}</td>
      <td className="px-4 py-4">{product?.discount || '-'}</td>
      <td className="px-4 py-4">
        {product?.discount
          ? quantity *
            (product?.productPrice -
              product?.productPrice * (product?.discount / 100))
          : quantity * product?.productPrice}
      </td>
    </tr>
  ) : (
    <></>
  );
}
