import React from "react";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-metallic animate-slide-up">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 w-full">
            {/* Who I Am */}
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gray-700/20 rounded-lg group-hover:bg-gray-600/30 transition-colors duration-300">
                <User className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300 animate-slide-up">
                  Who I Am
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm passionate about continuous learning—whether it's diving
                  into the latest frameworks or experimenting with new tools. My
                  work is driven by a desire to build applications that are not
                  only functional but also intuitive and enjoyable to use.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-start space-x-4 ">
              <div className="p-3 bg-gray-600/20 rounded-lg group-hover:bg-gray-500/30 transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-300 animate-slide-up">
                  Education
                </h3>
                <div className="space-y-2 ">
                  <h4 className="font-medium text-white">
                    Maharaja Agrasen Institute Of Technology, Delhi
                  </h4>
                  <p className="text-gray-400">
                    BTech in Electronics and Communication Engineering
                  </p>
                  <p className="text-sm text-gray-500">2023–2027</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative w-full">
            <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 animate-slide-up">
                  Bhanu Pratap Singh
                </h3>
                <p className="text-gray-400 font-medium mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Passionate problem-solver and hackathon enthusiast dedicated
                  to creating innovative web solutions with modern technologies.
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-700/20 -z-10 blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
