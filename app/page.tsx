import React from 'react';

import UnderNavbar from './product/components/Undernavbar';
import HeroSection from '@/components/HeroSection';
import SupersaverSection from '@/components/SupersaverSection';
import BestSellsSection from '@/components/BestSellsSection';
import axios from 'axios';
import { Product } from './product/category/[name]/page';
import Pay from '@/components/Pay';
// import Product from './product/[id]/page';
// import Pay from '@/components/Pay';
export default async function Home() {
  let discountHaveProducts;
  let bestSellesProducts;
  try {
    const productsData = await axios.get(
      'http://localhost:8083/api/v1/product/getproducts',
    );

    if (productsData) {
      discountHaveProducts = productsData.data.filter((product: Product) => {
        return product.discount > 0;
      });

      bestSellesProducts = productsData.data.filter((product: Product) => {
        return product.bestSeller === true;
      });
    }
  } catch (err) {
    console.log(err);
  }

  const paymentDetails = {
    items: 'Event Name',
    fullAmount: '100',
    currency: 'LKR',
    address: '',
    userId: 1,
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
    <div className="bg-SoftWhite">
      <UnderNavbar />
      <HeroSection />
      <SupersaverSection
        discountHaveProducts={discountHaveProducts ? discountHaveProducts : []}
      />
      <BestSellsSection
        bestSellesProducts={bestSellesProducts ? bestSellesProducts : []}
      />
      <Pay
        orderId="1"
        item={paymentDetails?.items}
        order={order}
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
      />
    </div>
  );
}
