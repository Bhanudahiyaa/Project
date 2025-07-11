import React, { useState } from "react";
import { Code, Database, Palette, Globe, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  color: string;
};

type SkillCategory = {
  id: string;
  name: string;
  icon: React.ElementType;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories: SkillCategory[] = [
    { id: "all", name: "All Skills", icon: Globe },
    { id: "languages", name: "Languages", icon: Code },
    { id: "frameworks", name: "Frameworks", icon: Server },
    { id: "databases", name: "Databases", icon: Database },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "design", name: "Design", icon: Palette },
  ];

  const skillsByCategory: Record<string, Skill[]> = {
    languages: [
      { name: "C", color: "bg-gray-600" },
      { name: "C++", color: "bg-gray-700" },
      { name: "JavaScript", color: "bg-gray-500" },
    ],
    frameworks: [
      { name: "Bootstrap", color: "bg-gray-800" },
      { name: "Tailwind CSS", color: "bg-gray-600" },
      { name: "React.js", color: "bg-gray-700" },
      { name: "Express.js", color: "bg-gray-800" },
      { name: "Three.js", color: "bg-gray-500" },
      { name: "GSAP", color: "bg-gray-600" },
      { name: "Chart.js", color: "bg-gray-700" },
      { name: "Node.js", color: "bg-gray-700" },
      { name: "Auth.js", color: "bg-gray-700" },
      { name: "Swiper.js", color: "bg-gray-700" },
      { name: "Locomotive.js", color: "bg-gray-700" },
      { name: "Next.js", color: "bg-gray-700" },
    ],
    databases: [
      { name: "MongoDB", color: "bg-gray-800" },
      { name: "PostgreSQL", color: "bg-gray-700" },
      { name: "Mongoose", color: "bg-gray-600" },
      { name: "Prisma", color: "bg-gray-800" },
      { name: "Firebase", color: "bg-gray-700" },
    ],
    tools: [
      { name: "GitHub", color: "bg-gray-900" },
      { name: "Vercel", color: "bg-gray-800" },
      { name: "Cloud Firestore", color: "bg-gray-600" },
      { name: "Google Auth", color: "bg-gray-700" },
      { name: "ZOD", color: "bg-gray-700" },
      { name: "Postman", color: "bg-gray-700" },
    ],
    design: [
      { name: "Figma", color: "bg-gray-600" },
      { name: "Adobe XD", color: "bg-gray-700" },
      { name: "Framer", color: "bg-gray-600" },
      { name: "PapaParse", color: "bg-gray-700" },
      { name: "AntDesign", color: "bg-gray-700" },
      { name: "Axios", color: "bg-gray-700" },
    ],
  };

  const allSkills = Object.values(skillsByCategory).flat();
  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : skillsByCategory[activeCategory] || [];

  const renderSkills = () => {
    if (activeCategory === "all") {
      return (
        <div className="space-y-10">
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const categoryData = skillCategories.find(
              cat => cat.id === category
            );
            const Icon = categoryData?.icon;

            return (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-300 capitalize flex items-center space-x-3">
                  {Icon &&
                    React.createElement(Icon, {
                      className: "w-5 h-5 text-gray-400",
                    })}
                  <span>{category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="relative group bg-gray-900/50 backdrop-blur-sm rounded-xl px-5 py-3 border border-gray-800/50 hover:border-gray-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/10 hover:-translate-y-1 cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                          {skill.name.charAt(0)}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/10 via-gray-500/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative group bg-gray-900/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 hover:-translate-y-1 cursor-pointer"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.name.charAt(0)}
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                {skill.name}
              </span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/10 via-gray-500/10 to-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-metallic">Skills & Technologies</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white border-transparent shadow-lg"
                  : "bg-gray-900/50 text-gray-300 border-gray-800 hover:border-gray-600 hover:text-white"
              }`}
            >
              {React.createElement(category.icon, { className: "w-4 h-4" })}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {renderSkills()}

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-full px-6 py-3 border border-gray-700/30">
            <Code className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">
              Continuously learning and exploring new technologies
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="mt-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Behind the Scenes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            This portfolio is crafted using modern technologies and deployment
            workflows to ensure performance, responsiveness, and
            maintainability.
          </p>

          {/* Timeline */}
          <div className="mt-16 border-l-2 border-gray-700 pl-6 space-y-10 max-w-2xl mx-auto text-left">
            {[
              {
                title: "Tech Stack",
                description:
                  "Built using React, TypeScript, and Tailwind CSS for a fast, responsive UI.",
              },
              {
                title: "Animations",
                description:
                  "Framer Motion enables scroll animations, hover effects, and smooth transitions.",
              },
              {
                title: "Deployment",
                description:
                  "Automatically deployed using Vercel with GitHub CI/CD pipeline.",
              },
              {
                title: "Optimizations",
                description:
                  "Responsive design, image compression, and lazy loading for fast performance.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[13px] top-1.5 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900" />
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:shadow-md transition">
                  <p className="text-lg font-semibold text-white mb-1">
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Bhanudahiyaa/Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full border border-gray-700 hover:scale-105 transition"
            >
              View Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
