import React from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const MyCompany = () => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Companies</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Add New Company
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Status</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Category</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Active Jobs</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-800">Company 1</td>
                <td className="py-3 px-6 text-sm text-gray-800">Active</td>
                <td className="py-3 px-6 text-sm text-gray-800">Tech</td>
                <td className="py-3 px-6 text-sm text-gray-800">5</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-800">Company 2</td>
                <td className="py-3 px-6 text-sm text-gray-800">Inactive</td>
                <td className="py-3 px-6 text-sm text-gray-800">Marketing</td>
                <td className="py-3 px-6 text-sm text-gray-800">3</td>
              </tr>
              {/* More rows can be added dynamically here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
