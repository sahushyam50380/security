import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const DisputeHistoryPage = () => {
  const [activeTab, setActiveTab] = useState('services'); // 'services' or 'projects'

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dispute History</h1>
        </div>

        {/* Tab Buttons Section */}
        <div className="mb-6">
          <button
            onClick={() => setActiveTab('services')}
            className={`mr-4 py-2 px-6 rounded-md ${activeTab === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-2 px-6 rounded-md ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Projects
          </button>
        </div>

        {/* Table Section */}
        {activeTab === 'services' ? (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Service Name</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Date</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Price</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Freelancer</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm text-gray-800">Service 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">2025-01-01</td>
                  <td className="py-3 px-6 text-sm text-gray-800">$300</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Freelancer 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Disputed</td>
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
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Project Name</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Client</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Amount</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Deadline</th>
                  <th className="py-3 px-6 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm text-gray-800">Project 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Client 1</td>
                  <td className="py-3 px-6 text-sm text-gray-800">$1000</td>
                  <td className="py-3 px-6 text-sm text-gray-800">2025-02-01</td>
                  <td className="py-3 px-6 text-sm text-gray-800">Disputed</td>
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

export default DisputeHistoryPage;
