import React, { useState } from "react";
import Sidebar from "./Sidebar";

const ProgressTracker = ({ completion }) => {
  const milestones = [0, 20, 40, 60, 80, 100];

  return (
    <div className="relative w-full mt-4">
      {/* Progress Path */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-4 bg-gradient-to-r from-green-400 to-blue-500"
          style={{ width: `${completion}%`, transition: "width 0.5s ease" }}
        ></div>
      </div>

      {/* Milestones */}
      <div className="flex justify-between mt-2">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                completion >= milestone
                  ? "bg-green-400 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {milestone === 100 ? "🏆" : milestone === 0 ? "🚀" : "🎯"}
            </div>
            <p className="mt-1 text-sm font-semibold text-gray-600">
              {milestone}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectManagementPage = () => {
  const [projects, setProjects] = useState(["Project A", "Project B", "Project C"]);
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [editingUpdate, setEditingUpdate] = useState(null);
  const [employeeFeedback, setEmployeeFeedback] = useState("");
  const [freelancerResponse, setFreelancerResponse] = useState("");
  const [completion, setCompletion] = useState(0);

  const handleAddUpdate = (e) => {
    e.preventDefault();
    if (newUpdate.trim() === "" || selectedProject === "") return;

    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();

    const update = {
      content: newUpdate,
      date,
      time,
      project: selectedProject,
      employeeFeedback: "",
      freelancerResponse: "",
      completion,
    };

    if (editingUpdate !== null) {
      const updatedUpdates = updates.map((update, index) =>
        index === editingUpdate ? { ...update, content: newUpdate, completion } : update
      );
      setUpdates(updatedUpdates);
      setEditingUpdate(null);
    } else {
      setUpdates([update, ...updates]);
    }

    setNewUpdate("");
    setSelectedProject("");
    setCompletion(0);
  };

  const handleEdit = (index) => {
    const updateToEdit = updates[index];
    setSelectedProject(updateToEdit.project);
    setNewUpdate(updateToEdit.content);
    setCompletion(updateToEdit.completion);
    setEditingUpdate(index);
  };

  const handleSubmitFeedback = (index) => {
    const updatedUpdates = updates.map((update, i) =>
      i === index ? { ...update, employeeFeedback } : update
    );
    setUpdates(updatedUpdates);
    setEmployeeFeedback("");
  };

  const handleSubmitResponse = (index) => {
    const updatedUpdates = updates.map((update, i) =>
      i === index ? { ...update, freelancerResponse } : update
    );
    setUpdates(updatedUpdates);
    setFreelancerResponse("");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Project Management</h1>

        {/* Update Form */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {editingUpdate !== null ? "Edit Daily Update" : "Add Daily Update"}
          </h2>
          <form onSubmit={handleAddUpdate} className="flex flex-col gap-4">
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="">Select a Project</option>
              {projects.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>

            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              placeholder="Describe what you worked on today..."
              className="w-full p-4 border border-gray-300 rounded-lg resize-none"
              rows="4"
            ></textarea>

            {/* Completion Percentage */}
            <label className="text-gray-700">
              Completion Percentage (%)
              <input
                type="number"
                value={completion}
                onChange={(e) => setCompletion(e.target.value)}
                min="0"
                max="100"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </label>

            <button
              type="submit"
              className="self-end px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              {editingUpdate !== null ? "Update" : "Submit Update"}
            </button>
          </form>
        </div>

        {/* Updates List */}
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Project Updates</h2>
          {updates.length === 0 ? (
            <p className="text-gray-500">No updates yet. Start by adding your first update!</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {updates.map((update, index) => (
                <li key={index} className="py-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>{update.project}:</strong> {update.content}
                  </p>
                  <div className="text-xs text-gray-500">
                    {update.date} at {update.time}
                  </div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 mt-2 hover:underline"
                  >
                    Edit
                  </button>

                  {/* Candy-Crush-Like Progress Tracker */}
                  <div className="mt-4">
                    <strong>Project Completion:</strong>
                    <ProgressTracker completion={update.completion} />
                    <p className="text-sm text-gray-500 mt-2">
                      {update.completion}% complete
                    </p>
                  </div>

                  {/* Employee Feedback */}
                  {update.employeeFeedback ? (
                    <div className="mt-4">
                      <strong className="text-gray-700">Employee Feedback:</strong>
                      <p className="text-gray-600">{update.employeeFeedback}</p>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <textarea
                        value={employeeFeedback}
                        onChange={(e) => setEmployeeFeedback(e.target.value)}
                        placeholder="Provide your feedback..."
                        className="w-full p-4 border border-gray-300 rounded-lg resize-none"
                        rows="3"
                      ></textarea>
                      <button
                        onClick={() => handleSubmitFeedback(index)}
                        className="self-end px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 mt-2"
                      >
                        Submit Feedback
                      </button>
                    </div>
                  )}

                  {/* Freelancer Response */}
                  {update.freelancerResponse ? (
                    <div className="mt-4">
                      <strong className="text-gray-700">Freelancer Response:</strong>
                      <p className="text-gray-600">{update.freelancerResponse}</p>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <textarea
                        value={freelancerResponse}
                        onChange={(e) => setFreelancerResponse(e.target.value)}
                        placeholder="Provide your response..."
                        className="w-full p-4 border border-gray-300 rounded-lg resize-none"
                        rows="3"
                      ></textarea>
                      <button
                        onClick={() => handleSubmitResponse(index)}
                        className="self-end px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 mt-2"
                      >
                        Submit Response
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementPage;
