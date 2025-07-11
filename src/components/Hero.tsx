import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      heroRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(156, 163, 175, 0.1) 0%, transparent 50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-bg8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-35 z-10"></div>
      <div
        ref={heroRef}
        className="absolute inset-0 transition-all duration-300 z-20"
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
        {/* Greeting */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-metallic animate-metallic-shine ">
            Hey, I'm Bhanu
          </span>
          <span className="wave-emoji ml-4 inline-block animate-wave">👋🏻</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay-2">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 btn-metallic rounded-full font-semibold text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105 group"
          >
            View Projects
            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-gray-500/50 rounded-full font-semibold text-gray-300 hover:bg-gray-500/10 hover:border-gray-400 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-slide-up-delay-3">
          <a
            href="mailto:bhanudahiya8@gmail.com"
            className="p-3 rounded-full bg-gray-900/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/bhanupratap1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/bhanudahiyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-gray-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
