"use client";

import React from "react";
import Link from "next/link";

const Profile = () => {

  return (
    <>
          
          <div className="hidden md:relative md:block">
          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >

            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-10 object-cover"
            />
          </button>

        </div>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              placeholder="Your First Name"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Your Last Name"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Your Email"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
        <label htmlFor="ContactNumber" className="block text-sm font-medium text-gray-700">
            Contact Number
        </label>
        <div className="flex items-center mt-3">
            <div className="py-2 px-3 bg-gray-200 text-gray-700 text-sm rounded-l-sm">
            +94
            </div>
            <input
                type="number"
                placeholder="contact_number"
                className="py-2 px-2 rounded-r-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
                style={{ width: '17rem' }}
            />
        </div>
        </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Address" className="block text-sm font-medium text-gray-700"> Address</label>

            <input
              type="text"
              placeholder="Your Address"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
                Gender
            </label>
            <select
                id="Gender"
                name="gender"
                className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            >
                <option value="" >Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>



          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-lg mt-4 border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Save
            </button>
          </div>
        </form>
    </>
  );
};

export default Profile;