"use client"

import React from "react";

const ChangePassword = () => {
    return(
        <div>
         <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="CurrentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>

            <input
              type="password"
              placeholder="Current password"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>
            <br/>

            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="NewPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>

            <input
              type="password"
              placeholder="New password"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="ConfirmNewPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>

            <input
              type="password"
              placeholder="Confirm New Password"
              className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 mt-5">
            <label htmlFor="Notice" className="flex gap-4">
            <svg
            className="h-5 w-5 mr-2" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>

              <span className="text-sm text-gray-700">
                Password should contain at least one Upercase, Numeric & Special character.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-lg mt-4 border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Save
            </button>
          </div>
        </form>
    </div>
    );
}

export default ChangePassword;