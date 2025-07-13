import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import WhatDrivesMe from "./components/WhatDrivesMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BottomNavigation from "./components/BottomNavigation";
import SplashCursor from "./components/SplashCursor";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Intersection Observer animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach(section => observer.observe(section));

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener("click", handleSmoothScroll));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      links.forEach(link =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <>
      <ErrorBoundary>
        <SplashCursor />
      </ErrorBoundary>

      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-800/20 to-gray-700/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/10 via-gray-700/10 to-gray-600/10 animate-gradient-shift"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>

        <main>
          <Hero />

          <About />
          <Projects />
          <WhatDrivesMe />
          <Skills />
          <Contact />
        </main>

        <BottomNavigation />

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-110 z-50 border border-gray-600"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
