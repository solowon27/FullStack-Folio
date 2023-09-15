import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import TechnologiesTable from "./TechnologiesTable";

const tabs = ["Description", "Technology", "Visit"];

export default function DescriptionTabs({ project }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-2 md:p-4 max-w-2xl w-full">
      <div className="md:flex space-x-4 mb-2 md:mb-4">
        {/* Display tabs as a dropdown on small screens */}
        <div className="relative md:hidden">
          <select
            className="block appearance-none w-full bg-gray-700 border border-gray-600 text-gray-300 py-2 px-4 pr-8 rounded-lg"
            onChange={(e) => setSelectedTab(e.target.value)}
            value={selectedTab}
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {tabs.map((tab) => (
          <button
            key={tab}
            className={`hidden md:block px-4 py-2 rounded-lg ${
              selectedTab === tab
                ? "bg-lime-400 text-gray-500"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selectedTab === "Description" && (
          <motion.div
            key="Description"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-gray-300"
          >
            <p>{project.description}</p>
          </motion.div>
        )}
        {selectedTab === "Technology" && (
          <motion.div
            key="Technology"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-gray-300"
          >
            <TechnologiesTable
              technologies={project.usedTechnologies}
              usedTechnologies={project.usedTechnologies}
            />
          </motion.div>
        )}
        {selectedTab === "Visit" && (
          <motion.div
            key="Visit"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mt-2 md:mt-4">
              <a
                href={project.link}
                className="text-lime-400 text-white px-3 py-2 rounded-lg hover:text-lime-700"
              >
                Visit Actual Page
              </a>
              <a
                href={project.github}
                className="text-lime-400 hover:text-blue-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
