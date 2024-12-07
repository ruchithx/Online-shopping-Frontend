import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 rounded-md flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          Logout
        </button> */}
      </header>

      {/* Main Content */}
      <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Products Count */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-medium text-gray-700">Total Products</h2>
          <p className="mt-4 text-3xl font-semibold text-gray-800">18</p>
        </div>

        {/* Orders Count */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-medium text-gray-700">Total Orders</h2>
          <p className="mt-4 text-3xl font-semibold text-gray-800">7</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
