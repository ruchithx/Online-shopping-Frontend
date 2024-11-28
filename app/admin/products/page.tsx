'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useRouter } from 'next/navigation'; // Corrected import for Next.js App Router

const BASE_URL = 'http://localhost:3001';

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([
    {
      id: 0,
      productName: '',
      price: 0,
      image: '',
      category: '',
      piece: 0,
      availableColors: ['bg-black', 'bg-green-400', 'bg-red-500'],
    },
  ]); // Start with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product`);
        setProducts(response.data);
      } catch (error: unknown) {
        // Check if the error is an AxiosError and has a response
        if (axios.isAxiosError(error)) {
          // If the error has a response, access the message from the response
          setError(
            error.response?.data?.message ||
              error.message ||
              'An error occurred',
          );
        } else {
          // For non-Axios errors, provide a generic message
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Only fetch on component mount

  const handleCategoryClick = () => {
    router.push('/admin/products/addNewCategory');
  };

  const handleBrandClick = () => {
    router.push('/admin/products/addBrand');
  };

  const handleAddProductClick = () => {
    router.push('/admin/products/addProduct');
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="h-full bg-white rounded-lg p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-700">Products</h1>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            onClick={handleCategoryClick}
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

      {/* Products Table */}
      <div className="overflow-x-auto">
        {products.length > 0 ? (
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-700">
                <th className="p-3">Image</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Piece</th>
                <th className="p-3">Available Color</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t text-gray-700">
                  <td className="p-3">
                    <img
                      src={product.image || '/placeholder.jpg'} // Use placeholder if image is empty
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{product.productName}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.piece}</td>
                  <td className="p-3">
                    <div className="flex space-x-2">
                      {product.availableColors?.map((color, index) => (
                        <span
                          key={index}
                          className="w-5 h-5 rounded-full"
                          style={{ backgroundColor: color }} // Use inline styles for dynamic colors
                        ></span>
                      ))}
                    </div>
                  </td>

                  <td className="p-3 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                      <MdEdit className="w-5 h-5" />
                      <span>Edit</span>
                    </button>
                    <button className="text-red-500 hover:text-red-700 flex items-center space-x-1">
                      <MdDelete className="w-5 h-5" />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-gray-500 text-center">No products available</div>
        )}
      </div>
    </div>
  );
}
