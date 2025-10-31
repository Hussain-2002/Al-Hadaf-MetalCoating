// src/components/Certificates.jsx
// 🎓 MODERNIZED CERTIFICATE DISPLAY COMPONENT
import { Card } from "@/components/ui/card";
import { Award, X, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ============================================
  // 📊 CERTIFICATE DATA (Hardcoded)
  // ============================================
  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015 Certification",
      image: "/assets/certificates/iso-9001.jpg",
    },
    {
      id: 2,
      name: "Quality Excellence Award",
      image: "/assets/certificates/quality-award.jpg",
    },
    {
      id: 3,
      name: "Industry Safety Certificate",
      image: "/assets/certificates/safety-cert.jpg",
    },
  ];

  // ============================================
  // 🎨 INTERSECTION OBSERVER FOR STAGGER ANIMATION
  // ============================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ============================================
  // 🔍 MODAL HANDLERS
  // ============================================
  const openModal = (cert) => {
    setSelectedCert(cert);
    setZoomLevel(1);
    setRotation(0);
    // Don't disable body scroll - modal handles its own scrolling
  };

  const closeModal = () => {
    setSelectedCert(null);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleReset = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        
        {/* ============================================ */}
        {/* 🎯 SECTION HEADING */}
        {/* ============================================ */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4 relative">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-red-400 blur-2xl opacity-20 animate-pulse"></div>
            <Award className="w-12 h-12 md:w-16 md:h-16 text-red-600 relative z-10 transform hover:scale-110 transition-transform duration-300" />
          </div>
          
          <div className="mb-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block">
              Our <span className="text-red-600">Certifications</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto mt-3"></div>
          </div>
          
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-600">
            Recognized for quality, safety, and excellence in metal coating services
          </p>
        </div>

        {/* ============================================ */}
        {/* 🎓 CERTIFICATES GRID - STAGGER ANIMATION */}
        {/* ============================================ */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group cursor-pointer w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs transform transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
              onClick={() => openModal(cert)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 bg-white">
                
                {/* Certificate Image - Portrait Aspect Ratio (3:4) */}
                <div className="relative w-full pb-[133.33%] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f3f4f6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='16'%3ECertificate%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* View Badge on Hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-2xl">
                      View Certificate
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-3 right-3 w-12 h-12 bg-red-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>

                {/* Certificate Name */}
                <div className="p-4 bg-white border-t-4 border-red-600">
                  <h3 className="text-center text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {cert.name}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* ============================================ */}
        {/* 🔭 EMPTY STATE */}
        {/* ============================================ */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Certificates will be displayed here
            </p>
          </div>
        )}
      </div>

      {/* ============================================ */}
      {/* 🔍 CERTIFICATE VIEWER MODAL - FULLY FIXED */}
      {/* ============================================ */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center animate-fade-in"
          style={{ zIndex: 999999 }}
          onClick={closeModal}
        >
          {/* Modal Content Container */}
          <div 
            className="relative w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header Bar with Title & Close Button */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black via-black/80 to-transparent p-4 md:p-6 flex items-center justify-between"
              style={{ zIndex: 1000000 }}
            >
              <h3 className="text-white font-bold text-base md:text-xl lg:text-2xl max-w-[70%] truncate">
                {selectedCert.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-red-500 transition-colors p-2 md:p-3 hover:bg-white/10 rounded-full transform hover:scale-110 duration-300 flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Certificate Image Container - Centered & Scrollable */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 pt-20 pb-24 md:pt-24 md:pb-28">
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-w-full max-h-[70vh] md:max-h-[75vh] w-auto h-auto object-contain transition-transform duration-300 ease-out rounded-lg shadow-2xl"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                    transformOrigin: 'center center',
                  }}
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1066'%3E%3Crect fill='%23f3f4f6' width='800' height='1066'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='24'%3ECertificate%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Bottom Control Bar - Zoom & Rotate */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 md:p-6"
              style={{ zIndex: 1000000 }}
            >
              <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                {/* Zoom Out Button */}
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                  className="bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed text-white p-2 md:p-3 rounded-lg transition-all transform hover:scale-110 disabled:hover:scale-100"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Zoom Level Indicator */}
                <div className="bg-white/20 px-3 md:px-4 py-2 rounded-lg backdrop-blur-sm min-w-[70px] text-center">
                  <span className="text-white font-bold text-sm md:text-base">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </div>

                {/* Zoom In Button */}
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  className="bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed text-white p-2 md:p-3 rounded-lg transition-all transform hover:scale-110 disabled:hover:scale-100"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Divider */}
                <div className="hidden sm:block w-px h-8 bg-white/30 mx-1 md:mx-2"></div>

                {/* Rotate Button */}
                <button
                  onClick={handleRotate}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-lg transition-all transform hover:scale-110 hover:rotate-90"
                  aria-label="Rotate certificate"
                >
                  <RotateCw className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base transform hover:scale-105"
                >
                  Reset
                </button>
              </div>

              {/* Close Hint Text */}
              <div className="text-center mt-3 md:mt-4">
                <p className="text-white/60 text-xs md:text-sm">
                  Click outside to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* 🎨 ANIMATIONS */}
      {/* ============================================ */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Certificates;