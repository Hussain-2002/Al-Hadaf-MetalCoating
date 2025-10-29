// src/pages/LandingPage.jsx
// 🎨 ULTRA-MODERN LANDING PAGE WITH APPLE-STYLE SCROLL EFFECTS
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

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0tO-WtDoYrojLZtAwcgxVBcc2DChXfLvrU0aTZ8NrFsBkp9UYmZtejrArvtXa2bXUbA/exec";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsData, setProjectsData] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  const { t } = useTranslation();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrolled / (heroHeight * 0.7), 1);
      setScrollProgress(progress);
      setShowContent(progress > 0.3);
      setShowScroll(scrolled > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

    const sections = document.querySelectorAll('.observe-animation');
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [projectsData]);

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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const services = [
    { key: "powder", image: "/assets/powder-coating.png", slug: "powder-coating" },
    { key: "galvanizing", image: "/assets/galvanizing.jpg", slug: "galvanizing" },
    { key: "electroplating", image: "/assets/electroplating.png", slug: "electroplating" },
    { key: "tin", image: "/assets/tin-plating.png", slug: "tin-plating" },
    { key: "goldsilver", image: "/assets/gold-silver-plating.png", slug: "gold-silver-plating" },
  ];

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
      {/* Header - Always Transparent */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main>
        <section 
          ref={heroRef}
          className="relative w-full overflow-hidden"
          style={{
            height: '150vh',
            minHeight: '100vh'
          }}
        >
          <div 
            className="fixed top-0 left-0 w-full h-screen z-0"
            style={{
              opacity: 1 - (scrollProgress * 0.3),
            }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="assets/sample-desktop.png"
              style={{
                filter: `brightness(${1 + (scrollProgress * 0.2)})`
              }}
            >
              <source src="assets/AL-hadaf.mp4" type="video/mp4" />
            </video>
            
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 transition-opacity duration-300"
              style={{
                opacity: 1 - (scrollProgress * 0.5)
              }}
            />
          </div>

          <div 
            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 100}px)`,
              opacity: scrollProgress,
              pointerEvents: showContent ? 'auto' : 'none',
              transition: 'transform 0.1s ease-out, opacity 0.3s ease-out'
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center md:text-left space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    <span className="block mb-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                      {t("welcome")}
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl font-medium drop-shadow-lg">
                    {t("description")}
                  </p>

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
                        className="bg-white/90 backdrop-blur-sm border-2 border-red-200 rounded-xl px-4 py-3 text-center hover:bg-red-50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <span className="text-gray-800 font-semibold text-xs sm:text-sm">
                          {t(key)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <button
                      className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                      onClick={() => (window.location.href = "/about")}
                    >
                      <span className="relative z-10">{t("readMore")}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>
                    <button
                      className="px-8 py-4 bg-white border-3 border-red-200 text-gray-800 font-bold text-base sm:text-lg rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                      onClick={() => (window.location.href = "/services")}
                    >
                      {t("viewWork")}
                    </button>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <div className="relative w-full aspect-square max-w-lg mx-auto">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
                    
                    <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-white/90 backdrop-blur-lg border-2 border-red-100">
                      <div className="p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-5xl">⚙️</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          Excellence in Coating
                        </h3>
                        <p className="text-gray-700 text-lg">
                          Industry-leading surface treatment solutions for all your needs
                        </p>
                        <div className="flex gap-4 pt-4">
                          <div className="bg-red-50 backdrop-blur px-6 py-3 rounded-lg border-2 border-red-200">
                            <p className="text-2xl font-bold text-red-600">15+</p>
                            <p className="text-sm text-gray-600">Years</p>
                          </div>
                          <div className="bg-red-50 backdrop-blur px-6 py-3 rounded-lg border-2 border-red-200">
                            <p className="text-2xl font-bold text-red-600">500+</p>
                            <p className="text-sm text-gray-600">Projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-opacity duration-300"
            style={{
              opacity: 1 - scrollProgress
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/20 shadow-lg">
              <div className="w-1.5 h-3 bg-white rounded-full animate-scroll"></div>
            </div>
          </div>
        </section>

        <section 
          className="observe-animation relative w-full min-h-screen flex flex-col justify-center py-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #E8EFF5 0%, #F0F4F8 50%, #E8EFF5 100%)'
          }}
        >
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

          <div className="relative w-full flex-1 flex items-center">
            <div className="relative w-full overflow-hidden">
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
                          <div className="absolute inset-0">
                            <img
                              src={service.image}
                              alt={t(`serviceSection.items.${service.key}.title`)}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
                          </div>

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

        <section 
          className="observe-animation relative w-full min-h-screen flex flex-col justify-center py-16 md:py-20"
          style={{
            background: 'linear-gradient(135deg, #E8F5F0 0%, #F0F8F5 50%, #E8F5F0 100%)'
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-red-600">Completed Projects</span>
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                Explore our successful project deliveries across various industries
              </p>
            </div>

            {loadingProjects && (
              <div className="text-center py-12">
                <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading projects...</p>
              </div>
            )}

            {!loadingProjects && projectsData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No projects available yet.</p>
              </div>
            )}

            {!loadingProjects && projectsData.length > 0 && (
              <>
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

        <div 
          className="observe-animation"
          style={{
            background: 'linear-gradient(135deg, #F0E8F5 0%, #F5F0F8 50%, #F0E8F5 100%)'
          }}
        >
          <AboutShort />
        </div>

        <div 
          className="observe-animation"
          style={{
            background: 'linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 50%, #FFE5E5 100%)'
          }}
        >
          <Certificates />
        </div>

        <Footer />
      </main>

      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg z-50 transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

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

      <SpinWheel 
        isOpen={isSpinWheelOpen} 
        onClose={() => setIsSpinWheelOpen(false)} 
      />

      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
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
        * {
          scroll-behavior: smooth;
        }
        section {
          position: relative;
          overflow: hidden;
        }
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