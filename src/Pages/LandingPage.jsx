// src/pages/LandingPage.jsx
// 🎨 MODERNIZED LANDING PAGE WITH ALTERNATING PASTEL SECTIONS
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import AboutShort from "@/Components/AboutShort";
import Certificates from "../Components/Certificates";
import SpinWheel from "../components/SpinWheel";
import ProjectDetailsModal from "../components/ProjectDetailsModal";

// ============================================
// 🔧 CONFIGURATION
// ============================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0tO-WtDoYrojLZtAwcgxVBcc2DChXfLvrU0aTZ8NrFsBkp9UYmZtejrArvtXa2bXUbA/exec";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsData, setProjectsData] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 🎯 For parallax effect
  const { t } = useTranslation();

  // 🎯 Refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  // ============================================
  // 🎨 PARALLAX SCROLL EFFECT FOR HERO
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
      
      // Calculate scroll progress for parallax (0 to 1)
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / heroHeight, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ============================================
  // 🎯 INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
  // ============================================
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.observe-animation');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [projectsData]); // Re-run when projects load

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
        const projects = result.data.filter(item => item.Type === "project");
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
  // 🎨 HANDLE PROJECT CLICK
  // ============================================
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Services data
  const services = [
    { key: "powder", image: "/assets/powder-coating.png", slug: "powder-coating" },
    { key: "galvanizing", image: "/assets/galvanizing.jpg", slug: "galvanizing" },
    { key: "electroplating", image: "/assets/electroplating.png", slug: "electroplating" },
    { key: "tin", image: "/assets/tin-plating.png", slug: "tin-plating" },
    { key: "goldsilver", image: "/assets/gold-silver-plating.png", slug: "gold-silver-plating" },
  ];

  // Carousel navigation
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
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* Header */}
      <Header />

      <main className="pt-20">
        {/* ============================================ */}
        {/* 🎯 SECTION 1: HERO POSTER WITH PARALLAX */}
        {/* ============================================ */}
        <section 
          ref={heroRef}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 50%, #FFE5E5 100%)'
          }}
        >
          {/* Parallax Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23DC2626" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              transform: `translateY(${scrollProgress * 100}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Hero Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Left: Content */}
              <div 
                className="text-center md:text-left space-y-6"
                style={{
                  transform: `translateY(${scrollProgress * -50}px)`,
                  opacity: 1 - scrollProgress * 0.5,
                  transition: 'all 0.1s ease-out'
                }}
              >
                {/* Heading with Gradient */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  <span 
                    className="block mb-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 2px 10px rgba(220, 38, 38, 0.1)'
                    }}
                  >
                    {t("welcome")}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  {t("description")}
                </p>

                {/* Services Grid (2x3) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
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
                      className="bg-white/70 backdrop-blur-sm border-2 border-red-200 rounded-xl px-4 py-3 text-center hover:bg-white hover:border-red-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="text-gray-800 font-semibold text-xs sm:text-sm">
                        {t(key)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <button
                    className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={() => (window.location.href = "/about")}
                  >
                    <span className="relative z-10">{t("readMore")}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                  <button
                    className="px-8 py-4 bg-white border-3 border-gray-800 text-gray-800 font-bold text-base sm:text-lg rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                    onClick={() => (window.location.href = "/services")}
                  >
                    {t("viewWork")}
                  </button>
                </div>
              </div>

              {/* Right: Video/Image with Floating Animation */}
              <div 
                className="relative"
                style={{
                  transform: `translateY(${scrollProgress * 30}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-400/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-300/30 rounded-full blur-2xl animate-pulse delay-700"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
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
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-3 bg-red-600 rounded-full animate-scroll"></div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 🎯 SECTION 2: SERVICES (PASTEL BLUE-GRAY) */}
        {/* ============================================ */}
        <section 
          ref={servicesRef}
          className="observe-animation relative w-full min-h-screen flex flex-col justify-center py-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #E8EFF5 0%, #F0F4F8 50%, #E8EFF5 100%)'
          }}
        >
          {/* Section Heading */}
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {t("serviceSection.heading")}
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                {t("serviceSection.description")}
              </p>
            </div>
          </div>

          {/* Services Carousel */}
          <div className="relative w-full flex-1 flex items-center">
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
                        <Card className="relative h-full w-full rounded-2xl shadow-2xl overflow-hidden bg-gray-900 transform hover:scale-105 transition-transform duration-300">
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
                              <h3 className="text-2xl font-bold text-white">
                                {t(`serviceSection.items.${service.key}.title`)}
                              </h3>
                              <p className="text-base leading-relaxed text-gray-300">
                                {t(`serviceSection.items.${service.key}.description`)}
                              </p>
                              <p className="text-base leading-relaxed text-gray-300">
                                {t(`serviceSection.items.${service.key}.shortDesc`)}
                              </p>
                            </div>
                          </div>

                          {/* Bottom Button */}
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                            <Button
                              onClick={() => (window.location.href = `/services`)}
                              className="font-semibold px-6 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                <Card className="relative mx-4 overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <div className="flex flex-col">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={services[currentSlide].image}
                        alt={t(`serviceSection.items.${services[currentSlide].key}.title`)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent"></div>
                    </div>
                    <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {t(`serviceSection.items.${services[currentSlide].key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4 text-gray-300">
                        {t(`serviceSection.items.${services[currentSlide].key}.shortDesc`)}
                      </p>
                      <Button
                        onClick={() => (window.location.href = `/services`)}
                        className="font-semibold px-5 py-2 rounded-lg w-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800"
                      >
                        {t("serviceSection.viewMore")}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 pointer-events-none z-30">
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-auto bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-auto bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
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
                      currentSlide === index ? "bg-red-600 scale-125" : "bg-gray-400 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 🎯 SECTION 3: PROJECTS (PASTEL MINT) */}
        {/* ============================================ */}
        <section 
          ref={projectsRef}
          className="observe-animation relative w-full min-h-screen flex flex-col justify-center py-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #E8F5F0 0%, #F0F8F5 50%, #E8F5F0 100%)'
          }}
        >
          <div className="container mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-red-600">Completed Projects</span>
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
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

            {/* Project Display */}
            {!loadingProjects && projectsData.length > 0 && (
              <>
                {/* Desktop Marquee */}
                <div className="hidden md:block relative overflow-hidden py-8">
                  <div className="flex animate-marquee hover:pause-animation py-4">
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
                          <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 bg-white">
                            <div className="relative w-full pb-[56.25%] bg-gray-200 overflow-hidden">
                              <img
                                src={mainImage}
                                alt={project.Title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  e.target.src = "/assets/default-project.jpg";
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
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
                            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              View Details
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Grid */}
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
                          <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
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

            {/* View All Button */}
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

        {/* ============================================ */}
        {/* 🎯 SECTION 4: ABOUT (PASTEL LAVENDER) */}
        {/* ============================================ */}
        <div 
          className="observe-animation"
          style={{
            background: 'linear-gradient(135deg, #F0E8F5 0%, #F5F0F8 50%, #F0E8F5 100%)'
          }}
        >
          <AboutShort />
        </div>

        {/* ============================================ */}
        {/* 🎯 SECTION 5: CERTIFICATES (PASTEL PEACH) */}
        {/* ============================================ */}
        <div 
          className="observe-animation"
          style={{
            background: 'linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 50%, #FFE5E5 100%)'
          }}
        >
          <Certificates />
        </div>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg z-50 transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* ============================================ */}
      {/* 🎡 SPIN WHEEL FLOATING BUTTON */}
      {/* ============================================ */}
      <button
        onClick={() => setIsSpinWheelOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-pulse hover:animate-none"
        aria-label="Open Spin Wheel"
      >
        <div className="text-3xl transform group-hover:rotate-180 transition-transform duration-500">
          🎡
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Spin & Win! 🎁
        </div>
      </button>

      {/* ============================================ */}
      {/* 🎡 SPIN WHEEL MODAL */}
      {/* ============================================ */}
      <SpinWheel 
        isOpen={isSpinWheelOpen} 
        onClose={() => setIsSpinWheelOpen(false)} 
      />

      {/* ============================================ */}
      {/* 🎯 PROJECT DETAILS MODAL */}
      {/* ============================================ */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* ============================================ */}
      {/* 🎨 ANIMATIONS & STYLES */}
      {/* ============================================ */}
      <style>{`
        /* 🎯 Marquee Animation - Desktop Only */
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

        /* 🎨 Fade In Up Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* 🎯 Scroll Indicator Animation */
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        /* 🎨 Pulse Delay Animation */
        .delay-700 {
          animation-delay: 700ms;
        }

        /* 🎯 Smooth Transitions */
        * {
          scroll-behavior: smooth;
        }

        /* 🎨 Hidden Overflow for Sections */
        section {
          position: relative;
          overflow: hidden;
        }

        /* 🎯 Opacity Transition for Observed Elements */
        .observe-animation {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .observe-animation.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default LandingPage;