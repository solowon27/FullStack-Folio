import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import TechnologiesTable from "./TechnologiesTable";

const tabs = ["Description", "Technology", "Visit"];

export default function DescriptionTabs({ project }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-2xl w-full">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${
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
            <div className="flex justify-between items-center mt-4">
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
