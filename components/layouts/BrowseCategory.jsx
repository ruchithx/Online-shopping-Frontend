"use client";

import Link from "next/link";
import React from "react";
import 'tailwindcss/tailwind.css'

const BrowseCategory = () => {

  return (
            <div className="py-6">
            <div className="flex items-center justify-between">
            <aside className="md:w-1/3 lg:w-1/4">
            <span className="flex items-center h-10 py-3 px-2 bg-green-500 text-sm text-white"
            style={{ width: '290px' }}>
            <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
            <path fill="#fcfcfd" d="M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
                Browse All Categories
            </span>
            </aside>

                <span className="flex-grow mx-4">
                <nav aria-label="Global">
                    <ul className="flex items-center gap-16 text-sm">
                    <li className="flex items-center text-sm font-medium text-gray-700 transition hover:text-gray-500/75">
                    <svg
                    className="h-5 w-5 mr-2" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                    </svg>
                    <Link href={"/"}>Home</Link>
                </li>
                    <li>
                    <a className="flex items-center text-sm font-medium text-gray-700 transition hover:text-gray-500/75" href="#">
                    <svg 
                    className="h-5 w-5 mr-2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512">
                    <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg> 
                    Hot deals </a>
                    </li>
                    <li>
                        <a className="flex items-center text-sm font-medium text-gray-700 transition hover:text-gray-500/75" href="#"> 
                        <svg 
                        className="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 384 512">
                            <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
                        Promotions </a>
                    </li>
                    <li>
                        <a className="flex items-center text-sm font-medium text-gray-700 transition hover:text-gray-500/75" href="#"> 
                        <svg
                        className="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"/></svg>
                        New Products </a>
                    </li>
                    <li>
                        <a className="flex items-center text-sm font-medium text-gray-700 transition hover:text-gray-500/75" href="#"> 
                        <svg
                        className="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        1233-7777 24/7 support center </a>
                    </li>
                    </ul>
                </nav>
                </span>
            </div>
            </div>
  );
};

export default BrowseCategory;