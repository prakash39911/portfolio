import { User } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          About Me
        </h2>
        <div className="grid gap-12 items-center">
          <div className="text-white">
            <p className="text-lg mb-6">
              Full-Stack Developer with a strong foundation in building and
              deploying scalable web applications using the{" "}
              <strong>MERN/PERN stack</strong>. Demonstrated expertise through
              developing a full-featured Learning Management System and an
              AI-powered Text-to-Video generator. Proficient in front-end (
              <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong>) and back-end (
              <strong>Node.js</strong>, <strong>Express.js</strong>)
              development, delivering high-performance, SEO-optimized, and
              robust solutions.
            </p>

            <div className="flex space-x-4 mt-5">
              <User className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-white/70">
                  Bachelor of Engineering (B.E), Electrical and Electronics
                </p>
                <p className="text-white/70">
                  Sir M. Visvesvaraya Institute of Technology, Bangalore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
