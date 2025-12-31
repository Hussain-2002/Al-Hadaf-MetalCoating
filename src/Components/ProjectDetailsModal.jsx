// src/components/ProjectDetailsModal.jsx - Modal Component Version
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Building2, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectDetailsModal({ project, onClose }) {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ============================================
  // 🔒 PREVENT BODY SCROLL WHEN MODAL IS OPEN
  // ============================================
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // ============================================
  // 🔄 RESET IMAGE INDEX ON PROJECT CHANGE
  // ============================================
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);
  
  // If no project data, don't render modal (AFTER all hooks)
  if (!project) return null;

  // Extract project data
  const projectData = {
    title: project.Title || "Untitled Project",
    lead: project["Author/Lead"] || "Unknown",
    company: project.Company || "N/A",
    content: project.Content || "No description available.",
    timestamp: project.Timestamp || "",
    images: project.ImageURLs 
      ? project.ImageURLs.split(",").map(url => url.trim()).filter(url => url)
      : []
  };

  // ============================================
  // 🎨 IMAGE NAVIGATION
  // ============================================
  const nextImage = () => {
    if (projectData.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev < projectData.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (projectData.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : projectData.images.length - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    // Modal Overlay
    <div 
      className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Content - Click inside won't close */}
      <div 
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          <Card className="overflow-hidden rounded-2xl shadow-2xl">
            {/* Image Carousel Section */}
            {projectData.images.length > 0 ? (
              <div className="relative bg-gray-900">
                {/* Main Image Display */}
                <div className="relative w-full pb-[56.25%] md:pb-[50%] bg-gray-800">
                  <img
                    src={projectData.images[currentImageIndex]}
                    alt={`${projectData.title} - Image ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "/assets/default-project.jpg";
                    }}
                  />
                </div>

                {/* Navigation Arrows (if multiple images) */}
                {projectData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {currentImageIndex + 1} / {projectData.images.length}
                </div>

                {/* Thumbnail Navigation (if multiple images) */}
                {projectData.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 px-4 py-2 rounded-lg">
                    {projectData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex === index
                            ? "bg-red-600 scale-125"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Placeholder if no images
              <div className="w-full pb-[56.25%] bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">No images available</p>
                </div>
              </div>
            )}

            {/* Project Information */}
            <div className="p-8 md:p-12 bg-white">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                {projectData.title}
              </h1>

              {/* Project Meta Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
                      Project Lead
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {projectData.lead}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
                      Client Company
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {projectData.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase mb-1">
                      Completed On
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {projectData.timestamp || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Description
                </h2>
                <div className="prose max-w-none">
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {projectData.content}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <X className="w-5 h-5" />
                  Close
                </Button>
                
                <Button
                  onClick={() => window.location.href = "/blog"}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </Card>

          {/* Thumbnail Gallery (if multiple images) */}
          {projectData.images.length > 1 && (
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Gallery ({projectData.images.length} images)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {projectData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      // Scroll to top of modal
                      document.querySelector('.max-h-\\[90vh\\]')?.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-4 transition-all duration-300 hover:scale-105 ${
                      currentImageIndex === index
                        ? "border-red-600 shadow-lg"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/assets/default-project.jpg";
                      }}
                    />
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                        <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Current
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;