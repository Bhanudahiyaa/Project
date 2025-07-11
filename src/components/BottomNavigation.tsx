import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  FileText,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT", icon: User },
    { id: "projects", label: "WORK", icon: Briefcase },
    { id: "skills", label: "SKILLS", icon: FileText },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  const socialLinks = [
    { icon: FileText, href: "#", label: "Resume" },
    { icon: Github, href: "https://github.com/bhanudahiyaa", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/bhanupratap1",
      label: "LinkedIn",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-3">
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-800 backdrop-blur-md border border-gray-900/50 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-5">
          {/* Navigation Items */}
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 group ${
                activeSection === item.id
                  ? "text-white bg-gradient-to-r from-gray-700/20 to-gray-600/20 border border-gray-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-900/50"
              }`}
            >
              <item.icon
                className={`w-4 h-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-gray-300"
                    : "group-hover:text-gray-300"
                }`}
              />
              <span className="text-xs font-medium tracking-wide">
                {item.label}
              </span>
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-8 bg-gray-700/50"></div>

          {/* Social Links */}
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-900/50 rounded-lg transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 group-hover:text-gray-300 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
