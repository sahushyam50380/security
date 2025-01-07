import React, { useState } from "react";
import Sidebar from "./Sidebar";

const ProfileSettings = () => {
  const [activeSection, setActiveSection] = useState("Basic Info");
  const [selectedSkills, setSelectedSkills] = useState([]); // Array to store multiple selected skills
  const [newAward, setNewAward] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleAwardInputChange = (field, value) => {
    setNewAward({ ...newAward, [field]: value });
  };

  const handleCancel = () => {
    setNewAward({ title: "", date: "", description: "" });
  };

  const handlePublish = () => {
    alert("Your award has been published!");
    // You can replace this with logic to save or submit the award data
  };

  

  const renderSection = () => {
    if (activeSection === "Basic Info") {
      return (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Profile Fields */}
            <div>
              <label className="block text-gray-700">Your Photo</label>
              <img
                src="https://felan.ricetheme.com/wp-content/uploads/2024/07/freelnce-2.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full border border-gray-300 mb-2"
              />
              <p className="text-sm text-gray-500">Maximum file size: 1000kb.</p>
            </div>
            <div>
              <label className="block text-gray-700">Cover Image</label>
              <div className="border-dashed border-2 border-gray-300 p-4 rounded mb-2 text-center">
                Click here or drop files to upload
              </div>
              <input type="file" className="block w-full text-sm text-gray-500" />
              <p className="text-sm text-gray-500">The cover image size should be max 1920 x 400px.</p>
            </div>
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                defaultValue="Jen"
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                defaultValue="Jav"
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                defaultValue="freelancer@demo.com"
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                defaultValue="+358123123"
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Current Position</label>
              <input
                type="text"
                defaultValue="Ux Ui design"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Categories</label>
              <input
                type="text"
                defaultValue="Design & Creative"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Description</label>
              <textarea
                defaultValue="VisualText Paragraph"
                className="block w-full border border-gray-300 rounded p-2 h-20 text-sm"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Date of Birth</label>
              <input
                type="text"
                defaultValue="December 10, 1993"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Age</label>
              <input
                type="text"
                defaultValue="25 – 30"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Gender</label>
              <input
                type="text"
                defaultValue="Male"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Languages</label>
              <input
                type="text"
                defaultValue="Deutsch"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Qualification</label>
              <input
                type="text"
                defaultValue="Associate Degree"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Years of Experience</label>
              <input
                type="text"
                defaultValue="1 – 2 Years"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Offer Salary</label>
              <input
                type="text"
                defaultValue="100"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Salary Type</label>
              <input
                type="text"
                defaultValue="Monthly"
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Currency</label>
              <input
                type="text"
                defaultValue=""
                className="block w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4 mt-8">Address</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700">Street Address</label>
      <input
        type="text"
        defaultValue="123 Main St"
        className="block w-full border border-gray-300 rounded p-2 text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">City</label>
      <input
        type="text"
        defaultValue="Springfield"
        className="block w-full border border-gray-300 rounded p-2 text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">State</label>
      <input
        type="text"
        defaultValue="IL"
        className="block w-full border border-gray-300 rounded p-2 text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">Zip Code</label>
      <input
        type="text"
        defaultValue="62701"
        className="block w-full border border-gray-300 rounded p-2 text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">Country</label>
      <input
        type="text"
        defaultValue="United States"
        className="block w-full border border-gray-300 rounded p-2 text-sm"
      />
    </div>
  </div>
  <h2 className="text-xl font-semibold mb-4 mt-8">Resume</h2>
  <h5 className="text-sm mb-4">CV Attachment</h5>

<div>
<div className="block">
  <label
    htmlFor="file-upload"
    className="inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded cursor-pointer"
  >
    Browse
  </label>
  <input
    id="file-upload"
    type="file"
    accept=".doc,.docx,.pdf"
    className="hidden"
  />
</div>
<label className="block text-gray-700 mb-2">Upload file: doc, docx, pdf</label>


</div>
<h2 className="text-xl font-semibold mb-4 mt-8">Social Network</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div>
    <label className="block text-gray-700">Twitter</label>
    <input
      type="text"
      defaultValue="twitter.com/freelancer"
      className="block w-full border border-gray-300 rounded p-2 text-sm"
    />
  </div>
  <div>
    <label className="block text-gray-700">LinkedIn</label>
    <input
      type="text"
      defaultValue="linkedin.com/freelancer"
      className="block w-full border border-gray-300 rounded p-2 text-sm"
    />
  </div>
  <div>
    <label className="block text-gray-700">Facebook</label>
    <input
      type="text"
      defaultValue="facebook.com/freelancer"
      className="block w-full border border-gray-300 rounded p-2 text-sm"
    />
  </div>
  <div>
    <label className="block text-gray-700">Instagram</label>
    <input
      type="text"
      defaultValue="instagram.com/freelancer"
      className="block w-full border border-gray-300 rounded p-2 text-sm"
    />
  </div>
</div>
<div className="flex justify-end mt-6">
  <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded mr-2">
    Cancel
  </button>
  <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded">
    Publish
  </button>
</div>
     </div>
      );
    }

    if (activeSection === "Education") {
        return (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <p className="text-gray-600 mb-4">We recommend at least one education entry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  defaultValue="New York University"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Level of Education</label>
                <input
                  type="text"
                  defaultValue="Bachelor Degree"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">From</label>
                <input
                  type="date"
                  defaultValue="2017-03-04"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">To</label>
                <input
                  type="date"
                  defaultValue="2021-04-01"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  defaultValue="Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est."
                  className="block w-full border border-gray-300 rounded p-2 h-20"
                ></textarea>
              </div>
              <div>
              <label className="block text-gray-700">About You</label>
              <textarea
                defaultValue="Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est."
                className="block w-full border border-gray-300 rounded p-2 h-20"
              ></textarea>
            </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded mr-2">
                Cancel
              </button>
              <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded">
                Publish
              </button>
            </div>
          </div>
        );
      }

      if (activeSection === "Project") {
        return (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Project</h2>
            <p className="text-gray-600 mb-4">We recommend at least one project entry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  defaultValue="My Portfolio Website"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  defaultValue="This is a personal portfolio website showcasing my web development projects."
                  className="block w-full border border-gray-300 rounded p-2 h-20"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded mr-2">
                Cancel
              </button>
              <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded">
                Publish
              </button>
            </div>
          </div>
        );
      }
      

      if (activeSection === "Experience") {
        return (
          <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-600 mb-4">We recommend at least one Experience entry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700"> Job Title</label>
                <input
                  type="text"
                  defaultValue="New York University"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  defaultValue="Bachelor Degree"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">From</label>
                <input
                  type="date"
                  defaultValue="2017-03-04"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">To</label>
                <input
                  type="date"
                  defaultValue="2021-04-01"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  defaultValue="Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est."
                  className="block w-full border border-gray-300 rounded p-2 h-20"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded mr-2">
                Cancel
              </button>
              <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded">
                Publish
              </button>
            </div>
          </div>
        );
      }


      if (activeSection === "Experiences") {
        return (
          <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4"> write Experience</h2>
          <p className="text-gray-600 mb-4">We recommend at least one Experience entry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700"> Job Title</label>
                <input
                  type="text"
                  defaultValue="New York University"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  defaultValue="Bachelor Degree"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">From</label>
                <input
                  type="date"
                  defaultValue="2017-03-04"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">To</label>
                <input
                  type="date"
                  defaultValue="2021-04-01"
                  className="block w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  defaultValue="Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est."
                  className="block w-full border border-gray-300 rounded p-2 h-20"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded mr-2">
                Cancel
              </button>
              <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded">
                Publish
              </button>
            </div>
          </div>
        );
      }

  // Skills list
  const skillsList = [
    "AI Developer",
    "Content Editor",
    "Developer",
    "Frontend",
    "Media Editor",
    "Product Manager",
    "Recruitment",
    "Software",
    "Supporter",
    "UI/UX Design",
  ];

  // Handle the change of selected skill
  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    if (selectedSkill && !selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
  };

  // Remove a skill from the selected skills list
  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== skill));
  };

  // Handle Cancel action
  const handleCancel = () => {
    setSelectedSkills([]); // Clear the selected skills
  };

  // Handle Publish action
  const handlePublish = () => {
    // You can add your publish logic here
    alert("Skills published!");
  };

  if (activeSection === "Skills") {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Skills</label>
          <select
            onChange={handleSkillChange}
            className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select your skill</option>
            {skillsList.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        {/* Display selected skills with remove option */}
        {selectedSkills.length > 0 && (
          <div className="mt-4 text-gray-600">
            <p className="font-semibold">Selected Skills:</p>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Cancel and Publish buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handlePublish}
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Publish
          </button>
        </div>
      </div>
    );
  }
  if (activeSection === "Portfolio") {
    const handleGetPortfolio = () => {
        alert("Here is your Portfolio!");
        // You can add your logic to display or navigate to the portfolio page here
      };
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>

        {/* Display the "Get your Portfolio" button */}
        <div className="mt-4">
          <button
            onClick={handleGetPortfolio}
            className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get your Portfolio
          </button>
        </div>
      </div>
    );
  }
  if (activeSection === "Awards") {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Awards</h2>
        <p className="text-sm text-gray-600">We recommend at least one award entry.</p>

        {/* Form to add new award */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Add an Award</h3>
          <input
            type="text"
            value={newAward.title}
            onChange={(e) => handleAwardInputChange("title", e.target.value)}
            placeholder="Title"
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <input
            type="date"
            value={newAward.date}
            onChange={(e) => handleAwardInputChange("date", e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <textarea
            value={newAward.description}
            onChange={(e) =>
              handleAwardInputChange("description", e.target.value)
            }
            placeholder="Description"
            className="w-full border border-gray-300 rounded p-2 mb-4"
          />
        </div>

        {/* Buttons for cancel and publish */}
        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handlePublish}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Publish
          </button>
        </div>
      </div>
    );
  }

  return null;
};
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

        {/* Sections */}
        <div className="flex gap-4 text-lg font-medium text-gray-700 mb-6">
          <div
            onClick={() => setActiveSection("Basic Info")}
            className={`p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer ${
              activeSection === "Basic Info" ? "bg-gray-100" : ""
            }`}
          >
            Basic Info
          </div>
          <div
            onClick={() => setActiveSection("Education")}
            className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
          >
            Education
          </div>
          <div
            onClick={() => setActiveSection("Experience")}
            className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
          >
            Experience
          </div>
          <div
          onClick={() => setActiveSection("Experiences")}
          className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
        >
          Experiences
        </div>
          <div
            onClick={() => setActiveSection("Skills")}
            className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
          >
            Skills
          </div>
          <div
            onClick={() => setActiveSection("Portfolio")}
            className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
          >
            Portfolio
          </div>
          <div
            onClick={() => setActiveSection("Awards")}
            className="p-4 bg-white shadow-md rounded border border-gray-300 cursor-pointer"
          >
            Awards
          </div>
        </div>

        {/* Active Section Content */}
        <div className="bg-gray-50 p-6 rounded shadow-md max-w-4xl mx-auto">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
