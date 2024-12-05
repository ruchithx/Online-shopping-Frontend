'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import axios from 'axios';
import UnderNavbar from '../../components/Undernavbar';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import Product from '../../[id]/page';

type category = {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
};

export type Product = {
  productId: number; // Unique identifier for the product
  productName: string; // Name of the product
  productDescription: string; // Detailed description of the product
  productPrice: number; // Price of the product
  isDiscount: boolean; // Whether the product has a discount
  discount: number; // Discount percentage
  quantityInStock: number; // Number of items in stock
  bestSeller: boolean; // Availability status of the product
  hotDeals: boolean; // Availability status of the product
  status: boolean; // Availability status of the product
  createdAt: Date | null; // Creation timestamp or null
  updatedAt: Date | null; // Last update timestamp or null
  mediaUrl: string; // URL for product media (image or video)
  category: {
    categoryId: number; // Unique identifier for the category
    categoryName: string; // Name of the category
    categoryDescription: string; // Description of the category
  };
  brand: {
    brandId: number; // Unique identifier for the brand
    brandName: string; // Name of the brand
  };
  sku: string | null; // Stock Keeping Unit identifier or null
};

export default function CategoryProducts() {
  const { name } = useParams<{ name: string }>();
  let filteredProducts: Product[] = [];
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [allCategories, setAllCategories] = useState<category[]>([]);
  const [allProduct, setAllProduct] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getcategories`,
      );
      console.log(response.data);
      setAllCategories(response.data); // Assuming API returns an array of category objects
      // setError(''); // Clear any previous error
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // setError('Failed to fetch categories: ' + error.message);
      } else {
        // setError('An unexpected error occurred.');
      }
    } finally {
      // setLoading(false);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getproducts`,
      );
      console.log(response.data);
      setAllProduct(response.data); // Assuming API returns an array of category objects
      // setError(''); // Clear any previous error
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // setError('Failed to fetch categories: ' + error.message);
      } else {
        // setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProduct();
  }, []);

  // const categories = [
  //   { category: 'Vegetables' },
  //   { category: 'Foods' },
  //   { category: 'Meat' },
  //   { category: 'Fish' },
  //   { category: 'Homeware' },
  //   { category: 'Books' },
  //   { category: 'Bakery Products' },
  //   { category: 'Electronic Devices' },
  //   { category: 'Beauty' },
  //   { category: 'Kids' },
  //   { category: 'Pets' },
  // ];

  // const products = [
  //   {
  //     name: 'Beetroot',
  //     price: 150,
  //     imageUrl: '/betroot.jpeg',
  //     category: 'Vegetables',
  //     stock: 10,
  //   },
  //   {
  //     name: 'Carrot',
  //     price: 50,
  //     imageUrl: '/Carrot Sub1.jpg',
  //     category: 'Vegetables',
  //     stock: 0,
  //   },

  //   {
  //     name: 'Shampoo',
  //     price: 300,
  //     imageUrl: '/Shampoo.jpeg',
  //     category: 'Beauty',
  //     stock: 0,
  //   },
  //   {
  //     name: 'Baby Soap',
  //     price: 300,
  //     imageUrl: '/Soap.jpeg',
  //     category: 'Beauty',
  //     stock: 10,
  //   },

  //   {
  //     name: 'Cabbage',
  //     price: 20,
  //     imageUrl: '/Cabbage.jpeg',
  //     category: 'Vegetables',
  //     stock: 10,
  //   },
  //   {
  //     name: 'Onion',
  //     price: 50000,
  //     imageUrl: '/onion.jpg',
  //     category: 'Vegetables',
  //     stock: 10,
  //   },
  //   {
  //     name: 'Orange',
  //     price: 200,
  //     imageUrl: '/Orange.jpeg',
  //     category: 'Foods',
  //     stock: 10,
  //   },
  //   {
  //     name: 'Potato',
  //     price: 300,
  //     imageUrl: '/Potato.jpeg',
  //     category: 'Vegetables',
  //     stock: 0,
  //   },
  // ];

  if (name !== 'all' && name !== 'hotdeal' && name !== 'newproduct') {
    filteredProducts = name
      ? allProduct.filter((product) => product.category.categoryName === name)
      : allProduct;
  } else if (name === 'all') {
    filteredProducts = allProduct;
  } else if (name === 'hotdeal') {
    filteredProducts = allProduct.filter(
      (product) => product.hotDeals === true,
    );
  } else if (name === 'newproduct') {
    filteredProducts = allProduct.filter((product) => {
      if (!product.createdAt) {
        // Skip products with a null createdAt
        return false;
      }

      const productCreatedAt = new Date(product.createdAt); // Safe conversion
      return productCreatedAt >= twoDaysAgo && productCreatedAt <= today;
    });
  }
  return (
    <div>
      <UnderNavbar />
      {loading ? (
        <div className="flex justify-center">
          <Image
            alt="loading image"
            src="/loader.svg"
            width={100}
            height={100}
          />
        </div>
      ) : (
        <div className="mt-12 flex flex-row">
          <div className="w-1/6 flex flex-col items-center shadow-md">
            <div className="text-xl text-[#1A202C] font-sm">
              Shop by Category
            </div>
            <div className="text-sm text-[#1A202C] mt-4">
              {allCategories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center border-b border-gray-300 py-4  cursor-pointer ${
                    selectedCategory === category.categoryName
                      ? 'text-[#4CAF50] '
                      : ''
                  }`}
                  onClick={() => setSelectedCategory(category.categoryName)}
                >
                  <Link
                    href={`/product/category/${category.categoryName.toLowerCase()}`}
                  >
                    <div className="flex-1">{category.categoryName}</div>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600 ml-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="w-5/6 grid grid-cols-4 gap-12 p-8 shadow-md ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  productId={product.productId}
                  key={index}
                  name={product.productName}
                  price={product.productPrice}
                  imageUrl={product.mediaUrl}
                  stock={product.quantityInStock}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-3">
                No products available for this category.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
