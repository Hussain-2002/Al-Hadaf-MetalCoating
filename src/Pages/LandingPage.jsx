// src/pages/LandingPage.jsx
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import AboutShort from "@/Components/AboutShort";

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
    <div className="relatgold-silver-platingive min-h-screen w-full bg-white">
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
                            onClick={() => (window.location.href = `/service/${service.slug}`)}
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
                      onClick={() => (window.location.href = `/service/${services[currentSlide].slug}`)}
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

        <AboutShort />

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
