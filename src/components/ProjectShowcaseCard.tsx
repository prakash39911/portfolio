import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Play, X, ExternalLink } from "lucide-react";
import { CldImage } from "next-cloudinary";

type ProjectDataType = {
  title: string;
  image: string;
  videoUrl: string;
  liveUrl: string;
  description: string;
  techStack: string[];
};

interface ProjectShowcaseCardProps {
  project: ProjectDataType;
}

const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({
  project,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Add this state
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTechStackExpanded, setIsTechStackExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayVideo = () => {
    if (project.videoUrl.length === 0) {
      return;
    }
    setIsVideoPlaying(true);
    setIsPlaying(true); // Start playing when video opens
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    setIsPlaying(true); // Reset for next time
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleTechStack = () => {
    setIsTechStackExpanded(!isTechStackExpanded);
  };

  const truncateDescription = (text: string, maxLength: number = 250) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const displayedDescription = isDescriptionExpanded
    ? project.description
    : truncateDescription(project.description);

  const displayedTechStack = isTechStackExpanded
    ? project.techStack
    : project.techStack.slice(0, 4);

  const remainingTechCount = project.techStack.length - 4;

  return (
    <div className="bg-slate-900 rounded-lg border border-gray-700 shadow-lg overflow-hidden w-96 mx-auto">
      {/* Image & Video Section */}
      <div
        className="relative aspect-video bg-gray-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isVideoPlaying ? (
          <div>
            <ReactPlayer
              src={project.videoUrl}
              width="100%"
              height="100%"
              playing={isPlaying} // Use the isPlaying state instead of true
              controls={true}
              className="absolute inset-0"
              onPlay={handlePlay} // Add play handler
              onPause={handlePause} // Add pause handler
            />
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 left-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <CldImage
              src={project.image}
              alt={project.title}
              width={300}
              height={250}
              className="w-full h-full object-cover"
            />

            {/* Watch Demo Badge */}
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 text-md rounded-md">
              {project.videoUrl.length > 0 ? "Watch Demo" : ""}
            </div>

            {/* Hover Overlay with Play Button */}
            {isHovered && project.videoUrl.length > 0 && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity">
                <button
                  onClick={handlePlayVideo}
                  className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors"
                >
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed mb-2">
            {displayedDescription}
          </p>
          {project.description.length > 250 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              {isDescriptionExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {displayedTechStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {remainingTechCount > 0 && (
            <button
              onClick={toggleTechStack}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              {isTechStackExpanded
                ? "Show Less"
                : `+${remainingTechCount} More`}
            </button>
          )}
        </div>

        {/* Action Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent hover:border-pink-500 border border-gray-500 text-white px-4 py-2 rounded-md transition-colors font-medium"
        >
          <ExternalLink size={16} className="text-pink-400" />
          View Live Site
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcaseCard;
