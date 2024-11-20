'use client';

import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';

const Sidebar = () => {
  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium">
                    {' '}
                    Manage My Account{' '}
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <Link href={'/user/profile'}>My Profile</Link>
                  </li>

                  <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <Link href={'/user/profile/change-password'}>
                      Change Password
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> My Orders </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <Link href={'/user/orders'}>Past Orders</Link>
                  </li>

                  <li>
                    <Link
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      href={'#'}
                    >
                      Track My Orders
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href={'#'}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                My WishList
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
