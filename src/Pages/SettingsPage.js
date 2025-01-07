import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Assuming you have a Sidebar component

const SettingsPage = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [payoutMethod, setPayoutMethod] = useState("bank");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [stripeAccount, setStripeAccount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [bankName, setBankName] = useState("");
  const [activeSection, setActiveSection] = useState("password"); // Default to 'password' section

  const handlePasswordChange = () => {
    if (newPassword === confirmPassword) {
      alert("Password changed successfully!");
      // You can add logic to handle password change here
    } else {
      alert("Passwords do not match!");
    }
  };

  const handlePayoutMethodChange = (event) => {
    setPayoutMethod(event.target.value);
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Assuming you have a Sidebar component for navigation */}
      <div className="ml-80 mt-20 flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>

        {/* Links to toggle sections */}
        <div className="flex gap-8 mb-4">
          <p
            onClick={() => setActiveSection("password")}
            className={`cursor-pointer ${activeSection === "password" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
          >
            Change Password
          </p>
          <p
            onClick={() => setActiveSection("payout")}
            className={`cursor-pointer ${activeSection === "payout" ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
          >
            Payout Method
          </p>
        </div>

        {/* Change Password Section */}
        {activeSection === "password" && (
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 mb-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Change Password</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Current Password"
                className="w-full border border-gray-300 rounded p-2 mb-2"
              />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="w-full border border-gray-300 rounded p-2 mb-2"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm New Password"
                className="w-full border border-gray-300 rounded p-2 mb-4"
              />
              <button
                onClick={handlePasswordChange}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Change Password
              </button>
            </div>
          </div>
        )}

        {/* Payout Method Section */}
        {activeSection === "payout" && (
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Payout Method</h3>

              {/* Radio Buttons for Payout Methods */}
              <div className="flex gap-8 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bank"
                    checked={payoutMethod === "bank"}
                    onChange={handlePayoutMethodChange}
                    className="mr-2"
                  />
                  Bank Transfer
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="paypal"
                    checked={payoutMethod === "paypal"}
                    onChange={handlePayoutMethodChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="stripe"
                    checked={payoutMethod === "stripe"}
                    onChange={handlePayoutMethodChange}
                    className="mr-2"
                  />
                  Stripe
                </label>
              </div>

              {/* Conditional Inputs for Each Payout Method */}
              {payoutMethod === "paypal" && (
                <div className="mb-6">
                  <label htmlFor="paypalEmail" className="block text-sm font-semibold mb-2">
                    PayPal Email
                  </label>
                  <input
                    type="email"
                    id="paypalEmail"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    placeholder="Enter your PayPal email"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              )}

              {payoutMethod === "stripe" && (
                <div className="mb-6">
                  <label htmlFor="stripeAccount" className="block text-sm font-semibold mb-2">
                    Stripe Account
                  </label>
                  <input
                    type="text"
                    id="stripeAccount"
                    value={stripeAccount}
                    onChange={(e) => setStripeAccount(e.target.value)}
                    placeholder="Enter your Stripe account ID"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              )}

              {payoutMethod === "bank" && (
                <div className="mb-6">
                  <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter your card number"
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />
                  
                  <label htmlFor="cardName" className="block text-sm font-semibold mb-2">
                    Card Name
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Enter the cardholder's name"
                    className="w-full border border-gray-300 rounded p-2 mb-2"
                  />

                  <label htmlFor="bankName" className="block text-sm font-semibold mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Enter your bank name"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              )}
            </div>

            {/* Buttons for saving or canceling */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => alert("Settings Saved")}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Save Settings
              </button>
              <button
                onClick={() => alert("Settings Canceled")}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
