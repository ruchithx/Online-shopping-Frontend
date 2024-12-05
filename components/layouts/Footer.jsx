import React from 'react';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BiSolidTime } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Freshmart Section */}
        <div className="text-sm m">
          <Image
            src="/logo.png"
            alt="Freshmart Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
          <div className="flex mt-4 mb-2 ">
            <FaLocationDot />
            <p className="ml-2">Address: 1762 School House Road</p>
          </div>
          <div className="flex mt-4 mb-2 ">
            <FaPhone />
            <p className="ml-2">Call Us: 1233-777</p>
          </div>
          <div className="flex mt-4 mb-2 ">
            <MdEmail />
            <p className="ml-2"> Email: groceryish@contact.com</p>
          </div>
          <div className="flex mt-4 mb-2 ">
            <BiSolidTime />
            <p className="ml-2">Work hours: 8:00 - 20:00, Sunday - Thursday</p>
          </div>
        </div>

        {/* Account Section */}
        <div className="">
          <h3 className="font-semibold text-lg mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Details
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hot deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Promotions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                New products
              </a>
            </li>
          </ul>
        </div>

        {/* Help Center Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Help Center</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Refund
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Q&A
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        Copyright © Freshmart 2024. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
