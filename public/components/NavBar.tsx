import Image from 'next/image';
import { useState, FC } from 'react';
import { FaBell } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiUser, FiBox, FiHeart, FiLogOut } from 'react-icons/fi';
import SearchBar from './SearchBar';

const Navbar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Freshmart Logo"
            width={200}
            height={200}
            className="mr-2"
          />

          <SearchBar />
        </div>

        <div className="flex items-center">
          <div className="relative mr-4">
            <FaBell size={24} className="text-gray-500 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              2
            </span>
          </div>

          <div
            className="relative flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <Image
              src="/chamodi.jpg"
              alt="User Avatar"
              width={40}
              height={40}
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-2">
              <h2 className="text-sm font-medium text-gray-700">
                Chamodi Liyanage
              </h2>
            </div>
            <MdKeyboardArrowDown className="ml-1 text-gray-500" size={20} />

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-50  bg-white rounded-lg shadow-lg p-4"
                style={{ top: '50px', width: '250px' }}
              >
                <div className="text-center mb-4 flex gap-2">
                  <Image
                    src="/chamodi.jpg"
                    alt="Chamodi Liyanage"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full"
                  />
                  <h2 className="text-sm text-gray-800 mt-2 ms-6 flex items-center font-bold">
                    Hi Chamodi ❤️
                  </h2>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex flex-col text-gray-700">
                  <button className="flex items-center py-2 text-sm hover:text-green-600">
                    <FiUser className="mr-2" /> Manage My Account
                  </button>
                  <button className="flex items-center py-2 text-sm hover:text-green-600">
                    <FiBox className="mr-2" /> My Orders
                  </button>
                  <button className="flex items-center py-2 text-sm hover:text-green-600">
                    <FiHeart className="mr-2" /> My Wishlist
                  </button>
                  <button className="flex items-center py-2 text-sm hover:text-green-600">
                    <FiLogOut className="mr-2" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
