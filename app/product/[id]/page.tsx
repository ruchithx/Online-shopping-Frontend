'use client';
import React, { useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

// import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import axiosInstance from '@/lib/auth/axiosInstance';
import Loader from '@/components/Loader';

type Product = {
  productId: number; // Unique identifier for the product
  productName: string; // Name of the product
  productDescription: string; // Detailed description of the product
  productPrice: number; // Price of the product
  isDiscount: boolean; // Whether the product has a discount
  discount: number; // Discount percentage
  quantityInStock: number; // Number of items in stock
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

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [value, setValue] = useState(1);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession(); // Correctly typed from next-auth
  console.log(session?.user?.id);
  const userId = session?.user?.id;

  console.log(session);
  // const thumbnails = [
  //   { src: '/Carrot Sub1.jpg' },
  //   { src: '/Carrot Sub2.jpg' },
  //   { src: '/Carrot Sub3.jpg' },
  //   { src: '/Carrot Sub4.png' },
  // ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getproductbyid/${id}`,
        );
        console.log(response.data);
        setProduct(response.data); // Assuming API returns an array of category objects
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

    fetchProduct();
    // fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (!product) return <div>No Product</div>;

  async function handleAddToCart() {
    console.log(session?.user?.id);
    try {
      if (!product) return;
      const cartItem = {
        productId: product?.productId,
        productName: product?.productName,
        price: setTotalPrice(product.productPrice!, product.discount!),
        quantity: value,

        userId: session?.user?.id,
        productImage: product?.mediaUrl,
      };

      console.log(cartItem);

      const responseOfAddingCart = await axios.post(
        'http://localhost:8082/api/v1/cart/add',
        cartItem,
      );

      if (responseOfAddingCart.data) {
        toast.success('Item added to cart');
      }

      console.log(cartItem);
    } catch (err) {
      console.log(err);
      toast.error('failed to add item to cart');
    }
  }

  // const [mainImage, setMainImage] = useState('/Carrot Sub4.png');

  const increaseValue = () => {
    setValue((prev) => parseFloat((prev + 1).toFixed(1)));
  };

  const decreaseValue = () => {
    setValue((prev) => (prev > 0 ? parseFloat((prev - 1).toFixed(1)) : 0));
  };

  console.log(product);

  function setTotalPrice(price: number, discount: number) {
    const totalPrice = price - (price * discount) / 100;
    return totalPrice;
  }

  return (
    <div>
      <div className="w-full max-w-4xl flex mt-6 ms-12">
        <div
          className="text-4xl font-bold text-left mb-4 mr-12 cursor-pointer"
          onClick={() => router.back()}
        >
          Products
        </div>
        <div className="flex items-center justify-center mb-8 ">
          <div className="flex items-center w-full mt-2 max-w-xs p-1 bg-white  rounded-full shadow-sm border-2 border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              className="ms-2"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search product name"
              className="ml-2 w-full bg-white border-none focus:outline-none text-gray-600 font-thin text-xs placeholder-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start w-full max-w-6xl ml-4 md:ml-2 lg:ml-60  p-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center md:w-1/2 mr-12">
          <div className="border-4 border-[#4CAF50] p-4 relative">
            <Image
              src={product.mediaUrl}
              alt="Carrot"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* <div className="flex space-x-4 mt-4">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="border border-[#4CAF50] p-1 rounded cursor-pointer"
                onClick={() => setMainImage(thumbnail.src)}
              >
                <Image
                  src={thumbnail.src}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover"
                />
              </div>
            ))}
          </div> */}
        </div>

        <div className="md:w-1/2 flex flex-col space-y-6 ">
          <h2 className="text-4xl font-bold">{product.productName}</h2>
          <p className="text-gray-500">FreshMart#{product.productId}</p>
          <p className="text-2xl font-semibold text-gray-800">
            Rs.{setTotalPrice(product.productPrice, product.discount)}
            <span className="text-xl line-through text-gray-400 ml-10">
              Rs. {product?.productPrice}
            </span>
          </p>
          {!session ? (
            ''
          ) : (
            <div className="flex items-center bg-transparent rounded-full overflow-hidden">
              <button
                onClick={decreaseValue}
                className="bg-[#A6DFAC] text-white px-6 py-2 flex items-center justify-center rounded-l-full"
              >
                -
              </button>
              <div className="flex items-center border-t border-b border-[#4CAF50] px-4 py-[0.44rem]">
                <input
                  type="text"
                  value={value.toFixed(1)}
                  className="w-12 text-center border-0 focus:outline-none bg-white"
                  readOnly
                />
              </div>
              <button
                onClick={increaseValue}
                className="bg-[#4CAF50] text-white px-6 py-2 flex items-center justify-center rounded-r-full"
              >
                +
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-[#4CAF50] text-white px-6 py-2 rounded-md ml-4"
              >
                Add to cart
              </button>
            </div>
          )}

          <div className="flex gap-6 ">
            <p className="text-gray-500 font-semibold">Category :</p>
            <p className="text-[#4CAF50]">{product?.category.categoryName}</p>
          </div>

          <div className="flex gap-6 ">
            <p className="text-gray-500 font-semibold">Available Quantity :</p>
            <p className="text-[#4CAF50]">{product?.quantityInStock}</p>
          </div>

          {/* <div className="flex items-center gap-6 ">
            <p className="text-gray-500 font-semibold">Share :</p>
            <FaFacebook className="text-gray-700 cursor-pointer" size={20} />
            <FaWhatsapp className="text-gray-700 cursor-pointer" size={20} />
            <FaEnvelope className="text-gray-700 cursor-pointer" size={20} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
