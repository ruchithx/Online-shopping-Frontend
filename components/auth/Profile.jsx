'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getUser } from '@/services/userService';

const Profile = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    street: '',
    locality: '',
    contactNumber: '',
    region: '',
    postalCode: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!userId) {
          console.error("User ID not found in session");
          toast.error("User ID not found in session.");
          return;
        }

        const res = await getUser(userId);
        console.log("User details:", res);

        const userData = res?.data || res; 
        setUserData({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          country: userData.attributes?.country?.[0] || '',
          street: userData.attributes?.street?.[0] || '',
          locality: userData.attributes?.locality?.[0] || '',
          contactNumber: userData.attributes?.contactNumber?.[0] || '',
          region: userData.attributes?.region?.[0] || '',
          postalCode: userData.attributes?.postal_code?.[0] || '',
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        toast.error("Failed to load user details.");
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      console.log("User data to save:", userData);
      toast.success("User details updated successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
      toast.error("Failed to update user details.");
    }
  };

  return (
    <form className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
          placeholder="Your First Name"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
          placeholder="Your Last Name"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={userData.country}
          onChange={handleInputChange}
          placeholder="Your Country"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Street</label>
        <input
          type="text"
          name="street"
          value={userData.street}
          onChange={handleInputChange}
          placeholder="Your Street"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Locality</label>
        <input
          type="text"
          name="locality"
          value={userData.locality}
          onChange={handleInputChange}
          placeholder="Your Locality"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={userData.contactNumber}
          onChange={handleInputChange}
          placeholder="Your Contact Number"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Region</label>
        <input
          type="text"
          name="region"
          value={userData.region}
          onChange={handleInputChange}
          placeholder="Your Region"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={userData.postalCode}
          onChange={handleInputChange}
          placeholder="Your Postal Code"
          className="mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="button"
          onClick={handleSave}
          className="inline-block shrink-0 rounded-lg mt-4 border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Profile;
