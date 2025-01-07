import { useState } from "react";
import Sidebar from "./Sidebar";

const DisputeHistory = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (

    <div className="flex">
    <Sidebar />
    <div className="ml-64 flex-1 p-6 overflow-x-auto">
    {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Dispute History</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-6 text-lg font-semibold">
        <span
          onClick={() => setActiveTab("services")}
          className={`cursor-pointer ${
            activeTab === "services" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          Services
        </span>
        <span
          onClick={() => setActiveTab("projects")}
          className={`cursor-pointer ${
            activeTab === "projects" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          Projects
        </span>
      </div>

      {/* Services Content */}
      {activeTab === "services" && (
        <div className="bg-white shadow-md rounded p-4">
          <div className="grid grid-cols-5 font-bold text-xs uppercase border-b border-gray-300 pb-2 mb-4">
            <div>Service Name</div>
            <div>Date</div>
            <div>Price</div>
            <div>Employer</div>
            <div className="text-right">Status</div>
          </div>

          {/* Data Row */}
          <div className="grid grid-cols-5 items-center text-sm py-2 border-b border-gray-200">
            <div className="truncate">
              I will be your professional product model and photographer featured
            </div>
            <div>November 4, 2024</div>
            <div>$130</div>
            <div>Kevin Kay</div>
            <div className="text-right">
              Closed
              <button className="ml-4 text-blue-600 underline">Details</button>
            </div>
          </div>
        </div>
      )}

      {/* Projects Content */}
      {activeTab === "projects" && (
        <div className="text-center bg-white shadow-md rounded p-4">
          <p className="text-gray-500 font-medium">No item found</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default DisputeHistory;
