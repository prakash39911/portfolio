import React from "react";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-white/10 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Next.js",
            "TailwindCSS",
            "PostgreSQL",
            "GraphQL",
            "Docker",
            "AWS",
            "Git",
            "Agile",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/10 transition-colors"
            >
              <h3 className="font-semibold text-white">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
