import React from "react";

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative">
                {/* <Image
                    src={`https://images.unsplash.com/photo-167${project}0000000-xxxxx?auto=format&fit=crop&q=80`}
                    alt={`Project ${project}`}
                    className="object-cover w-full h-full"
                  /> */}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-white">
                  Project Title {project}
                </h3>
                <p className="text-white/70 mb-4">
                  A brief description of the project and the technologies used
                  in its development.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
