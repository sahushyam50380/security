import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const MyServices = () => {
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'wishlist'

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">My Services</h1>
        </div>

        {/* Tab Buttons Section */}
        <div className="mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`mr-4 py-2 px-6 rounded-md ${activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            My Orders
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-2 px-6 rounded-md ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            My Wishlist
          </button>
        </div>

        {/* Table Section */}
        {activeTab === 'orders' ? (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Service</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Date</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Price</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm text-gray-800">Service 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">2025-01-01</td>
                  <td className="py-3 px-6 text-sm text-gray-800">$500</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Completed</td>
                </tr>
                {/* More rows can be added dynamically here */}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Service Title</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Provider</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Price</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Posted Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm text-gray-800">Service 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Provider 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">$300</td>
                  <td className="py-3 px-6 text-sm text-gray-800">2025-01-05</td>
                </tr>
                {/* More rows can be added dynamically here */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServices;
