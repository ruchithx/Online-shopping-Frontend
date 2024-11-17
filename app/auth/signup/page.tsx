import React from 'react';
import { IoBagOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci"; 

const Signup = () => {
  return(
      <>
        <div className="flex flex-col md:flex-row">
          {/* Left side (common content) */}
          <div className="w-full md:w-1/2 h-auto md:h-screen p-4 md:p-8 bg-green-100">
         
            <h1 className="text-2xl mt-12 md:text-3xl mb-4 md:mb-8 text-center ">Ready to shop?<br/>Your<br/> cart awaits</h1>
            <h1 className="text-xl md:text-3xl font-bold text-center">Welcome <br/> Back</h1>
            <div className=''>
            <ul className="mt-4 md:mt-8 text-sm font-mono space-y-3 md:space-y-4">
              <li className="py-2 flex justify-center md:justify-start items-center">
                <div className="px-2 md:px-4"><IoBagOutline /></div>
                <span>Check out faster with saved info</span>
              </li>
              <li className="py-2 flex justify-center md:justify-start items-center">
                <div className="px-2 md:px-4"><CiHeart /></div>
                <span>Enjoy our personalized journey</span>
              </li>
              <li className="py-2 flex justify-center md:justify-start items-center">
                <div className="px-2 md:px-4"><IoShieldCheckmarkOutline /></div>
                <span>Keep your orders on track</span>
              </li>
              <li className="py-2 flex justify-center md:justify-start items-center">
                <div className="px-2 md:px-4"><CiGift /></div>
                <span>Get loyalty discounts</span>
              </li>
            </ul>
          </div>
          </div>
    
          {/* Right side (dynamic content) */}
          <div className="w-full md:w-1/2 h-full md:h-screen p-4 md:p-8">
    
      <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
      <form>
        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button className="w-full p-2 bg-green-500 text-white rounded">Sign Up</button>
      </form>
    </div>
  </div>
    </>
  );
};

export default Signup;
