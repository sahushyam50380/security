import React from "react";
import Sidebar from "./Sidebar";

// Importing Heroicons
import { CurrencyDollarIcon, CloudUploadIcon, ArchiveIcon } from '@heroicons/react/solid';

const Wallet = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Wallet</h1>

        {/* Wallet Info */}
        <div className="grid grid-cols-3 gap-6">
          {/* Withdrawable Balance */}
          <div className="bg-white shadow-md rounded p-6 border border-gray-300">
            <div className="flex flex-row-reverse items-center mb-4">
              <CurrencyDollarIcon className="w-6 h-6 text-gray-700 ml-3" />
              <h2 className="text-lg font-semibold text-gray-700">Withdrawable Balance</h2>
            </div>
            <p className="text-2xl font-bold text-gray-900">$2,500.00</p>
          </div>

          {/* Withdraw Requested */}
          <div className="bg-white shadow-md rounded p-6 border border-gray-300">
            <div className="flex flex-row-reverse items-center mb-4">
              <CloudUploadIcon className="w-6 h-6 text-gray-700 ml-3" />
              <h2 className="text-lg font-semibold text-gray-700">Withdraw Requested</h2>
            </div>
            <p className="text-2xl font-bold text-gray-900">$1,000.00</p>
          </div>

          {/* Withdrawn */}
          <div className="bg-white shadow-md rounded p-6 border border-gray-300">
            <div className="flex flex-row-reverse items-center mb-4">
              <ArchiveIcon className="w-6 h-6 text-gray-700 ml-3" />
              <h2 className="text-lg font-semibold text-gray-700">Withdrawn</h2>
            </div>
            <p className="text-2xl font-bold text-gray-900">$500.00</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mt-6 flex items-center justify-between">
          {/* Left Filters */}
          <div className="flex gap-6">
            {/* Payout Method Dropdown */}
            <div>
              <label htmlFor="payout-method" className="block text-sm font-medium text-gray-700 mb-2">
                Payout Method
              </label>
              <select
                id="payout-method"
                className="block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white hover:text-blue-500"
              >
                <option>Wire Transfer</option>
                <option>Pay with Stripe</option>
                <option>Pay with PayPal</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                All Status
              </label>
              <select
                id="status"
                className="block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-300 focus:border-blue-500 text-gray-700 bg-white hover:text-blue-500"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Canceled</option>
              </select>
            </div>
          </div>

          {/* Right Sort By */}
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sort-by"
              className="block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white hover:text-blue-500"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-300"></div>

        {/* Table Columns */}
        <div className="mt-4 grid grid-cols-5 gap-4 text-sm font-semibold text-gray-600 uppercase">
          <div>Payout Method</div>
          <div>Status</div>
          <div>Amount</div>
          <div>Request Date</div>
          <div>Process Date</div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-300"></div>

        {/* Table Data */}
        <div className="mt-4 grid ml-2 grid-cols-5 gap-4 text-sm text-gray-700">
          <div>Stripe</div>
          <div className=" text-yellow-700 font-sm rounded-full px-4 py-1">Pending</div>
          <div>$1960</div>
          <div>December 23, 2024</div>
          <div>...</div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default Wallet;
