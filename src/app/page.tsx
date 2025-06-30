"use client";

import { useEffect, useState } from "react";
import StarBackground from "@/components/StarBackground";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
// import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <StarBackground />
      <NavBar isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />

      <footer className="relative py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/70">
          <p>© 2025 Chandra Prakash. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
