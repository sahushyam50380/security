import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const MyPackages = () => {
  // Example data for the table (replace this with actual data as needed)
  const packagesData = [
    { id: 1, name: 'Package A', numberOfJobs: 5, numberOfFeatured: 2, jobDuration: '1 month', status: 'Active' },
    { id: 2, name: 'Package B', numberOfJobs: 10, numberOfFeatured: 4, jobDuration: '3 months', status: 'Inactive' },
    { id: 3, name: 'Package C', numberOfJobs: 3, numberOfFeatured: 1, jobDuration: '6 months', status: 'Active' },
    // Add more packages as needed
  ];

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">My Packages</h1>
          
          {/* Add New Package Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Add New Package
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Package Details</h2>

          {/* Table */}
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left text-gray-600">ID</th>
                <th className="py-3 px-6 text-left text-gray-600">Package Name</th>
                <th className="py-3 px-6 text-left text-gray-600">Number of Jobs</th>
                <th className="py-3 px-6 text-left text-gray-600">Number of Featured Jobs</th>
                <th className="py-3 px-6 text-left text-gray-600">Job Duration</th>
                <th className="py-3 px-6 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {packagesData.map((pkg) => (
                <tr key={pkg.id} className="border-t">
                  <td className="py-3 px-6 text-gray-600">{pkg.id}</td>
                  <td className="py-3 px-6 text-gray-600">{pkg.name}</td>
                  <td className="py-3 px-6 text-gray-600">{pkg.numberOfJobs}</td>
                  <td className="py-3 px-6 text-gray-600">{pkg.numberOfFeatured}</td>
                  <td className="py-3 px-6 text-gray-600">{pkg.jobDuration}</td>
                  <td className="py-3 px-6 text-gray-600">{pkg.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPackages;
