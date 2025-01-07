import React from "react";
import { HomeIcon, BriefcaseIcon, DocumentTextIcon, CreditCardIcon } from "@heroicons/react/solid";
import Sidebar from "./Sidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Example data for graph (you can replace this with real data)
  const data = [
    { name: "Jan", ProfileViews: 50 },
    { name: "Feb", ProfileViews: 60 },
    { name: "Mar", ProfileViews: 70 },
    { name: "Apr", ProfileViews: 80 },
    { name: "May", ProfileViews: 90 },
    { name: "Jun", ProfileViews: 100 }
  ];

  // Sample service orders
  const orders = [
    {
      title: "I will edit, mix and produce your podcast and audio editing",
      rating: "5.0 (1)",
      sales: "0 sale",
      views: "214 views",
      status: "Opening",
      posted: "September 23, 2024"
    },
    {
      title: "I will compose and produce your music",
      rating: "0 (0)",
      sales: "1 sale",
      views: "162 views",
      status: "Opening",
      posted: "September 23, 2024"
    },
    {
      title: "I will narrate and or produce your audiobook in spanish featured",
      rating: "5.0 (1)",
      sales: "0 sale",
      views: "341 views",
      status: "Opening",
      posted: "September 23, 2024"
    },
    {
      title: "I will write SEO articles and blog posts within 24 hours featured",
      rating: "5.0 (1)",
      sales: "0 sale",
      views: "196 views",
      status: "Opening",
      posted: "July 2, 2024"
    }
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        {/* Greeting Section */}
        <h1 className="text-2xl font-bold mb-4">Welcome back! Jen Jay</h1>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Posted Services */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Posted Services</h3>
              <p className="text-2xl font-semibold text-gray-700">7</p>
            </div>
            <HomeIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Ordered Services */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Ordered Services</h3>
              <p className="text-2xl font-semibold text-gray-700">6</p>
            </div>
            <BriefcaseIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Proposal Submitted */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h5 className="text-sm text-gray-700">Proposal Submitted</h5>
              <p className="text-2xl font-semibold text-gray-700">4</p>
            </div>
            <DocumentTextIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Revenue Earned */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Revenue Earned</h3>
              <p className="text-2xl font-semibold text-gray-700">$6,165</p>
            </div>
            <CreditCardIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>
        </div>

        {/* Profile Views Section */}
        <div className="bg-white p-6 mt-8 rounded-lg border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Profile Views</h3>
          {/* Graph for Profile Views using Recharts */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ProfileViews" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Service Orders Section */}
        <div className="bg-white p-6 mt-8 rounded-lg border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Service Orders</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Posted</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-700">{order.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{order.status}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{order.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
