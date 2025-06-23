import React, { useState } from "react";
import { ExternalLink, Github, Pause } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalProjects = [
    {
      title: "LedgerIQ",
      description:
        "Personal Finance Tracker with real-time analytics, CSV import/export, and beautiful visualizations.",
      technologies: [
        "React",
        "Firebase",
        "Firestore",
        "Chart.js",
        "Ant Design",
      ],
      liveUrl: "https://ledger-uwu-znsd.vercel.app/",
      githubUrl: "https://github.com/Bhanudahiyaa/Ledger-uwu",
      status: "Live",
      gradient: "from-gray-300 to-gray-700",
    },
    {
      title: "The Cultural Hub",
      description:
        "AR-based web platform allowing local vendors to showcase goods in real-world AR.",
      technologies: ["AR.js", "Three.js", "WebXR", "Vantara", "JavaScript"],
      liveUrl: "https://your-cultural-hub.com",
      githubUrl: "https://github.com/bhanudahiyaa/cultural-hub",
      status: "Paused",
      gradient: "from-gray-300 to-gray-800",
    },
  ];

  const clientProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce with payments, dashboard, and inventory.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      liveUrl: "https://client-ecom.com",
      githubUrl: "https://github.com/bhanudahiyaa/ecom-client",
      status: "Live",
      gradient: "from-gray-300 to-gray-600",
    },
    {
      title: "Restaurant Manager",
      description: "Order tracking, customer analytics, and admin tools.",
      technologies: ["React", "PostgreSQL", "Express.js", "Redis", "Stripe"],
      liveUrl: "https://restaurant-pro.com",
      githubUrl: "https://github.com/bhanudahiyaa/restaurant-manager",
      status: "Live",
      gradient: "from-gray-300 to-gray-900",
    },
  ];

  const currentProjects =
    activeTab === "personal" ? personalProjects : clientProjects;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of projects from personal explorations to client work,
            crafted with modern tech.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 rounded-full border border-gray-800 p-2">
            {["personal", "client"].map(type => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === type
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {type === "personal" ? "Personal Projects" : "Client Work"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-800 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Top border */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              {/* Card Body */}
              <div className="p-8">
                {/* Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {project.status === "Paused" ? (
                      <>
                        <Pause className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm">Paused</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Live</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 group-hover:border-gray-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white hover:scale-105 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-full hover:text-white hover:border-gray-500 hover:scale-105 transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Hover BG */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 via-gray-500/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/bhanudahiyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-700 text-gray-300 rounded-full hover:text-white hover:border-gray-500 hover:scale-105 transition"
          >
            <Github className="w-5 h-5" />
            <span>See more on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
