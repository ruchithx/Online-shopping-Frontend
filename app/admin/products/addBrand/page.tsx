'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Corrected import for Next.js App Router
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

export default function BrandPage() {
  const router = useRouter();

  const [brands, setBrands] = useState<
    { brandId: number; brandName: string }[]
  >([]); // Updated to store objects
  const [newBrand, setNewBrand] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // const BASE_URL = 'http://localhost:3001';

  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getbrands`,
      );
      setBrands(response.data);
      console.log(response.data);
      setError(''); // Clear any previous error
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError('Failed to fetch brands: ' + error.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch brands when the component mounts

    fetchBrands();
  }, []); // Fetch only once on component mount

  const addBrand = async () => {
    const data = {
      brandName: newBrand,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/admin/product/addbrand`,
        data,
      );
      console.log(response.data);
      // setBrands(response.data);
      setNewBrand('');
      fetchBrands();
      toast.success('Brand added successfully');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError('Failed to add brand: ' + error.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const handleAddBrand = async () => {
    if (newBrand.trim()) {
      try {
        addBrand();
        // const response = await axios.post<{ id: number; brandName: string }>(
        //   `${BASE_URL}/brand`,
        //   {
        //     brandName: newBrand, // Assuming API expects { brandName }
        //   },
        // );
        // setBrands((prevBrands) => [...prevBrands, response.data]); // Append new brand object to the list
        // setNewBrand('');
        // setError(''); // Clear any previous error
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError('Failed to add brand: ' + error.message);
        } else {
          setError('An unexpected error occurred.');
        }
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  const handleCategoryClick = () => {
    router.push('/admin/products/addNewCategory');
  };

  const handleAddProductClick = () => {
    router.push('/admin/products/addProduct');
  };
  return (
    <div className="h-full bg-white rounded-lg p-8">
      {/* Header with Buttons */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold text-gray-700">Products</h1>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            onClick={handleCategoryClick}
          >
            Add Category
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={true} // Button is disabled
          >
            Add Brand
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            onClick={handleAddProductClick}
          >
            Add New Product
          </button>
        </div>
      </div>

      {/* Centered Grid Layout with Added Spacing */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 mt-20">
        {/* Add Brand Form */}
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="Enter new brand name"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-700"
            />
          </div>

          <button
            onClick={handleAddBrand}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Now
          </button>
        </div>

        {/* Brands List */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            All Brands
          </h2>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div
                key={brand.brandId}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm text-gray-700"
              >
                {brand.brandName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
