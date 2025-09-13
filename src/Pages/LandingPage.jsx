// src/pages/LandingPage.jsx
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false);
  const { t } = useTranslation();

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Add top padding so content does not hide behind header */}
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
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
