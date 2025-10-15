// src/components/Certificates.jsx
// 🎓 Certificate Display Component - Hardcoded Images from /assets
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

function Certificates() {
  // ============================================
  // 📊 CERTIFICATE DATA (Hardcoded)
  // ============================================
  // 👇 ADD YOUR CERTIFICATES HERE
  // Upload images to /public/assets/certificates/ folder
  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015 Certification",
      image: "/assets/certificates/iso-9001.jpg", // 👈 Replace with your image path
    },
    {
      id: 2,
      name: "Quality Excellence Award",
      image: "/assets/certificates/quality-award.jpg", // 👈 Replace with your image path
    },
    {
      id: 3,
      name: "Industry Safety Certificate",
      image: "/assets/certificates/safety-cert.jpg", // 👈 Replace with your image path
    },
    {
      id: 4,
      name: "Environmental Compliance",
      image: "/assets/certificates/environment-cert.jpg", // 👈 Replace with your image path
    },
    // 👇 ADD MORE CERTIFICATES AS NEEDED
    // {
    //   id: 5,
    //   name: "Certificate Name Here",
    //   image: "/assets/certificates/your-image.jpg",
    // },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Our <span className="text-red-600">Certifications</span>
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
            Recognized for quality, safety, and excellence in metal coating services
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                {/* Certificate Image - Portrait Aspect Ratio (3:4) */}
                <div className="relative w-full pb-[133.33%] bg-gray-100 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback placeholder if image not found
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f3f4f6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='16'%3ECertificate%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* View Badge on Hover */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl">
                      View Certificate
                    </div>
                  </div>
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

        {/* Empty State (if no certificates) */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Certificates will be displayed here
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;