import { User, Code, Briefcase } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            {/* <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              /> */}
          </div>
          <div className="text-white">
            <p className="text-lg mb-6">
              I&aposm a passionate Full Stack Developer with 5 years of
              experience in building web applications. I specialize in React,
              Node.js, and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <User className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Background</h3>
                <p className="text-white/70">Computer Science Graduate</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Code className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Technologies</h3>
                <p className="text-white/70">React, Node.js, TypeScript</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Briefcase className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-white/70">5+ Years in Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
