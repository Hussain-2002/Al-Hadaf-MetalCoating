// src/pages/ProjectDetails.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building2, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectDetails() {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [searchParams] = useSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Extract project data from URL params
  const projectData = {
    title: searchParams.get("title") || "Untitled Project",
    lead: searchParams.get("lead") || "Unknown",
    company: searchParams.get("company") || "N/A",
    content: searchParams.get("content") || "No description available.",
    timestamp: searchParams.get("timestamp") || "",
    images: searchParams.get("images") 
      ? searchParams.get("images").split(",").map(url => url.trim()).filter(url => url)
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

  // ============================================
  // 🔄 AUTO SCROLL TO TOP ON LOAD
  // ============================================
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
          </div>

          {/* Project Content */}
          <div className="max-w-5xl mx-auto">
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
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Projects
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
          </div>

          {/* Thumbnail Gallery (if multiple images) */}
          {projectData.images.length > 1 && (
            <div className="max-w-5xl mx-auto mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Gallery ({projectData.images.length} images)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {projectData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      window.scrollTo({ top: 0, behavior: "smooth" });
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ProjectDetails;