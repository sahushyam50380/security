import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const EmployerSettings = () => {
  const [photo, setPhoto] = useState(null);
  const [firstName, setFirstName] = useState('Kevin');
  const [lastName, setLastName] = useState('Kay');
  const [email, setEmail] = useState('ricethemascdfghgfhge@gmail.com');
  const [phone, setPhone] = useState('+841234567890');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);

  const handleSavePersonalInfo = () => {
    alert('Personal information saved!');
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      alert('Password changed successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Info</h2>

          {/* Your Photo */}
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-600">Your Photo</label>
            <input
              type="file"
              id="photo"
              onChange={handlePhotoChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
            <p className="text-xs text-gray-500 mt-2">No file chosen. If no photo is set, your default avatar will be used.</p>
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
              disabled
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          <button
            onClick={handleSavePersonalInfo}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>

        {/* Change Password Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Change Password</h2>

          {/* Current Password */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-gray-600">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-600">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          {/* Confirm New Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>

          <button
            onClick={handleChangePassword}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployerSettings;
