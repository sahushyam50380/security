import React from "react";
import { HomeIcon, BriefcaseIcon, DocumentTextIcon, ChatIcon, CogIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { CreditCardIcon } from '@heroicons/react/solid';
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom


const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-sky-800 text-white flex flex-col p-4 shadow-lg fixed h-screen overflow-y-auto">
        <h2 className="text-center text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-services" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >              
            <BriefcaseIcon className="h-5 w-5 mr-2" />
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-proposals" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >              
            <DocumentTextIcon className="h-5 w-5 mr-2" />
              Proposals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >
              <ChatIcon className="h-5 w-5 mr-2" />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-wallet" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >
              <CreditCardIcon className="h-5 w-5 mr-2" />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile-setting" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >              
            <UserIcon className="h-5 w-5 mr-2" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >
              <CogIcon className="h-5 w-5 mr-2" />
              Settings
            </NavLink>
          </li>
          {/* New Menu Items */}
          <li>
            <NavLink
              to="/my-package" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >              
            <DocumentTextIcon className="h-5 w-5 mr-2" />
              My Package
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard" // Add the correct route for your Dashboard
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700" // Optional: styling for active link
            >              
            <UserIcon className="h-5 w-5 mr-2" />
              My Following
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/dashboard" // Add the correct route for your Dashboard
            className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
            activeClassName="bg-sky-700" // Optional: styling for active link
          >
            <LogoutIcon className="h-5 w-5 mr-2" />
            Logout
          </NavLink>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
