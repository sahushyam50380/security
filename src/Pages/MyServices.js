import React, { useState } from "react";
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/solid";
import Sidebar from "./Sidebar";

const MyServicesPage = () => {
  // Initializing state to track which section is active (My Services or Orders)
  const [activeSection, setActiveSection] = useState("services");

  // Sample service data
  const services = [
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
    // Add more services here...
  ];

  // Sample order data
  const orders = [
    {
      title: "I will compose and produce your music",
      rating: "0 (0)",
      sales: "1 sale",
      views: "162 views",
      orderDate: "November 4, 2024",
      deadline: "Expired",
      price: "$231",
      status: "Completed"
    },
    {
      title: "I will design, redesign wordpress landing page elementor",
      rating: "4.3 (1)",
      sales: "1 sale",
      views: "168 views",
      orderDate: "November 4, 2024",
      deadline: "Expired",
      price: "$142",
      status: "Completed"
    },
    // Add more orders here...
  ];

  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">My Services</h1>

        {/* Toggle between services and orders */}
        <div className="flex mb-6">
          <button
            className={`px-6 py-2 mr-4 text-sm font-semibold rounded-lg ${activeSection === "services" ? "text-blue-500" : "text-gray-700"}`}
            onClick={() => setActiveSection("services")}
          >
            My Services
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-lg ${activeSection === "orders" ? "text-blue-500" : "text-gray-700"}`}
            onClick={() => setActiveSection("orders")}
          >
            My Orders
          </button>
        </div>

        {/* Display content based on active section */}
        {activeSection === "services" && (
            <div className="bg-white p-6 rounded-lg border border-gray-300 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase">MY SERVICES</h3>
            <div className="divider mb-4 border-t-2 border-gray-300"></div>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Posted</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-700">{service.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{service.status}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{service.posted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === "orders" && (
          <div className="bg-white p-6 rounded-lg border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 uppercase">MY ORDERS</h3>
            <div className="divider mb-4 border-t-2 border-gray-300"></div>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Service</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Date</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Price</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-700">{order.title}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.orderDate}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.price}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{order.status}</td>
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

export default MyServicesPage;
