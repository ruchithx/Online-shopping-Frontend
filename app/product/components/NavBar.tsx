'use client';
import Image from 'next/image';
import { useState, FC } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiUser, FiBox, FiLogOut } from 'react-icons/fi';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="bg-[#F4F4F9] shadow-md py-4 ">
        <div className="flex items-center ">
          <div className="flex items-center w-3/5 justify-between">
            {' '}
            <div className="flex items-center ms-12 ">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Freshmart Logo"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="ms-12 ">
              <SearchBar />
            </div>
          </div>
          <div className="flex w-2/5 justify-around items-center">
            {/* <div className="flex items-center space-x-4 ">
              <div className="relative">
                <Image
                  src="/Wishlist.png"
                  alt="Wishlist Icon"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  4
                </span>
              </div>
              <div className="text-[#1A202C] font-medium text-sm">Wishlist</div>
            </div> */}
            <Link href="/cart">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src="/Cart.png"
                    alt="Cart Icon"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                  <span className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                    1
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-[#1A202C]">
                    My Cart
                  </span>
                  <p className="text-[#FF6B6B] text-sm">${21}</p>
                </div>
              </div>
            </Link>

            <div className="relative ">
              <div
                className="flex items-center cursor-pointer  "
                onClick={toggleDropdown}
              >
                <Image
                  src="/chamodi.jpg"
                  alt="Chamodi Liyanage"
                  width={20}
                  height={20}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-sm font-medium text-[#1A202C]">
                    Chamodi Liyanage
                  </h2>
                </div>
                <MdKeyboardArrowDown
                  className="ml-1 text-[#1A202C]"
                  size={20}
                />
              </div>

              {isDropdownOpen && (
                <div
                  className="top-full mt-1 bg-[#4CAF50]  rounded-lg  p-4 z-50"
                  style={{ position: 'absolute' }}
                >
                  <div className="text-center mb-4 flex flex-col items-center  justify-center">
                    <h2 className="text-sm text-[#F4F4F9] font-bold text-center">
                      Hi Chamodi ❤️
                    </h2>
                  </div>
                  <div className="border-t border-white my-2 w-48"></div>

                  <div className="flex flex-col text-[#F4F4F9]">
                    <Link href="/user/profile">
                      <button className="flex items-center py-2 text-sm hover:text-[#1A202C]">
                        <FiUser className="mr-2" /> Manage My Account
                      </button>
                    </Link>
                    <Link href="/user/orders">
                      <button className="flex items-center py-2 text-sm hover:text-[#1A202C]">
                        <FiBox className="mr-2" /> My Orders
                      </button>
                    </Link>
                    {/* <button className="flex items-center py-2 text-sm hover:text-[#1A202C]">
                      <FiHeart className="mr-2" /> My Wishlist
                    </button> */}
                    <button className="flex items-center py-2 text-sm hover:text-[#1A202C]">
                      <FiLogOut className="mr-2" /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
