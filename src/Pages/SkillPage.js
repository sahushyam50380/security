import React, { useState } from "react";

const SkillsPage = () => {
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

  // State to manage the selected skill
  const [selectedSkill, setSelectedSkill] = useState("");

  // Handle the change of selected skill
  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Select Your Skill</h2>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Skills</label>
          <select
            value={selectedSkill}
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

        {/* Display the selected skill */}
        {selectedSkill && (
          <div className="mt-4 text-gray-600">
            <p>You have selected: <span className="font-semibold">{selectedSkill}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
