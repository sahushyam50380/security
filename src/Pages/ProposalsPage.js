import React, { useState } from "react";
import Sidebar from "./Sidebar";

const ProposalsPage = () => {
  const [activeSection, setActiveSection] = useState("orders");

  const orders = [
    {
      title: "Landing Page Design",
      budgetTime: "$500 | 2 weeks",
      status: "Completed",
      action: "View Details",
    },
    {
      title: "Logo Design",
      budgetTime: "$300 | 1 week",
      status: "In Progress",
      action: "View Details",
    },
  ];

  const wishlist = [
    {
      title: "Mobile App Development",
      employer: "Tech Corp",
      postedDate: "October 15, 2024",
    },
    {
      title: "E-commerce Website",
      employer: "Fashion Store",
      postedDate: "November 1, 2024",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">My Proposals</h1>

        {/* Toggle between My Orders and Project Wishlist */}
        <div className="flex mb-6">
          <button
            className={`px-6 py-2 mr-4 text-sm font-semibold rounded-lg ${activeSection === "orders" ? "text-blue-500" : "text-gray-700"}`}
            onClick={() => setActiveSection("orders")}
          >
            My Orders
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-lg ${activeSection === "wishlist" ? "text-blue-500" : "text-gray-700"}`}
            onClick={() => setActiveSection("wishlist")}
          >
            Project Wishlist
          </button>
        </div>

        {/* Display content based on active section */}
        {activeSection === "orders" && (
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase">MY ORDERS</h3>
            <div className="divider mb-4 border-t-2 border-gray-300"></div>
            <table className="min-w-[1000px] table-auto"> {/* Set custom width */}
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Project Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Budget/Time</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-700">{order.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.budgetTime}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.status}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === "wishlist" && (
          <div className="bg-white p-6 rounded-lg border border-gray-300 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase">PROJECT WISHLIST</h3>
            <div className="divider mb-4 border-t-2 border-gray-300"></div>
            <table className="min-w-[1000px] table-auto"> {/* Set custom width */}
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Project Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Employer</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Posted Date</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((project, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-700">{project.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{project.employer}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{project.postedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalsPage;
