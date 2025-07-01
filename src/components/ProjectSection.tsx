"use client";

import { projectData } from "@/lib/projectData";
import React from "react";
import ProjectCard from "./ProjectShowcaseCard";

export default function ProjectSection() {
  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen bg-gray-900 px-5 pt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Project Showcase
            </h1>
          </div>

          <div className="grid col-span-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {projectData.map((project) => (
              <div key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
            s{" "}
          </div>
        </div>
      </section>
    </>
  );
}
