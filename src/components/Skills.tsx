import React, { useState } from "react";
import { Code, Database, Palette, Globe, Server, Wrench } from "lucide-react";

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
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const categoryData = skillCategories.find(
              cat => cat.id === category
            );
            const Icon = categoryData?.icon;

            return (
              <div key={category} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-300 capitalize flex items-center space-x-3">
                  {Icon &&
                    React.createElement(Icon, {
                      className: "w-5 h-5 text-gray-400",
                    })}
                  <span>{category}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="relative group bg-gray-900/50 backdrop-blur-sm rounded-xl px-5 py-3 border border-gray-800/50 hover:border-gray-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/10 hover:-translate-y-1 cursor-pointer"
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
                    </div>
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
          <div
            key={skill.name}
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
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-metallic">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
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
      </div>
    </section>
  );
};

export default Skills;
