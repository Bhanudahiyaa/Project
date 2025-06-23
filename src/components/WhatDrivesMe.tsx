import React from "react";
import { Lightbulb, Puzzle, Users, Target } from "lucide-react";

type DriveItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
};

const WhatDrivesMe = () => {
  const drives: DriveItem[] = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries and exploring cutting-edge technologies to create solutions that haven't been built before.",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Puzzle,
      title: "Problem Solving",
      description:
        "Breaking down complex challenges into manageable pieces and crafting elegant solutions that work.",
      gradient: "from-gray-700 to-gray-800",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working with diverse teams to combine different perspectives and create something greater than the sum of its parts.",
      gradient: "from-gray-500 to-gray-600",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Building applications that make a real difference in people's lives and contribute to meaningful change.",
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <section id="drives" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-metallic">What Drives Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            The core values and motivations that fuel my passion for development
            and drive me to create exceptional digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drives.map((drive, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${drive.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {React.createElement(drive.icon, {
                  className: "w-8 h-8 text-white",
                })}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {drive.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {drive.description}
              </p>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 via-gray-500/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-gray-400 max-w-3xl mx-auto">
            "Great things are not done by impulse, but by a series of small
            things brought together."
          </blockquote>
          <cite className="text-gray-500 text-sm mt-2 block">
            — Vincent van Gogh
          </cite>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesMe;
