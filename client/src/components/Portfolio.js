import React, { useState } from "react";
import DescriptionTabs from "./DescriptionTabs";

import mingle from "../Images/mingle.jpg";
import rentopia from "../Images/rentopia.gif";
import weatherEngine from "../Images/weatherEngine.gif";
import wordwave from "../Images/wordwave.gif";

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const project = [
      {
        name: "rentopia",
        description: "A web application that allows users to search for rental properties in their area.",
        usedTechnologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Sequelize", "Handlebars.js", "Heroku", "Bootstrap"],
        imageUrl: rentopia ,
        link: "https://salty-temple-87367-87002835adcc.herokuapp.com/",
        github: "https://github.com/solowon27/rentopia",
      },
      {
        name: "WordWave",
        description: "A Notepad Progressive web application that allows users to create and save notes.",
        usedTechnologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "IndexedDB", "Service Workers", "Web Manifest", "Heroku"],
        imageUrl: wordwave,
        link: "https://blooming-lake-26826-01602545f49f.herokuapp.com/",
        github: "https://github.com/solowon27/WordWave",
      },
      {
        name: "Weather Engine",
        description: "A weather dashboard that allows users to search for current weather conditions and the future weather forecast.",
        usedTechnologies: ["HTML", "CSS", "JavaScript", "jQuery", "dayjs", "OpenWeather API", "Github"],
        imageUrl: weatherEngine,
        link: "https://solowon27.github.io/weather-engine/",
        github: "https://github.com/solowon27/weather-engine",
      },
      {
        name: "Mongo-Mingle",
        description: "A social media (API) web application that allows users to create an account and post their thoughts and reactions to other users' posts.",
        usedTechnologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Github"],
        imageUrl: mingle ,
        link: "https://github.com/solowon27/Mongo-Mingle",
        github: "https://github.com/solowon27/Mongo-Mingle",
      },
    ];
  
    return (
        <section id="portfolio" className="container mx-auto mb-20">
          <div className='text-center items-center'>
      <h2 className="text-4xl text-lime-400 font-semibold mb-10 mt-3">Portfolio</h2>
      <div className="text-justify m-5">
      <p className="lg:text-xl md:text:1xl mb-10"> Welcome to my portfolio, where I proudly present a selection of my projects and accomplishments. 
      As a passionate and driven developer, I've had the privilege of working on a diverse range of projects, 
      each of which has allowed me to explore and expand my skills. 
      From web applications and mobile apps to websites and more, I've embraced every opportunity to create meaningful solutions and bring ideas to life. 
      This portfolio is a testament to my journey as a developer, highlighting not only the technical aspects of my work but also the creative problem-solving and 
      attention to detail that I bring to every project. I invite you to explore these projects and get a glimpse of my dedication to innovation and quality in the world of technology.
      </p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
  {project.map((project, index) => (
    <div
    key={index}
    className="bg-gradient-to-br from-gray-950 to-slate-800 rounded-lg p-8 cursor-pointer hover:bg-gradient-to-br from-teal-700 to-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
    onClick={() => setSelectedProject(project)}
  >
      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
      <div className="md:flex md:items-center md:justify-between mt-4">
        <div className="md:w-1/2">
          <img
            src={project.imageUrl}
            alt="placeholder"
            className="rounded-lg border-4 border-lime-400"
          />
        </div>
        <div className="md:w-1/2">
          <DescriptionTabs project={project} />
        </div>
      </div>
    </div>
  ))}
</div>
        </section>
      );
    }
    
    export default Portfolio;