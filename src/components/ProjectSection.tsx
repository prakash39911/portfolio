import { projectData } from "@/lib/projectData";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard eachProject={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
