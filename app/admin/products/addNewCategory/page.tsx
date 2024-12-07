'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Corrected import for Next.js App Router
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

export default function CategoryPage() {
  const router = useRouter();

  const [categories, setCategories] = useState<
    { categoryId: number; categoryName: string; categoryDescription: string }[]
  >([]);
  const [newCategory, setNewCategory] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // const BASE_URL = 'http://localhost:3001';

  const cleanForm = () => {
    setNewCategory('');
    setDescription('');
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getcategories`,
      );
      console.log(response.data);
      setCategories(response.data); // Assuming API returns an array of category objects
      setError(''); // Clear any previous error
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError('Failed to fetch categories: ' + error.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    console.log(process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL);
    fetchCategories();
  }, []); // Fetch only once on component mount

  const addCategory = async () => {
    try {
      const data = {
        categoryName: newCategory,
        categoryDescription: description,
      };
      console.log(data);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/admin/product/addcategory`,
        data,
      );
      console.log(response.data);
      if (response.data) {
        toast.success('Category added successfully');
      }
      fetchCategories();
      cleanForm();
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddCategory = async () => {
    addCategory();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const handleBrandClick = () => {
    router.push('/admin/products/addBrand');
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={true} // Set this to true to disable the button
          >
            Add Category
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            onClick={handleBrandClick}
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
        {/* Add Category Form */}
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter new category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Enter description for category"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm text-gray-700"
            />
          </div>
          <button
            onClick={handleAddCategory}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Now
          </button>
        </div>

        {/* Categories List */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            All Categories
          </h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.categoryId}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm text-gray-700"
              >
                {category.categoryName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
