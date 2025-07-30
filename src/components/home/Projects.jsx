import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and Tailwind CSS.",
      githubLink: "https://github.com/naman-398/naman-portfolio",
      liveLink: "https://allan-drapper-eta.vercel.app/",
      image: "https://api.microlink.io/?url=https://allan-drapper-eta.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "248_LABBS",
      description: "Lab management system for BCA project submission.",
      githubLink: "https://github.com/naman-398/248_LABBS",
      liveLink: "https://248-labbs.vercel.app",
      image: "https://api.microlink.io/?url=https://248-labbs.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "Todo List",
      description: "A simple todo list app with CRUD operations.",
      githubLink: "https://github.com/naman-398/todo-app",
      liveLink: "https://todo-app-naman.vercel.app",
      image: "https://api.microlink.io/?url=https://todo-app-naman.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
  ];

const Projects = () => {
  return (
    <section id="projects" className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-76 font-bold mb-12 text-center text-green-300 font-bebas-neue">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-crayola transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-green-200">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300"
                >
                  <FaGithub /> GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
