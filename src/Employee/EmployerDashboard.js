import React from "react";
import { HomeIcon, BriefcaseIcon, DocumentTextIcon, CreditCardIcon } from "@heroicons/react/solid";
import EmployeeSidebar from "./EmployeeSidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmployerDashboard = () => {
  // Example data for graph (you can replace this with real data)
  const data = [
    { name: "Jan", ProfileViews: 30 },
    { name: "Feb", ProfileViews: 40 },
    { name: "Mar", ProfileViews: 60 },
    { name: "Apr", ProfileViews: 80 },
    { name: "May", ProfileViews: 100 },
    { name: "Jun", ProfileViews: 120 }
  ];

  // Sample service orders
  const orders = [
    {
      title: "I will create a responsive WordPress website for your business",
      rating: "4.8 (3)",
      sales: "3 sales",
      views: "312 views",
      status: "Completed",
      posted: "November 10, 2024"
    },
    {
      title: "I will design an engaging logo for your brand",
      rating: "4.5 (2)",
      sales: "5 sales",
      views: "421 views",
      status: "In Progress",
      posted: "October 22, 2024"
    },
    {
      title: "I will optimize your website for SEO and better ranking",
      rating: "5.0 (5)",
      sales: "10 sales",
      views: "542 views",
      status: "Opening",
      posted: "September 15, 2024"
    },
    {
      title: "I will write high-quality content for your blog",
      rating: "4.7 (4)",
      sales: "7 sales",
      views: "389 views",
      status: "Completed",
      posted: "August 10, 2024"
    }
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <EmployeeSidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        {/* Greeting Section */}
        <h1 className="text-2xl font-bold mb-4">Welcome back! Kevin Kay</h1>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Posted Projects */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Posted Projects</h3>
              <p className="text-2xl font-semibold text-gray-700">13</p>
            </div>
            <HomeIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Proposals Received */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Proposals Received</h3>
              <p className="text-2xl font-semibold text-gray-700">3</p>
            </div>
            <BriefcaseIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Bought Services */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h5 className="text-sm text-gray-700">Bought Services</h5>
              <p className="text-2xl font-semibold text-gray-700">15</p>
            </div>
            <DocumentTextIcon className="h-8 w-8 text-white bg-green-500 p-2 rounded-lg ml-8 mb-8" />
          </div>

          {/* Total Spending */}
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-700">Total Spending</h3>
              <p className="text-2xl font-semibold text-gray-700">$274</p>
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

export default EmployerDashboard;
