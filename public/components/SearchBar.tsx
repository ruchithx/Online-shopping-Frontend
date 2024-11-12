import React from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <div>
      <div className="flex items-center w-full max-w-md ms-16">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full px-4 py-2 rounded-l-md text-xs border border-gray-300 focus:outline-none"
        />
        <button className="px-4 py-1 bg-green-500 text-white rounded-r-md">
          <FiSearch size={26} />
        </button>
      </div>
    </div>
  );
}
