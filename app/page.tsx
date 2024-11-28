import React from 'react';

import UnderNavbar from './product/components/Undernavbar';
import HeroSection from '@/components/HeroSection';
import SupersaverSection from '@/components/SupersaverSection';
import BestSellsSection from '@/components/BestSellsSection';

export default function Home() {
  return (
    <div className="bg-SoftWhite">
      <UnderNavbar />
      <HeroSection />
      <SupersaverSection />
      <BestSellsSection />
    </div>
  );
}
