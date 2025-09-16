// src/pages/LandingPage.jsx
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Services data with 5 random services from Al Hadaf Metal Coating
  const services = [
    {
      title: "Powder Coating",
      description: "Free-flowing dry powder applied electrostatically and cured under heat.",
      shortDesc: "Electrostatically applied coating cured under heat for durable finish.",
      image: "/assets/services/powder-coating.jpg"
    },
    {
      title: "Galvanizing",
      description: "Hot-dip galvanizing process applying zinc coating to steel and iron.",
      shortDesc: "Zinc coating application to prevent rusting and offer protection.",
      image: "/assets/services/galvanizing.jpg"
    },
    {
      title: "Electroplating",
      description: "Metal coating through electrochemical deposition using direct current.",
      shortDesc: "Electrochemical process for producing superior metal coatings.",
      image: "/assets/services/electroplating.jpg"
    },
    {
      title: "Tin Plating",
      description: "Cost-effective tinning process offering excellent solderability.",
      shortDesc: "Affordable tin coating with superior corrosion protection.",
      image: "/assets/services/tin-plating.jpg"
    },
    {
      title: "Gold & Silver Plating",
      description: "Thin layer deposition ideal for jewelry, electronics and decoratives.",
      shortDesc: "Premium metal plating for jewelry, electronics and decorative items.",
      image: "/assets/services/gold-silver-plating.jpg"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Add top padding so content does not hide behind header */}
      <main className="pt-32 md:pt-40">
        {/* Hero Section - UNCHANGED */}
        <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pb-12 md:pb-0">
          {/* Left: Video Block */}
          <div className="relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
            <div className="w-[90%] h-full md:h-[80%] overflow-hidden rounded-lg md:rounded-none">
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
                <span className="text-brand-red block mb-2">
                  {t("welcome")}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-6 leading-relaxed text-center md:text-left">
                {t("description")}
              </p>

              {/* Services Grid (2x3) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  "Powder Coating",
                  "Galvanizing",
                  "Electroplating",
                  "Tin Plating",
                  "Metal Plating",
                  "Antique Finish",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-center hover:bg-gray-100 transition-all duration-300"
                  >
                    <span className="text-gray-800 font-medium text-xs sm:text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  className="px-6 py-3 bg-brand-red text-brand-white font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => (window.location.href = "#aboutus")}
                >
                  {t("readMore")}
                </button>
                <button
                  className="px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => (window.location.href = "#gallery")}
                >
                  {t("viewWork")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SERVICES CAROUSEL SECTION */}
        <section className="relative w-full py-12 bg-gradient-to-br from-white via-white to-white overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                Our Premium Services
              </h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                Discover our comprehensive metal coating solutions with cutting-edge technology and superior quality finishes.
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="relative overflow-hidden rounded-2xl h-80">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <Card className="overflow-hidden bg-gray-900/90 border-gray-700 shadow-2xl backdrop-blur-sm h-full">
                          <div className="flex h-full">
                            {/* Left Side - Content */}
                            <div className="w-1/2 p-6 flex flex-col justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-transparent">
                              <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white">
                                  {service.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed">
                                  {service.shortDesc}
                                </p>
                                <Button 
                                  onClick={() => (window.location.href = `/service/${service.slug}`)}
                                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit cursor-pointer"
                                >
                                  View More
                                </Button>
                              </div>
                            </div>
                            
                            {/* Right Side - Image */}
                            <div className="w-1/2 relative overflow-hidden">
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-900/20"></div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block md:hidden">
                <Card className="mx-2 overflow-hidden bg-gray-900/90 border-gray-700 shadow-2xl backdrop-blur-sm">
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="h-40 relative overflow-hidden">
                      <img 
                        src={services[currentSlide].image} 
                        alt={services[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 bg-gradient-to-b from-gray-900 to-gray-800">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {services[currentSlide].title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {services[currentSlide].shortDesc}
                      </p>
                      <Button 
                        onClick={() => (window.location.href = `/service/${services[currentSlide].slug}`)}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 w-full cursor-pointer"
                      >
                        View More
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Navigation Arrows - Better positioning */}
              <div className="absolute inset-0 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 shadow-lg pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-30 shadow-lg pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-red-600 scale-125' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top */}
      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-brand-red text-brand-white hover:bg-brand-blue shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

export default LandingPage;