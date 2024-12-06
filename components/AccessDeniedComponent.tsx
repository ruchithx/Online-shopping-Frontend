import Link from 'next/link';
import React from 'react';

export default function AccessDeniedComponent() {
  return (
    <div className="flex flex-col bg-white items-center justify-center min-h-screen  text-red-900">
      <div className="p-8 bg-white bg-opacity-90 text-center rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-md">
          Access Denied
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          You do not have the necessary permissions to view this page.
        </p>
      </div>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
