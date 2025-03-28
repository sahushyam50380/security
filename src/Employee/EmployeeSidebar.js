import React from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ChatIcon,
  CogIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const EmployeeSidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-sky-800 text-white flex flex-col p-4 shadow-lg fixed h-screen overflow-y-auto">
        <h2 className="text-center text-2xl font-bold mb-6">
          Employer
        </h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/employee-dashboard"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-projects"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bought-services"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Bought Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/disputes"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Disputes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-company"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              My Company
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <ChatIcon className="h-5 w-5 mr-2" />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-package"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <CreditCardIcon className="h-5 w-5 mr-2" />
              My Package
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/follow"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Follow
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
            >
              <CogIcon className="h-5 w-5 mr-2" />
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className="flex items-center px-4 py-2 rounded hover:bg-sky-600"
              activeClassName="bg-sky-700"
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

export default EmployeeSidebar;
