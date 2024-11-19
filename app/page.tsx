import Navbar from '@/public/components/NavBar';
import React from 'react';
import { FC } from 'react';
import { LuLayoutGrid } from 'react-icons/lu';
import { FiHome } from 'react-icons/fi';
import { LiaFireSolid } from 'react-icons/lia';
import { LuMegaphone } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import { AiOutlinePercentage } from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      {' '}
      <div className="bg-[#F4F4F9] py-2">
        <div className="flex justify-between items-center ms-12 px-4">
          <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            <LuLayoutGrid className="mr-2" />
            Browse All Categories
          </button>

          <div className="flex space-x-8 lg:space-x-8 xl:space-x-16">
            {' '}
            <div className="flex items-center space-x-2 text-[#1A202C]">
              <FiHome />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A202C]">
              <LiaFireSolid />
              <span>Hot deals</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A202C]">
              <AiOutlinePercentage />
              <span>Promotions</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1A202C]">
              <LuMegaphone />
              <span>New products</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center text-[#1A202C] mr-4 lg:mr-8 xl:mr-8">
            <FiPhone className="text-green-500" />
            <span className="ml-2 text-green-500">1233-7777</span>
            <span className="ml-1">24/7 support center</span>
          </div>
        </div>
      </div>
    </div>
  );
}
