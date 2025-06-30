import React, { useState } from "react";
import {
  Play,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react";
import ReactPlayer from "react-player";
import { CldImage } from "next-cloudinary";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  liveUrl?: string;
  techStack: string[];
}

const ProjectCard = ({ eachProject }: { eachProject: ProjectCardProps }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  const visibleTechStack = showAllTech
    ? eachProject.techStack
    : eachProject.techStack.slice(0, 4);
  const hasMoreTech = eachProject.techStack.length > 4;

  const truncateDescription = (text: string, maxLength: number = 250) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const shouldShowReadMore = eachProject.description.length > 250;

  const handleVideoPlay = () => {
    if (eachProject.videoUrl) {
      setIsVideoDialogOpen(true);
    }
  };

  const handleLiveWebsite = () => {
    if (eachProject.liveUrl) {
      window.open(eachProject.liveUrl, "_blank");
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg shadow-gray-900/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/30 transform hover:-translate-y-1 border border-gray-700">
      {/* Image Section with Video Overlay */}
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoPlay}
      >
        <CldImage
          src={eachProject.image}
          alt="image"
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          width="200"
          height="200"
        />

        {/* Watch Demo - Always Visible */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Watch Demo
        </div>

        {/* Play Button - Visible on Hover */}
        {eachProject.videoUrl && (
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Live Link */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white leading-tight">
            {eachProject.title}
          </h3>
          {eachProject.liveUrl && (
            <button
              onClick={handleLiveWebsite}
              className="ml-3 p-2 text-gray-400 border border-gray-600 hover:text-blue-400 transition-colors duration-200 hover:bg-gray-700 rounded-lg"
              title="Visit Live Website"
            >
              <div className="flex gap-1">
                <span className="text-gray-300">Link</span>
                <ExternalLink className="w-5 h-5 text-pink-400" />
              </div>
            </button>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed">
            {showFullDescription
              ? eachProject.description
              : truncateDescription(eachProject.description, 250)}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
            >
              {showFullDescription ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {visibleTechStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-600"
              >
                {tech}
              </span>
            ))}
            {hasMoreTech && (
              <button
                onClick={() => setShowAllTech(!showAllTech)}
                className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-blue-900/50 flex items-center gap-1"
              >
                {showAllTech ? (
                  <>
                    Less <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <MoreHorizontal className="w-3 h-3" />
                    {eachProject.techStack.length - 4} More
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Player Dialog - Fixed ReactPlayer props */}
      {eachProject.videoUrl && (
        <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
          <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white text-xl font-bold">
                {eachProject.title} - Demo Video
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              <ReactPlayer
                {...({
                  url: eachProject.videoUrl,
                  width: "100%",
                  height: "100%",
                  controls: true,
                  playing: isVideoDialogOpen,
                  config: {
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  },
                } as any)}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectCard;
