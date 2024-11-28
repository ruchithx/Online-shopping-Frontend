'use client';
import React from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { GoArrowRight } from 'react-icons/go';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function HeroSection() {
  return (
    <div className="w-full py-5 ">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="w-full  "
      >
        <CarouselContent>
          <CarouselItem>
            <div
              className="py-24  w-full px-16  bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: "url('/heroSection/banner1.png')" }}
            >
              <div className=" my-4 flex font-poppins text-[15px] font-medium gap-2">
                <div className="text-Green   ">100%</div>
                <div className=" text-DeepGray">Organic Fruits</div>
              </div>
              <div className=" font-montserrat text-5xl font-bold grid gap-1.5">
                <div className="">Explore</div>
                <div className=""> fresh</div>
                <div className="">juicy Fruite.</div>
              </div>
              <div className=" py-6 text-Gray text-[15px] w-2/5">
                Indulge in a wide selection of ripe, hand-picked fruits that are
                bursting with flavor. Perfect for a healthy snack or a delicious
                recipe, delivered fresh to your door.
              </div>

              <button className="my-4 hover:bg-HoverGreen hover:text-white transition flex  gap-2  bg-Green text-SoftWhite px-4 py-2 rounded-md font-bold text-[15px]">
                Shop Now{' '}
                <div className=" m-auto ">
                  <GoArrowRight size={22} />
                </div>{' '}
              </button>
            </div>
          </CarouselItem>
          <CarouselItem className=" ">
            <div
              className=" grid content-center w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/heroSection/banner2.png')" }}
            >
              <div className=" p-4 w-1/2  ml-16 rounded-sm bg-[#F3DDCD]">
                <div className=" my-4 flex font-poppins text-[15px] font-medium gap-2">
                  <div className=" text-VibrantRed">35%</div>
                  <div className="">Off</div>
                </div>
                <div className="font-montserrat text-5xl font-bold grid ">
                  <div className="">Great deal on</div>
                  <div className="">Organic food</div>
                </div>
                <div className=" py-6 text-Gray text-[15px] w-3/4">
                  Enjoy the best prices on organic, farm-fresh produce. Nourish
                  your body with healthy, pesticide-free options while saving
                  big on every purchase!
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className=" ">
            <div
              className=" grid px-16 content-center w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/heroSection/banner3.png')" }}
            >
              <div className="font-montserrat text-5xl font-bold grid ">
                <div className="">Don’t miss our daily</div>
                <div className="">amazing deals.</div>
              </div>

              <div className=" py-6 text-Gray text-[15px] w-3/4">
                Save up to 60% off on your first order
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
