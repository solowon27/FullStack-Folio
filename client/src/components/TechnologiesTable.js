import React from "react";

function TechnologiesTable({ usedTechnologies }) {
  const categories = {
    "Front-end": ["HTML", "CSS", "JavaScript"],
    "Back-end": ["Node.js", "Express.js"],
    Library: ["Handlebars.js", "Bootstrap", "jQuery"],
    API: ["OpenWeather API"],
    Deployment: ["Heroku", "Github"],
  };

  return (
    <table className="border min-w-fit">
      <thead>
        <tr className="border">
          {Object.keys(categories).map((category, index) => (
            <th
              key={index}
              className="p-2 text-justify border"
            >
              {category}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="border">
          {Object.values(categories).map((techList, index) => (
            <td key={index} className="p-2 border">
              <ul>
                {techList.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className={`${
                      usedTechnologies.includes(tech) ? "text-white" : ""
                    }`}
                  >
                    {usedTechnologies.includes(tech) ? (
                      <span role="img" aria-label="checkmark">
                        ✅
                      </span>
                    ) : null}{" "}
                    {usedTechnologies.includes(tech) ? tech : ""}
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default TechnologiesTable;
