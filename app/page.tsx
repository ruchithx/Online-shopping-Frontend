import React from 'react';

import UnderNavbar from './product/components/Undernavbar';
import HeroSection from '@/components/HeroSection';
import SupersaverSection from '@/components/SupersaverSection';
import BestSellsSection from '@/components/BestSellsSection';
import axios from 'axios';
import { Product } from './product/category/[name]/page';
import Footer from '@/components/layouts/Footer';
// import Pay from '@/components/Pay';
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
      <Footer />
    </div>
  );
}
