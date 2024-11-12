import Image from 'next/image';
import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar: FC = () => {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Freshmart Logo"
            width={200}
            height={200}
            className="mr-2"
          />

          <div className="flex items-center w-full max-w-md ms-16">
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">
              <FiSearch size={26} />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <FaBell size={24} className="text-gray-500 cursor-pointer" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              2
            </span>
          </div>

          <div className="flex items-center cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
