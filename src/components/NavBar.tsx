import React from "react";

export default function NavBar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/5 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-3xl font-bold text-gray-300">Portfolio</span>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white/90 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/90 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white/90 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
