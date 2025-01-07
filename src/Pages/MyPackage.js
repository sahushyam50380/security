import React from "react";
import Sidebar from "./Sidebar";

const MyPackage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 overflow-x-auto">
      {/* Title */}
        <h1 className="text-2xl font-bold mb-6 mt-8">My Package</h1>

        {/* Table */}
        <div className="bg-white shadow-md rounded overflow-hidden ml-4">
          {/* Table Header */}
          <div className="grid grid-cols-6 font-bold text-xs uppercase bg-gray-200 text-gray-700 py-3 px-4 gap-x-12">
            <div>ID</div>
            <div>Package Name</div>
            <div>Status</div>
            <div>Activation Date</div>
            <div>Expiration Date</div>
            <div className="text-right">Date Remaining</div>
          </div>

          {/* Table Data */}
          <div className="grid grid-cols-6 text-sm py-4 px-4 border-b border-gray-200">
            <div>#102</div>
            <div>Extended</div>
            <div className="text-green-500 font-semibold">Actived</div>
            <div>December 18, 2024</div>
            <div>January 17, 2025</div>
            <div className="text-right">25 Days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPackage;
