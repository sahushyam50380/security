import React, { useEffect } from "react";
import { FaLaptopCode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaDocker, FaBriefcase, FaCode, FaDatabase } from "react-icons/fa";  
import AOS from 'aos'; // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS CSS

const Portfolio = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div>
      {/* Main Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
        <div className="text-center text-white" data-aos="fade-up">
          {/* Laptop Icon with a hover effect */}
          <FaLaptopCode className="text-9xl mx-auto transform transition-all duration-500 ease-in-out hover:scale-110" />

          {/* Developer Name with smooth transition */}
          <h1 className="mt-8 text-5xl font-bold text-white hover:text-gray-200 transition-colors duration-300" data-aos="fade-up">
            Davina Griss
          </h1>

          {/* Developer Field with Inline Animation */}
          <p
            className="mt-4 text-2xl font-semibold text-gray-200"
            style={{
              animation: "fadeInOut 3s ease-in-out infinite",
            }}
            data-aos="fade-up"
          >
            Frontend Developer
          </p>
        </div>

        {/* Country Flag at the bottom */}
        <div className="absolute bottom-0 w-full text-center mb-8" data-aos="fade-up">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="Country Flag"
            className="w-16 h-12 mx-auto rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-white py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-8">ABOUT ME</h2>

        {/* Right side: Text */}
        <div className="w-2/3 ml-60">
          <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 border-b-4 border-blue-800">
            <p className="text-xl leading-relaxed">
              Hi :) <br />
              👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest
              front-end frameworks like Angular, React, and Vue. What you are seeing now is portfolio
              template from Dorota1997. If you like this portfolio template, make sure to ⭐ the
              repository to make it more recognizable for other users. Thank you 💜
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-8" data-aos="fade-up">PROJECTS</h2>
        <div className="flex justify-center items-center gap-8">
          {/* Project 1 */}
          <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl" data-aos="fade-up">
            <img
              src="https://dorota1997.github.io/react-frontend-dev-portfolio/images/portfolio/animal-shelter/p1.jpg"
              alt="Project Image"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Animal Shelter</h3>
              <p className="text-gray-600">A web app designed to help animal shelters manage pet adoptions and donations.</p>
            </div>
          </div>

          {/* Repeat for other Projects */}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-800 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8" data-aos="fade-up">SKILLS</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-8">
          {/* Skill 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up">
            <FaReact className="text-4xl text-blue-600 mx-auto" />
            <p className="mt-2 text-lg text-gray-800">React</p>
          </div>

          {/* Add other skills */}
           {/* Skill 2 */}
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaHtml5 className="text-4xl text-orange-600 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">HTML</p>
</div>

{/* Skill 3 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaCss3Alt className="text-4xl text-blue-500 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">CSS</p>
</div>

{/* Skill 4 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaNodeJs className="text-4xl text-green-600 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">Node.js</p>
</div>

{/* Skill 5 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaJsSquare className="text-4xl text-yellow-500 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">JS</p>
</div>

{/* Skill 6 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaGitAlt className="text-4xl text-red-600 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">Git</p>
</div>

{/* Skill 7 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaDocker className="text-4xl text-cyan-500 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">Docker</p>
</div>

{/* Skill 8 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaReact className="text-4xl text-blue-600 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">React</p>
</div>

{/* Skill 9 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaHtml5 className="text-4xl text-orange-600 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">HTML</p>
</div>

{/* Skill 10 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center">
  <FaCss3Alt className="text-4xl text-blue-500 mx-auto" />
  <p className="mt-2 text-lg text-gray-800">CSS</p>
</div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8" data-aos="fade-up">EXPERIENCE</h2>
        <div className="max-w-5xl mx-auto">
          {/* Parent container for the tree-like structure */}
          <div className="flex justify-center gap-8">
            {/* Experience 1 */}
            <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-up">
              <div className="flex items-center gap-4 hover:bg-white hover:shadow-xl rounded-lg p-6 transition-all duration-300 ease-in-out">
                <div className="text-blue-600 bg-blue-100 p-4 rounded-full">
                  <FaBriefcase className="text-2xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-900">Frontend Developer</h3>
                  <p className="text-gray-600">XYZ Corporation | January 2021 - Present</p>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Developed and maintained user interfaces with React.js.</li>
                    <li>Collaborated with the design team to create responsive layouts.</li>
                    <li>Optimized web applications for better performance and user experience.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
