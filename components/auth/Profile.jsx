'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getUser } from '@/services/userService';
import { updateUser } from '@/services/userService';

const Profile = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    street: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!userId) {
          console.error('User ID not found in session');
          toast.error('User ID not found in session.');
          return;
        }

        const res = await getUser(userId);
        console.log('User details:', res);

        const userData = res?.data || res;
        setUserData({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          country: userData.attributes?.country?.[0] || '',
          street: userData.attributes?.street?.[0] || '',
          contactNumber: userData.attributes?.contactNumber?.[0] || '',
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
        toast.error('Failed to load user details.');
      }
    };
    fetchUserDetails();
  }, [session?.user?.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
    setValidationError(''); 
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.firstName.trim()) newErrors.firstName = 'First Name is required.';
    if (!userData.lastName.trim()) newErrors.lastName = 'Last Name is required.';
    if (!emailRegex.test(userData.email)) newErrors.email = 'Invalid email address.';
    if (!userData.contactNumber.trim()) newErrors.contactNumber = 'Contact Number is required.';
    else if (!/^\d+$/.test(userData.contactNumber) || userData.contactNumber.length < 10) {
      newErrors.contactNumber = 'Contact Number must be at least 10 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSave = () => {
    if (!validateInputs()) {
      setValidationError('Please input valid data in all fields.');
      setShowModal(true);
      return;
    }

    try {
      if (!userId) {
        toast.error('User ID not found. Cannot update details.');
        return;
      }

      updateUser(userId, userData);
      toast.success('User details updated successfully!');
      setShowModal(false); 
    } catch (error) {
      console.error('Error saving user data:', error);
      toast.error('Failed to update user details.');
    }
  };

  return (
    <div>
      <form className="mt-8 grid grid-cols-6 gap-6">
        {['firstName', 'lastName', 'email', 'country', 'street', 'contactNumber'].map((field, index) => (
          <div key={index} className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={userData[field]}
              onChange={handleInputChange}
              placeholder={`Your ${field.replace(/([A-Z])/g, ' $1')}`}
              className={`mt-3 py-2 px-2 w-80 rounded-sm border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm ${
                errors[field] ? 'border-red-500' : ''
              }`}
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-block shrink-0 rounded-lg mt-4 border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Save
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-medium mb-4">Confirm Changes</h2>
            {validationError ? (
              <p className="text-red-500 text-sm mb-6">{validationError}</p>
            ) : (
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to save these changes to your profile?
              </p>
            )}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
