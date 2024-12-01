import React from 'react';

import UnderNavbar from './product/components/Undernavbar';
import HeroSection from '@/components/HeroSection';
import SupersaverSection from '@/components/SupersaverSection';
import BestSellsSection from '@/components/BestSellsSection';
import axios from 'axios';
import { Product } from './product/category/[name]/page';
// import Product from './product/[id]/page';

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

  // const paymentDetails = {
  //   items: 'Event Name',
  //   oder_id: '1',
  //   fullAmount: '100',
  //   currency: 'LKR',
  //   address: '',
  //   userId: 1,
  // };

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
      {/* <Pay
        item={paymentDetails?.items}
        orderId={paymentDetails?.oder_id}
        amount={paymentDetails.fullAmount}
        currency={paymentDetails?.currency}
        address={paymentDetails?.address}
        userId={paymentDetails?.userId}
      /> */}
    </div>
  );
}
