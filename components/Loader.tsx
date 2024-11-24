import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F4F4F9]">
      <div className="w-12 h-12 border-4 border-Gray border-t-Green border-r-GoldenYellow rounded-full animate-spin"></div>
    </div>
  );
}