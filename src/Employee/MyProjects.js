import React from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const MyProjects = () => {
  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">My Projects</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Create New Project
          </button>
        </div>

        {/* Projects Table Section */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Title</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Posted</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Price</th>
                <th className="py-3 px-6 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-sm text-gray-800">Project 1</td>
                <td className="py-3 px-6 text-sm text-gray-800">2025-01-01</td>
                <td className="py-3 px-6 text-sm text-gray-800">$500</td>
                <td className="py-3 px-6 text-sm text-gray-800">Active</td>
              </tr>
              {/* More rows can be added dynamically here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
