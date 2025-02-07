import { ChevronDown } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Hi, I&aposm <span className="text-blue-400">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            View Work
          </a>
        </div>
        <div className="mt-12">
          <ChevronDown
            className="animate-bounce mx-auto text-white"
            size={24}
          />
        </div>
      </div>
    </section>
  );
}
