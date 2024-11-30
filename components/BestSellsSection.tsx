import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/app/product/category/[name]/page';
// Dummy Data
// const products = [
//   {
//     discountPercent: 20,
//     image: 'productImg.png',
//     name: 'Fresh Apples',
//     specialDiscount: 'Buy 1 Get 1 Free',
//     oldPrice: 120,
//     newPrice: 96,
//   },
//   {
//     discountPercent: 15,
//     image: 'productImg.png',
//     name: 'Bananas',
//     specialDiscount: 'Special Discount',
//     oldPrice: 80,
//     newPrice: 68,
//   },
//   {
//     discountPercent: 25,
//     image: 'productImg.png',
//     name: 'Grapes',
//     specialDiscount: 'Limited Time Offer',
//     oldPrice: 150,
//     newPrice: 112.5,
//   },
//   {
//     discountPercent: 10,
//     image: 'productImg.png',
//     name: 'Mangoes',
//     specialDiscount: '',
//     oldPrice: 200,
//     newPrice: 180,
//   },
//   {
//     discountPercent: 30,
//     image: 'productImg.png',
//     name: 'Oranges',
//     specialDiscount: 'Seasonal Sale',
//     oldPrice: 100,
//     newPrice: 70,
//   },
//   {
//     discountPercent: 20,
//     image: 'productImg.png',
//     name: 'Fresh Apples',
//     specialDiscount: 'Buy 1 Get 1 Free',
//     oldPrice: 120,
//     newPrice: 96,
//   },
//   {
//     discountPercent: 15,
//     image: 'productImg.png',
//     name: 'Bananas',
//     specialDiscount: 'Special Discount',
//     oldPrice: 80,
//     newPrice: 68,
//   },
//   {
//     discountPercent: 25,
//     image: 'productImg.png',
//     name: 'Grapes',
//     specialDiscount: 'Limited Time Offer',
//     oldPrice: 150,
//     newPrice: 112.5,
//   },

//   {
//     discountPercent: 0,
//     image: 'productImg.png',
//     name: 'Mangoes',
//     specialDiscount: '',
//     oldPrice: 200,
//     newPrice: 180,
//   },
//   {
//     discountPercent: 30,
//     image: 'productImg.png ',
//     name: 'Oranges',
//     specialDiscount: '',
//     oldPrice: 70,
//     newPrice: 70,
//   },
// ];
export default function BestSellsSection({
  bestSellesProducts,
}: {
  bestSellesProducts: Product[];
}) {
  console.log(bestSellesProducts);
  return (
    <div className=" pb-10 pl-16">
      <div className=" my-10 w-80 h-10  font-poppins text-2xl font-medium text-DeepGray  border-b-4 border-Green">
        Daily <span className="text-Green">Best Sells</span>
      </div>
      <div className=" gap-8 flex flex-wrap">
        {bestSellesProducts.map((product, index) => (
          <ProductCard
            id={product.productId}
            key={index}
            discountPercent={product.discount}
            image={product.mediaUrl}
            name={product.productName}
            // specialDiscount={product.specialDiscount}
            // oldPrice={product.oldPrice}
            newPrice={product.productPrice}
            color={'GoldenYellow'}
          />
        ))}
      </div>
    </div>
  );
}
