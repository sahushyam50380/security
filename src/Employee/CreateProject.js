import React, { useState } from 'react';
import EmployeeSidebar from './EmployeeSidebar'; // Importing Sidebar

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    careerLevel: '',
    languages: [],
    description: '',
    skills: [],
    location: '',
    coverImage: null,
    galleryImages: [],
    longitude: '',
    latitude: '',
    videoBudget: '',
    projectType: '',
    minPrice: '',
    maxPrice: '',
    estimatedTime: '',
    faqs: [{ question: '', answer: '' }]
  });

  const categories = [
    'AI Services', 'AI Applications', 'AI Chatbot', 'AI Music Videos', 'Data Analytics', 'Legal & Finance', 'Accounting & Bookkeeping', 
    'Financial Forecasting', 'Personal Finance', 'Tax Consulting', 'Marketing & Sales', 'E-Commerce Marketing', 'E-Commerce SEO', 
    'Marketing Strategy', 'Social Media Marketing', 'Media & Design', 'App Design', 'Landing Page Design', 'Logo Design', 
    'Website Design', 'Music & Audio', 'Audiobook Production', 'Music Producers', 'Podcast Production', 'Songwriters', 
    'Technology & Programming', 'Business Websites', 'IOS App Development', 'Landing Pages', 'Web Applications', 
    'Video & Animation', '3D Product Animation', 'Character Animation', 'Video Ads & Commercials', 'Video Editing', 
    'Writing & Translation', 'Articles & Blog Posts', 'Book & eBook Writing', 'Resume Writing', 'Social Media Copywriting'
  ];

  const careerLevels = ['Entry', 'Intermediate', 'Expert'];
  const languages = ['Chinese', 'Deutsch', 'English', 'Japanese', 'Korean'];
  const skills = ['AI Development', 'Audio Production', 'Copywriting', 'Data Analysis', 'Digital Marketing', 'Functional Testing', 'Illustration', 'Logo Design', 'SEO', 'UI/UX Design', 'Video Editing', 'Web Development', 'WordPress'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked ? [...formData[name], value] : formData[name].filter((item) => item !== value)
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAddFaq = () => {
    setFormData({
      ...formData,
      faqs: [...formData.faqs, { question: '', answer: '' }]
    });
  };

  const handleRemoveFaq = (index) => {
    const updatedFaqs = formData.faqs.filter((_, i) => i !== index);
    setFormData({ ...formData, faqs: updatedFaqs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex">
      {/* Sidebar Section */}
      <EmployeeSidebar />

      {/* Main Content Section */}
      <div className="ml-64 flex-1 p-6">
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg space-y-6">
          {/* Basic Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="title" className="block font-semibold text-gray-700">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block font-semibold text-gray-700">Categories *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="careerLevel" className="block font-semibold text-gray-700">Career Level *</label>
              <select
                id="careerLevel"
                name="careerLevel"
                value={formData.careerLevel}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                {careerLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="languages" className="block font-semibold text-gray-700">Languages*</label>
              <select
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a language</option>
                {languages.map((language) => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="skills" className="block font-semibold text-gray-700">Skills*</label>
              <select
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a skill</option>
                {skills.map((skill) => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block font-semibold text-gray-700">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Paragraph"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block font-semibold text-gray-700">Location *</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="Location">Location</option>
              </select>
            </div>
          </div>

          {/* Cover Image Section */}
          <div>
            <label className="block font-semibold text-gray-700">Cover Image</label>
            <input
              type="file"
              name="coverImage"
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">The cover image size should be max 1920 x 400px</p>
          </div>

          {/* Gallery Section */}
          <div>
            <label className="block font-semibold text-gray-700">Gallery</label>
            <input
              type="file"
              name="galleryImages"
              onChange={handleChange}
              multiple
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">Maximum file size: 1000kb.</p>
          </div>

          {/* Project Type & Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="projectType" className="block font-semibold text-gray-700">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a type</option>
                <option value="Fixed Price">Fixed Price</option>
              </select>
            </div>

            <div>
              <label htmlFor="minPrice" className="block font-semibold text-gray-700">Minimum Price</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="block font-semibold text-gray-700">Maximum Price</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="estimatedTime" className="block font-semibold text-gray-700">Estimated Time</label>
              <input
                type="number"
                id="estimatedTime"
                name="estimatedTime"
                value={formData.estimatedTime}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <label className="block font-semibold text-gray-700">FAQs</label>
            {formData.faqs.map((faq, index) => (
              <div key={index} className="mt-4 space-y-2">
                <div>
                  <input
                    type="text"
                    name="question"
                    value={faq.question}
                    onChange={(e) => {
                      const updatedFaqs = [...formData.faqs];
                      updatedFaqs[index].question = e.target.value;
                      setFormData({ ...formData, faqs: updatedFaqs });
                    }}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Question"
                  />
                </div>
                <div>
                  <textarea
                    name="answer"
                    value={faq.answer}
                    onChange={(e) => {
                      const updatedFaqs = [...formData.faqs];
                      updatedFaqs[index].answer = e.target.value;
                      setFormData({ ...formData, faqs: updatedFaqs });
                    }}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Answer"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFaq(index)}
                  className="text-red-500 mt-2"
                >
                  Remove FAQ
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFaq}
              className="text-blue-500 mt-2"
            >
              Add FAQ
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="w-32 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit Project
          </button>
        </div>        
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
