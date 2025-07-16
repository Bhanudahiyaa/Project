import React, { useState } from "react";
import { ExternalLink, Github, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const personalProjects = [
    {
      title: "📊 SQL-Whisperer ",
      description:
        "An AI-powered tool that converts natural language questions into accurate SQL queries. It not only generates the SQL code but also explains it in simple terms and runs it directly on user-uploaded databases, delivering instant results. Ideal for non-technical users, students, and analysts to interact with data effortlessly.",
      technologies: ["Streamlit", "Gemini-Pro API", "Python", "SQLite"],
      liveUrl: "https://lnkd.in/eym3nYTF",
      githubUrl: "https://lnkd.in/eCiA9bf7",
      status: "Live",
      gradient: "from-gray-300 to-gray-800",
      image:
        "https://res.cloudinary.com/dr0m0fevm/image/upload/v1752707054/Screenshot_2025-07-17_at_03.59.03_tes7rf.png",
    },
    {
      title: "📈 LedgerIQ",
      description:
        "A personal finance tracking app designed to help users monitor income, expenses, and budgets in real time. Features include CSV import/export for easy data handling, interactive charts for visual insights, and a clean UI for a smooth user experience. Perfect for individuals looking to manage finances with clarity and ease.",
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
      image:
        "https://res.cloudinary.com/dr0m0fevm/image/upload/v1752707058/Screenshot_2025-07-17_at_03.58.39_xairve.png",
    },
  ];

  const clientProjects = [
    {
      title: "💸 Market Pulse",
      description:
        "Market Pulse is an intelligent and interactive stock market dashboard. It empowers users to track live stock prices, explore historical trends with dynamic charts, and gain insights through sentiment analysis. The app also supports voice commands and screen readers.",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Tailwind",
        "FinnHub API",
        "TwelveLabs API",
      ],
      liveUrl: "https://call2-codecore4.vercel.app/",
      githubUrl: "https://github.com/Bhanudahiyaa/Call2Code",
      status: "Live",
      gradient: "from-gray-300 to-gray-600",
      image:
        "https://res.cloudinary.com/dr0m0fevm/image/upload/v1752707067/Screenshot_2025-07-17_at_03.58.06_kthjpy.png",
    },
    {
      title: "🚀 The Cultural Hub",
      description:
        "The Cultural Hub uses AR (AR.js, Vantara, WebXR) to help local vendors showcase native products in real-world environments. It blends culture with immersive tech. A creative team effort made it possible.",
      technologies: ["AR.js", "Three.js", "WebXR", "Vantara", "JavaScript"],
      liveUrl: "",
      githubUrl: "",
      status: "Paused",
      gradient: "from-gray-300 to-gray-900",
      image:
        "https://res.cloudinary.com/dr0m0fevm/image/upload/v1752706771/Screenshot_2025-07-17_at_03.52.48_amnn4p.png",
    },
  ];

  const currentProjects =
    activeTab === "personal" ? clientProjects : personalProjects;

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
                {type === "personal" ? "Hackathons" : "Personal Projects"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                offscreen: { opacity: 0, x: index % 2 === 0 ? -80 : 80 },
                onscreen: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.8,
                    delay: index * 0.1,
                  },
                },
              }}
              className="group relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-800 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Top border */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              {/* Card Body */}
              <div className="p-8">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="mb-4 w-full h-full object-cover rounded-lg opacity-80"
                />

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
            </motion.div>
          ))}
        </div>
        {/* Experience Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-bold text-white mb-4">Experience</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          <div className="mt-12 max-w-3xl mx-auto text-left relative border-l border-gray-700 pl-6 space-y-10">
            <div className="relative group">
              <div className="absolute -left-[14px] top-1.5 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 group-hover:shadow-xl transition">
                <p className="text-white font-semibold text-xl flex items-center gap-2 mb-1">
                  <Play className="w-5 h-5 text-green-400" />
                  Full Stack Engineer - FirstContact
                </p>
                <p className="text-sm text-gray-400 italic mb-3">
                  Intern - Remote • June 2025 – August 2025
                </p>
                <p className="text-gray-300">
                  Enhanced internal CRM tools by fixing database bugs and
                  optimizing frontend logic, leading to improved workflow
                  productivity and user experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-5xl font-bold text-white mb-4">Achievements</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          <div className="mt-12 max-w-3xl mx-auto text-left relative border-l border-gray-700 pl-6 space-y-10">
            <div className="relative group">
              <div className="absolute -left-[14px] top-1.5 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900"></div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 group-hover:shadow-xl transition">
                <p className="text-white font-semibold text-xl flex items-center gap-2 mb-1">
                  🏆 Finalist - Call2Code Hackathon
                </p>
                <p className="text-sm text-gray-400 italic mb-3">
                  48-hour Hackathon hosted by MUJ
                </p>
                <p className="text-gray-300">
                  Designed and deployed a smart stock market dashboard featuring
                  live stock prices, sentiment analysis, voice commands, and
                  dynamic charts using AI tools.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -left-[14px] top-1.5 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 group-hover:shadow-xl transition">
                <p className="text-white font-semibold text-xl flex items-center gap-2 mb-1">
                  🥈 Semi-finalist - BitBash Hackathon
                </p>
                <p className="text-sm text-gray-400 italic mb-3">
                  24-hour Hackathon hosted by NIT Kurukshetra
                </p>
                <p className="text-gray-300">
                  Participated as a semi-finalist at BitBash, where our team
                  developed a fast, functional solution to a real-world
                  challenge within 24 hours under pressure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Contribution Streak */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-bold text-white mb-4">
            GitHub Activity
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto mb-12">
            A quick snapshot of my daily development commitment and GitHub
            profile.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 ">
            {/* Live Contribution Graph */}
            <div className="w-full max-w-lg">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=bhanudahiyaa&bg_color=0d1117&color=ffffff&line=00bfff&point=ffffff&area=true&hide_border=true"
                alt="Bhanu Dahiya GitHub Contribution Activity"
                className="rounded-lg border border-gray-700 w-full"
              />
            </div>

            {/* GitHub Info */}
            <a
              href="https://github.com/bhanudahiyaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 hover:scale-105 transition-transform"
            >
              <img
                src="https://github.com/bhanudahiyaa.png"
                alt="GitHub Avatar"
                className="w-24 h-24 rounded-full"
              />
              <div className="space-y-2 text-left">
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Bhanu Dahiya
                  </h4>
                  <p className="text-gray-400">bhanudahiyaa • he/him</p>
                  <p className="text-green-400 text-sm mt-1">
                    npm install bhanu --save-dev
                  </p>
                </div>
                <div className="text-gray-400 text-sm">
                  <p>📍 Delhi, India</p>
                </div>
                <div>
                  <h5 className="text-white font-semibold">Achievements</h5>
                  <div className="flex gap-2 mt-2">
                    <img
                      src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                      alt="Shark"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png"
                      alt="YOLO"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png"
                      alt="Pair"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png"
                      alt="Vault"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://github.githubassets.com/assets/public-sponsor-default-9fa68986b057.png"
                      alt="Vault"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>

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
