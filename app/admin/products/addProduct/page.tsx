'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
// import dynamic from 'next/dynamic'; // Import dynamic for client-only components
import ImageUploader from './ImageUploader';
import Image from 'next/image';
import { FaCloudUploadAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

// const SketchPicker = dynamic(
//   () => import('react-color').then((mod) => mod.SketchPicker),
//   { ssr: false },
// ); // Client-only import

// const BASE_URL = 'http://localhost:3001';

export default function AddProductPage() {
  const [hasMounted, setHasMounted] = useState(false); // Track if the component is mounted
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [categories, setCategories] = useState([
    { categoryId: 1, categoryName: 'Category 1' },
  ]);
  const [brands, setBrands] = useState([{ brandId: 1, brandName: 'Brand 1' }]);
  // const [image, setImage] = useState(null);
  const [piece, setPiece] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [status, setStatus] = useState(true);
  const [hotDeals, setHotDeals] = useState(true);
  const [bestSeller, setBestSeller] = useState(true);

  // Color selection state
  // const [selectedColors, setSelectedColors] = useState<string[]>([]);
  // const [currentColor, setCurrentColor] = useState('#ffffff');
  const [productImage, setProductImage] = useState('/profile-image.jpg');
  console.log(productImage);

  useEffect(() => {
    setHasMounted(true); // Ensure the component is only rendered after mounting

    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getcategories`,
        );
        const brandsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getbrands`,
        );
        setCategories(categoriesResponse.data);
        setBrands(brandsResponse.data);
      } catch (error) {
        console.error('Error fetching categories or brands:', error);
      }
    };

    fetchData();
  }, []);

  if (!hasMounted) return <Loader />; // Prevent server-side rendering issues

  const resetProductForm = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setCategory('');
    setBrand('');
    setPiece(0);
    setIsDiscount(false);
    setDiscountPercentage(0);
    setStatus(true);
    setHotDeals(true);
    setBestSeller(true);
    setProductImage('');
    // Uncomment if color-related states are used
    // setSelectedColors([]);
    // setCurrentColor('#ffffff');
  };

  // const handleColorAdd = () => {
  //   if (!selectedColors.includes(currentColor)) {
  //     setSelectedColors([...selectedColors, currentColor]);
  //   }
  // };

  // const handleColorRemove = (color: string) => {
  //   setSelectedColors(selectedColors.filter((c) => c !== color));
  // };

  const handleSubmit = async () => {
    const selectedCategory = categories.find(
      (cat) => cat.categoryName === category,
    );
    const selectedBrand = brands.find((br) => br.brandName === brand);

    const newProduct = {
      productName,
      productDescription,
      productPrice: productPrice,
      isDiscount: isDiscount,
      categoryId: selectedCategory?.categoryId,
      brandId: selectedBrand?.brandId,
      SKU: piece,
      quantityInStock: piece,
      discount: discountPercentage,
      status: status,
      bestSeller: bestSeller,
      hotDeals: hotDeals,
      // availableColors: selectedColors,
      // image,
    };

    console.log(newProduct);

    const productResponce = await axios.post(
      `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/admin/product/addproduct`,
      newProduct,
    );

    console.log(productResponce.data);

    const productImageData = {
      productId: productResponce.data.productId,
      mediaUrl: productImage,
    };

    const imageResponce = await axios.post(
      `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/admin/product/addimage`,
      productImageData,
    );

    console.log(imageResponce.data);

    resetProductForm();

    toast.success('Product added successfully');
  };

  const handleSaveImage = async () => {
    // const response = await axios.post(
    //   `${process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL}/api/v1/product/getcategories`,
    // );
  };

  return (
    <div className="h-full bg-white rounded-lg p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-700">Add Product</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 overflow:hidden object-fit:cover  bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500">
            <Image
              alt="add product image"
              src={productImage}
              width={80}
              height={80}
            />
          </span>
        </div>
        {/* {productImage ? (
          <button
            onClick={handleSaveImage}
            className="text-blue-600 hover:underline"
          >
            <div className="p-2 text-dashBtnBlue font-semibold flex items-center justify-center gap-2 border-2 border-dashBtnBlue rounded-2xl">
              <FaCloudUploadAlt />
              save
            </div>
          </button>
        ) : ( */}
        <button className="text-blue-600 hover:underline">
          <ImageUploader setProductImage={setProductImage} />
        </button>
        {/* )} */}
      </div>

      <div className="grid grid-cols-2 gap-12 mt-8 ml-12 mr-16">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter your product name"
            className="w-full mt-1 px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter your product description"
            className="w-full mt-1 px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter your product price"
            className="w-full mt-1 px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-gray-700 w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat.categoryId} value={cat.categoryName}>
                  {cat.categoryName}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Loading categories...
              </option>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="text-gray-700 w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          >
            <option value="">Select a brand</option>
            {brands.length > 0 ? (
              brands.map((br) => (
                <option key={br.brandId} value={br.brandName}>
                  {br.brandName}
                </option>
              ))
            ) : (
              <option value="" disabled>
                Loading brands...
              </option>
            )}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            No of Pieces
          </label>
          <input
            type="number"
            value={piece}
            onChange={(e) => setPiece(Number(e.target.value))}
            placeholder="Enter No of Pieces"
            className="w-full mt-1 px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount
          </label>
          <select
            value={isDiscount.toString()}
            onChange={(e) => setIsDiscount(e.target.value === 'true')}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {isDiscount && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount Percentage
            </label>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(Number(e.target.value))}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status.toString()}
            onChange={(e) => setStatus(e.target.value === 'true')}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hot Deal
          </label>
          <select
            value={hotDeals.toString()}
            onChange={(e) => setHotDeals(e.target.value === 'true')}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Best Seller
          </label>
          <select
            value={bestSeller.toString()}
            onChange={(e) => setBestSeller(e.target.value === 'true')}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount Percentage
          </label>
          <input
            type="number"
            value={piece}
            onChange={(e) => setPiece(Number(e.target.value))}
            placeholder="Enter No of Pieces"
            className="w-full mt-1 px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div> */}

        {/* <div className="mt-1 mr-16">
          <label className="block text-sm font-medium text-gray-700">
            Available Colors
          </label>
          <div className="mt-4 flex space-x-2">
            {selectedColors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
                onClick={() => handleColorRemove(color)}
              />
            ))}
          </div>
          <div className="mt-2 flex items-start space-x-4">
            <SketchPicker
              color={currentColor}
              onChangeComplete={(color) => setCurrentColor(color.hex)}
              width="150px"
            />
            <button
              onClick={handleColorAdd}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
            >
              Add Color
            </button>
          </div>
        </div> */}
      </div>

      <div className="mt-8 mb-20 flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-16 py-2 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add the Product
        </button>
      </div>
    </div>
  );
}
