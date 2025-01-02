import { useState } from "react";
import { projects } from "./listOfProjects";

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState(false);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? false : index);
  };

  const turncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  return (
    <div className="bg-gray-100 py-20 px-6 ">
      <div className="inline-block  m-auto ">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <div className="w-[90%] h-1 rounded bg-gradient-to-r from-info to-secondary m-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Add more project cards */}

        {/* weather forecast project */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 bg-white rounded-lg shadow-md transition-all duration-1000 overflow-hidden ${
              expandedCard === index ? "max-h-[1000px] " : "max-h-[500px] "
            }`}
          >
            {/* Project Image */}
            <div>
              <img
                className="shadow-sm rounded mb-4"
                src={project.image}
                alt={project.name}
              />
            </div>
            {/* Project Name */}
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              {project.name}
            </h2>

            {/* Features */}
            {/* Conditional Expanded Content */}
            {expandedCard === index && (
              <div
                className={`transition-opacity duration-1000 ease-in-out ${
                  expandedCard === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Description */}
                {project.description !== "" && (
                  <div>
                    <p>{turncate(project.description, 165)}</p>
                  </div>
                )}
                {project.features.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc  list-inside text-gray-700 mb-4">
                      {project.features.map((feature, index) => (
                        <li key={`feature_${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Technologies */}
                {project.technologies.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      Technologies Used:
                    </h3>
                    <ul className="list-disc  list-inside text-gray-700 mb-4">
                      {project.technologies.map((tec, index) => (
                        <li key={`tec_${index}`}>{tec}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {/* Demo and Code */}
            <div className="flex justify-between space-x-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary p-2 hover:bg-primary hover:text-white hover:rounded transition duration-300"
              >
                <i className="fas fa-link text-3xl"></i>
              </a>
              {/* Expand/Collapse Button */}
              <a
                className="text-secondary p-2 hover:text-primary text-sm hover:cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                {expandedCard === index ? "Show Less" : "Show More"}
              </a>
              <a
                href={project.viewCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary p-2 hover:bg-primary hover:text-white hover:rounded transition duration-300"
              >
                <i className="fab fa-github text-4xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
