import { User, Code } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-auto relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/prakcloud/image/upload/v1739038757/zehzgkqwlpf99gaffcou.jpg"
              alt="Profile"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-white">
            <p className="text-lg mb-6">
              {`I'm a passionate Full Stack Developer in building web
              applications. I specialize in Both Front-end and Back-end.`}
            </p>
            <div className="flex space-x-4">
              <User className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Background</h3>
                <p className="text-white/70">
                  Electrical and Electronics Graduate
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Code className="text-blue-400" size={24} />
              <div>
                <h3 className="font-semibold">Technologies</h3>
                <p className="text-white/70">
                  React, Node.js, TypeScript, Express, SQl and NoSql Databases,
                  TailwindCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
