import React from 'react';
import ProductCard from './ProductCard';

// Dummy Data
const products = [
  {
    discountPercent: 20,
    image: 'productImg.png',
    name: 'Fresh Apples',
    specialDiscount: 'Buy 1 Get 1 Free',
    oldPrice: 120,
    newPrice: 96,
  },
  {
    discountPercent: 15,
    image: 'productImg.png',
    name: 'Bananas',
    specialDiscount: 'Special Discount',
    oldPrice: 80,
    newPrice: 68,
  },
  {
    discountPercent: 25,
    image: 'productImg.png',
    name: 'Grapes',
    specialDiscount: 'Limited Time Offer',
    oldPrice: 150,
    newPrice: 112.5,
  },
  {
    discountPercent: 10,
    image: 'productImg.png',
    name: 'Mangoes',
    specialDiscount: '',
    oldPrice: 200,
    newPrice: 180,
  },
  {
    discountPercent: 30,
    image: 'productImg.png',
    name: 'Oranges',
    specialDiscount: 'Seasonal Sale',
    oldPrice: 100,
    newPrice: 70,
  },
  {
    discountPercent: 20,
    image: 'productImg.png',
    name: 'Fresh Apples',
    specialDiscount: 'Buy 1 Get 1 Free',
    oldPrice: 120,
    newPrice: 96,
  },
  {
    discountPercent: 15,
    image: 'productImg.png',
    name: 'Bananas',
    specialDiscount: 'Special Discount',
    oldPrice: 80,
    newPrice: 68,
  },
  {
    discountPercent: 25,
    image: 'productImg.png',
    name: 'Grapes',
    specialDiscount: 'Limited Time Offer',
    oldPrice: 150,
    newPrice: 112.5,
  },

  {
    discountPercent: 0,
    image: 'productImg.png',
    name: 'Mangoes',
    specialDiscount: '',
    oldPrice: 200,
    newPrice: 180,
  },
  {
    discountPercent: 30,
    image: 'productImg.png ',
    name: 'Oranges',
    specialDiscount: '',
    oldPrice: 70,
    newPrice: 70,
  },
];

export default function SupersaverSection() {
  return (
    <div className="pb-10  pl-16">
      <div className=" my-10 w-80 h-10  font-poppins text-2xl font-medium text-DeepGray  border-b-4 border-Green">
        Supersaver <span className="text-Green">Up to 50% off</span>
      </div>
      <div className=" gap-8 flex flex-wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            discountPercent={product.discountPercent}
            image={product.image}
            name={product.name}
            specialDiscount={product.specialDiscount}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            color={'Green'}
          />
        ))}
      </div>
    </div>
  );
}
