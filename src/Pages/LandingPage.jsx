// src/pages/LandingPage.jsx
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import AboutShort from "@/Components/AboutShort";
import Certificates from "../Components/Certificates";
import SpinWheel from "../components/SpinWheel";
import ProjectDetailsModal from "../components/ProjectDetailsModal"; // ✅ NEW: Import modal component

// ============================================
// 🔧 CONFIGURATION - PASTE YOUR APPS SCRIPT URL
// ============================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0tO-WtDoYrojLZtAwcgxVBcc2DChXfLvrU0aTZ8NrFsBkp9UYmZtejrArvtXa2bXUbA/exec";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsData, setProjectsData] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // ✅ NEW: Store selected project
  const { t } = useTranslation();

  // ============================================
  // 🎯 SCROLL TO TOP FUNCTIONALITY
  // ============================================
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ============================================
  // 🔥 FETCH PROJECTS FROM GOOGLE SHEET
  // ============================================
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(APPS_SCRIPT_URL);
      const result = await response.json();
      
      if (result.result === "success") {
        // Filter only projects (not blogs)
        const projects = result.data.filter(item => item.Type === "project");
        // Sort by timestamp (newest first)
        projects.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
        setProjectsData(projects);
      }
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoadingProjects(false);
    }
  };

  // ============================================
  // 🎨 HANDLE PROJECT CLICK - UPDATED TO OPEN MODAL
  // ============================================
  const handleProjectClick = (project) => {
    setSelectedProject(project); // Open modal with project data
  };

  // Services data with translation keys
  const services = [
    {
      key: "powder",
      image: "/assets/powder-coating.png",
      slug: "powder-coating",
    },
    {
      key: "galvanizing",
      image: "/assets/galvanizing.jpg",
      slug: "galvanizing",
    },
    {
      key: "electroplating",
      image: "/assets/electroplating.png",
      slug: "electroplating",
    },
    {
      key: "tin",
      image: "/assets/tin-plating.png",
      slug: "tin-plating",
    },
    {
      key: "goldsilver",
      image: "/assets/gold-silver-plating.png",
      slug: "gold-silver-plating",
    },
  ];

  // Slide navigation without jump/glitch
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < services.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < services.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Add top padding so content does not hide behind header */}
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pb-1 md:pb-0">
          {/* Left: Video Block */}
          <div className="relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
            <div className="w-[90%] h-[50%] md:h-[80%] overflow-hidden rounded-lg md:rounded-none">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="assets/sample-desktop.png"
              >
                <source src="assets/hero-video-desktop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 mt-[-100px]">
            <div className="w-full md:w-[90%] flex flex-col justify-center">
              {/* Heading */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-center md:text-left"
                style={{ textShadow: "2px 2px 6px hsla(0, 100%, 50%, 0.30)" }}
              >
                <span className="text-brand-red block mb-2">{t("welcome")}</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-6 leading-relaxed text-center md:text-left">
                {t("description")}
              </p>

              {/* Services Grid (2x3) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  "services.powder",
                  "services.galvanizing",
                  "services.electroplating",
                  "services.tin",
                  "services.metal",
                  "services.antique",
                ].map((key, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-center hover:bg-gray-100 transition-all duration-300"
                  >
                    <span className="text-gray-800 font-medium text-xs sm:text-sm">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  className="px-6 py-3 bg-brand-red text-brand-white font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => (window.location.href = "/about")}
                >
                  {t("readMore")}
                </button>
                <button
                  className="px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => (window.location.href = "/services")}
                >
                  {t("viewWork")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section Heading */}
        <section className="w-full py-1 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                {t("serviceSection.heading")}
              </h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
                {t("serviceSection.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Services Carousel */}
        <section className="relative w-full py-8">
          <div className="relative w-full overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden md:block w-full px-12">
              <div className="relative h-[500px]">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{
                    width: `${services.length * 100}%`,
                    transform: `translateX(-${currentSlide * (100 / services.length)}%)`,
                  }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / services.length}%` }}>
                      <Card
                        className="relative h-full w-full rounded-2xl shadow-2xl overflow-hidden"
                        style={{ backgroundColor: "#111827" }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={service.image}
                            alt={t(`serviceSection.items.${service.key}.title`)}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full w-1/2 p-10 flex flex-col justify-end items-start z-10">
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold" style={{ color: "#ffffff" }}>
                              {t(`serviceSection.items.${service.key}.title`)}
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: "#d1d5db" }}>
                              {t(`serviceSection.items.${service.key}.description`)}
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: "#d1d5db" }}>
                              {t(`serviceSection.items.${service.key}.shortDesc`)}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Center Button */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                          <Button
                            onClick={() => (window.location.href = `/services`)}
                            className="font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                            style={{
                              background: "linear-gradient(to right, #dc2626, #b91c1c)",
                              color: "#ffffff",
                            }}
                          >
                            {t("serviceSection.viewMore")}
                          </Button>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden w-full">
              <Card className="relative mx-4 overflow-hidden rounded-2xl shadow-2xl" style={{ backgroundColor: "#111827" }}>
                <div className="flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={services[currentSlide].image}
                      alt={t(`serviceSection.items.${services[currentSlide].key}.title`)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent"></div>
                  </div>
                  <div className="p-6" style={{ background: "linear-gradient(to bottom, #111827, #1f2937)" }}>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                      {t(`serviceSection.items.${services[currentSlide].key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#d1d5db" }}>
                      {t(`serviceSection.items.${services[currentSlide].key}.shortDesc`)}
                    </p>
                    <Button
                      onClick={() => (window.location.href = `/services`)}
                      className="font-semibold px-5 py-2 rounded-lg transition-all duration-300 w-full cursor-pointer"
                      style={{
                        background: "linear-gradient(to right, #dc2626, #b91c1c)",
                        color: "#ffffff",
                      }}
                    >
                      {t("serviceSection.viewMore")}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Arrows */}
            <div className="absolute inset-0 pointer-events-none z-30">
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-auto transition-all duration-300 hover:bg-white/10 rounded-full p-2"
                style={{ background: "rgba(0, 0, 0, 0.3)", border: "none" }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-auto transition-all duration-300 hover:bg-white/10 rounded-full p-2"
                style={{ background: "rgba(0, 0, 0, 0.3)", border: "none" }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-red-600 scale-125" : "bg-gray-500 hover:bg-black"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 🎯 PROJECT MARQUEE SECTION - MOBILE RESPONSIVE */}
        {/* ============================================ */}
        <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                Our <span className="text-red-600">Completed Projects</span>
              </h2>
              <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
                Explore our successful project deliveries across various industries
              </p>
            </div>

            {/* Loading State */}
            {loadingProjects && (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading projects...</p>
              </div>
            )}

            {/* No Projects State */}
            {!loadingProjects && projectsData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No projects available yet.</p>
              </div>
            )}

            {/* Project Marquee - DESKTOP ONLY */}
            {!loadingProjects && projectsData.length > 0 && (
              <>
                {/* Desktop Marquee */}
              <div className="hidden md:block relative overflow-hidden py-8">
                <div className="flex animate-marquee hover:pause-animation py-4">                    {/* Duplicate projects for seamless loop */}
                    {[...projectsData, ...projectsData].map((project, index) => {
                      const imageURLs = project.ImageURLs 
                        ? project.ImageURLs.split(",").map(url => url.trim()) 
                        : [];
                      const mainImage = imageURLs[0] || "/assets/default-project.jpg";

                      return (
                        <div
                          key={`${project.Timestamp}-${index}`}
                          className="flex-shrink-0 mx-6 my-4 w-80 cursor-pointer group"
                          onClick={() => handleProjectClick(project)}
                        >
                        <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">                            {/* Fixed Aspect Ratio Image Container (16:9) */}
                            <div className="relative w-full pb-[56.25%] bg-gray-200 overflow-hidden">
                              <img
                                src={mainImage}
                                alt={project.Title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  e.target.src = "/assets/default-project.jpg";
                                }}
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-4 bg-white">
                              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                {project.Title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold">Client:</span> {project.Company}
                              </p>
                              <p className="text-xs text-gray-500">
                                Led by: {project["Author/Lead"]}
                              </p>
                            </div>

                            {/* Hover Badge */}
                            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              View Details
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Grid - NO MARQUEE */}
                <div className="block md:hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
                    {projectsData.map((project, index) => {
                      const imageURLs = project.ImageURLs 
                        ? project.ImageURLs.split(",").map(url => url.trim()) 
                        : [];
                      const mainImage = imageURLs[0] || "/assets/default-project.jpg";

                      return (
                        <div
                          key={`${project.Timestamp}-${index}`}
                          className="cursor-pointer"
                          onClick={() => handleProjectClick(project)}
                        >
                          <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Fixed Aspect Ratio Image Container (16:9) */}
                            <div className="relative w-full pb-[56.25%] bg-gray-200 overflow-hidden">
                              <img
                                src={mainImage}
                                alt={project.Title}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.src = "/assets/default-project.jpg";
                                }}
                              />
                            </div>

                            {/* Project Info */}
                            <div className="p-4 bg-white">
                              <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                                {project.Title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-1">
                                <span className="font-semibold">Client:</span> {project.Company}
                              </p>
                              <p className="text-xs text-gray-500">
                                Led by: {project["Author/Lead"]}
                              </p>
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* View All Projects Button */}
            {!loadingProjects && projectsData.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  onClick={() => window.location.href = "/blog"}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View All Projects & Blogs
                </Button>
              </div>
            )}
          </div>
        </section>

        <AboutShort />

        {/* ============================================ */}
        {/* 🎓 CERTIFICATE SECTION - NEW! */}
        {/* ============================================ */}
        <Certificates />

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-brand-red text-brand-white hover:bg-brand-blue shadow-lg z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* ============================================ */}
      {/* 🎡 SPIN WHEEL FLOATING BUTTON - NEW! */}
      {/* ============================================ */}
      <button
        onClick={() => setIsSpinWheelOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="Open Spin Wheel"
      >
        <div className="text-3xl transform group-hover:rotate-180 transition-transform duration-500">
          🎡
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Spin & Win! 🎁
        </div>
      </button>

      {/* ============================================ */}
      {/* 🎡 SPIN WHEEL MODAL - NEW! */}
      {/* ============================================ */}
      <SpinWheel 
        isOpen={isSpinWheelOpen} 
        onClose={() => setIsSpinWheelOpen(false)} 
      />

      {/* ============================================ */}
      {/* 🎯 PROJECT DETAILS MODAL - NEW! */}
      {/* ============================================ */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* ============================================ */}
      {/* 🎨 MARQUEE ANIMATION CSS - DESKTOP ONLY */}
      {/* ============================================ */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;