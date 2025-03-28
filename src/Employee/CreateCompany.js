import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Assuming the sidebar component is imported

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [companyUrlSlug, setCompanyUrlSlug] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [foundedIn, setFoundedIn] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [logo, setLogo] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [socialNetworks, setSocialNetworks] = useState({
    twitter: '',
    linkedin: '',
    facebook: '',
    instagram: ''
  });
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'companyName') setCompanyName(value);
    if (name === 'name') setName(value);
    if (name === 'category') setCategory(value);
    if (name === 'companyUrlSlug') setCompanyUrlSlug(value);
    if (name === 'aboutCompany') setAboutCompany(value);
    if (name === 'website') setWebsite(value);
    if (name === 'phoneNumber') setPhoneNumber(value);
    if (name === 'email') setEmail(value);
    if (name === 'foundedIn') setFoundedIn(value);
    if (name === 'companySize') setCompanySize(value);
    if (name === 'socialNetworks') setSocialNetworks({ ...socialNetworks, [e.target.name]: e.target.value });
    if (name in address) setAddress({ ...address, [name]: value });
  };

  const handleLogoChange = (e) => setLogo(e.target.files[0]);
  const handleCoverImageChange = (e) => setCoverImage(e.target.files[0]);

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Create New Company</h1>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Info</h2>

          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-600">Company Name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories Dropdown */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-600">Categories *</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select an option</option>
              <option value="AI">AI</option>
              <option value="SaaS">SaaS</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="EnterpriseSoftware">Enterprise Software</option>
            </select>
          </div>

          {/* Company URL Slug */}
          <div className="mb-4">
            <label htmlFor="companyUrlSlug" className="block text-gray-600">Company URL Slug</label>
            <input
              type="text"
              id="companyUrlSlug"
              name="companyUrlSlug"
              value={companyUrlSlug}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* About Company */}
          <div className="mb-4">
            <label htmlFor="aboutCompany" className="block text-gray-600">About Company *</label>
            <textarea
              id="aboutCompany"
              name="aboutCompany"
              value={aboutCompany}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Website */}
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-600">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={website}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Founded in */}
          <div className="mb-4">
            <label htmlFor="foundedIn" className="block text-gray-600">Founded in</label>
            <input
              type="number"
              id="foundedIn"
              name="foundedIn"
              value={foundedIn}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company Size */}
          <div className="mb-4">
            <label htmlFor="companySize" className="block text-gray-600">Company Size *</label>
            <select
              id="companySize"
              name="companySize"
              value={companySize}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select an option</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              {/* More options */}
            </select>
          </div>

          {/* Media Section */}
          <div className="mb-4">
            <label htmlFor="logo" className="block text-gray-600">Logo</label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleLogoChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
            <p className="text-xs text-gray-500">Maximum file size: 1000kb.</p>
          </div>

          <div className="mb-4">
            <label htmlFor="coverImage" className="block text-gray-600">Cover Image</label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              onChange={handleCoverImageChange}
              className="w-full border border-gray-300 rounded-md p-3 mt-1"
            />
            <p className="text-xs text-gray-500">The cover image size should be max 1920 x 400px.</p>
          </div>

          {/* Social Networks Section */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Social Networks</h2>
          {['twitter', 'linkedin', 'facebook', 'instagram'].map((network) => (
            <div className="mb-4" key={network}>
              <label htmlFor={network} className="block text-gray-600">{network.charAt(0).toUpperCase() + network.slice(1)}</label>
              <input
                type="url"
                id={network}
                name={network}
                value={socialNetworks[network]}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Address Section */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Address</h2>
          <div className="flex space-x-2">
            {['street', 'city', 'state', 'zip'].map((field) => (
              <div className="flex-1" key={field}>
                <label htmlFor={field} className="block text-gray-600">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={address[field]}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between mt-6">
            <button className="bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600">
              Cancel
            </button>
            <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
