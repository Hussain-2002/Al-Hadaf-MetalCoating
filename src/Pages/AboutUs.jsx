import { useTranslation } from "react-i18next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function AboutUs() {
  const { t } = useTranslation();
  const [hoveredSection, setHoveredSection] = useState(null);

  const teamMembers = [
    {
      name: t("about.teamMembers.hussain.name"),
      role: t("about.teamMembers.hussain.role"),
      image: "/assets/team-founder.jpg",
    },
    {
      name: t("about.teamMembers.mannan.name"),
      role: t("about.teamMembers.mannan.role"),
      image: "/assets/team-operations.jpg",
    },
    {
      name: t("about.teamMembers.saleh.name"),
      role: t("about.teamMembers.saleh.role"),
      image: "/assets/team-engineer.jpg",
    },
    {
      name: t("about.teamMembers.aisha.name"),
      role: t("about.teamMembers.aisha.role"),
      image: "/assets/team-quality.jpg",
    },
  ];

  const coreValues = [
    { icon: "⭐", key: "quality" },
    { icon: "🤝", key: "integrity" },
    { icon: "💡", key: "innovation" },
    { icon: "👥", key: "customer" }
  ];

  const industries = [
    {
      title: "Architectural Metal Coating",
      description: "Premium powder coating services for windows, doors, facades, and structural elements",
      icon: "🏢"
    },
    {
      title: "Automotive Metal Coating",
      description: "Durable coatings for vehicle parts, chassis, wheels, and custom automotive applications",
      icon: "🚗"
    },
    {
      title: "Industrial Metal Coating",
      description: "Heavy-duty protective coatings for machinery, equipment, and manufacturing components",
      icon: "⚙️"
    },
    {
      title: "Furniture Metal Coating",
      description: "Decorative and protective finishes for indoor and outdoor furniture pieces",
      icon: "🪑"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] bg-center bg-cover flex items-center justify-center bg-scroll md:bg-fixed w-full"
        style={{ backgroundImage: "url('/assets/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-3xl text-center px-4 sm:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4"
          >
            {t("about.heroTitle")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {t("about.heroDescription")}
          </motion.p>
        </div>
      </section>

      {/* Company Overview - SEO Optimized */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About Al-Hadaf Metal Coating LLC
            </h2>
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto space-y-4">
              <p>
                Al-Hadaf Metal Coating LLC is a premier metal coating company in the UAE, specializing in advanced powder coating services and surface finishing solutions. With state-of-the-art facilities and cutting-edge technology, we deliver superior metal coating services that exceed industry standards and customer expectations.
              </p>
              <p>
                Our comprehensive metal coating services include powder coating, sandblasting, zinc coating, electrostatic coating, and specialized protective coatings for diverse industrial applications. We serve clients across Dubai, Sharjah, Ajman, and throughout the United Arab Emirates with professional metal finishing solutions.
              </p>
            </div>
          </motion.div>

          {/* Who We Are Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              {t("about.whoWeAreTitle")}
            </h3>
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto space-y-4">
              <p>{t("about.whoWeAreDescription")}</p>
              <p>{t("about.whoWeAreDescription2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metal Coating Industry Expertise */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Leading the Metal Coating Industry in UAE
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                  Advanced Powder Coating Technology
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Our powder coating facility utilizes electrostatic spray deposition technology to apply dry powder particles onto metal surfaces. The powder coating process involves electrostatically charging the powder particles, which are then attracted to grounded metal objects. After application, the coated items are cured in high-temperature ovens, creating a durable, uniform finish that surpasses traditional liquid paint in performance and longevity.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We offer an extensive range of powder coating finishes including glossy, matte, textured, metallic, and specialized effects. Our metal coating services provide superior corrosion resistance, UV protection, chemical resistance, and exceptional durability for both indoor and outdoor applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                  Comprehensive Surface Preparation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  Quality metal coating begins with proper surface preparation. Our advanced pre-treatment processes include sandblasting, chemical cleaning, degreasing, phosphating, and surface profiling. We utilize automated shot blasting equipment and multi-stage pre-treatment systems to ensure optimal adhesion and coating performance.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Our metal surface treatment capabilities handle aluminum, steel, stainless steel, galvanized metal, and various alloy substrates. Each material receives specialized preparation protocols to achieve maximum coating adhesion, durability, and aesthetic appeal.
                </p>
              </motion.div>
            </div>

            {/* Additional Industry Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Why Powder Coating is Superior to Traditional Paint
              </h3>
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Powder coating offers significant advantages over conventional liquid paint systems. Unlike wet paint that requires solvents and emits volatile organic compounds (VOCs), powder coating is an environmentally friendly finishing method that produces minimal waste and harmful emissions. The powder overspray can be recovered and reused, making it a sustainable and cost-effective metal coating solution.
                </p>
                <p>
                  The durability of powder coated surfaces far exceeds traditional paint. Powder coating creates a thicker, more uniform coating that resists chipping, scratching, fading, and wear. This enhanced durability translates to longer product lifecycles, reduced maintenance costs, and superior protection against harsh environmental conditions including extreme temperatures, humidity, salt exposure, and UV radiation.
                </p>
                <p>
                  Our powder coating services provide exceptional finish quality with smooth, professional-grade aesthetics. The electrostatic application process ensures complete coverage, even on complex geometries and hard-to-reach areas. The high-temperature curing process creates a chemically bonded surface that delivers unmatched adhesion and performance characteristics.
                </p>
              </div>
            </motion.div>

            {/* Industries We Serve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-gray-800">
                Industries Served by Our Metal Coating Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {industry.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality and Certifications */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Quality Assurance & Technical Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  State-of-the-Art Coating Facility
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>Automated conveyor powder coating system with precision application controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>High-efficiency electrostatic spray guns for uniform powder distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>Industrial curing ovens with precise temperature control and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>Advanced dust collection and powder recovery systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>Multi-stage chemical pre-treatment tanks for optimal surface preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>Automated shot blasting machines for heavy-duty surface profiling</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-md p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Quality Control Standards
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>Rigorous coating thickness measurement and verification procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>Adhesion testing using cross-hatch and pull-off methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>Color matching and consistency verification with spectrophotometry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>Salt spray testing for corrosion resistance validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>UV exposure testing for outdoor durability assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600 font-bold">•</span>
                    <span>Complete documentation and traceability for all coating batches</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values with Criss-Cross Animation */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
              {t("about.coreValuesTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? -100 : 100,
                      rotate: isEven ? -15 : 15
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      rotate: 0
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: isEven ? 2 : -2,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="text-4xl mb-3"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {t(`about.coreValues.${value.key}.title`)}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t(`about.coreValues.${value.key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Environmental Responsibility in Metal Coating
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Al-Hadaf Metal Coating LLC is committed to environmentally sustainable metal finishing practices. Our powder coating processes significantly reduce environmental impact compared to traditional wet paint systems. We operate with zero VOC emissions, minimal waste generation, and comprehensive powder recovery systems that recycle overspray material.
              </p>
              <p>
                Our facility implements water conservation measures, energy-efficient curing ovens, and responsible chemical management protocols. We partner with certified powder coating manufacturers who prioritize eco-friendly formulations and sustainable production methods. Our commitment to environmental stewardship extends throughout our operations, from material sourcing to waste disposal.
              </p>
              <p>
                By choosing our powder coating services, clients contribute to reducing industrial pollution while receiving superior coating performance. Our green metal coating solutions help businesses meet sustainability goals without compromising quality, durability, or aesthetic requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Vision/Mission/Founder Section */}
      <section className="py-12 sm:py-16 bg-gray-100 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div 
            className="relative min-h-[500px] md:min-h-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const width = rect.width;
              const threshold = width * 0.25;

              if (x < threshold) {
                setHoveredSection('vision');
              } else if (x > width - threshold) {
                setHoveredSection('mission');
              } else {
                setHoveredSection(null);
              }
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <AnimatePresence mode="wait">
              {!hoveredSection && (
                <motion.div
                  key="founder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 sm:p-8 md:p-12"
                >
                  <img
                    src="/assets/founder.jpg"
                    alt="Founder of Al-Hadaf Metal Coating"
                    className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[420px]"
                  />
                  <div className="text-center md:text-left w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                      {t("about.founderMessageTitle")}
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                      {t("about.founderMessage")}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {t("about.founderMessage2")}
                    </p>
                    <p className="mt-6 font-semibold text-gray-800">
                      {t("about.founderSignature")}
                    </p>
                  </div>
                </motion.div>
              )}

              {hoveredSection === 'vision' && (
                <motion.div
                  key="vision"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="p-8 sm:p-12 md:p-16 h-full flex flex-col justify-center bg-gradient-to-br from-blue-500 to-blue-700 min-h-[500px] md:min-h-[420px]"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      {t("about.visionTitle")}
                    </h3>
                  </div>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                    {t("about.visionDescription")}
                  </p>
                  <div className="mt-6 text-white/80 text-sm">
                    Hover right for Mission →
                  </div>
                </motion.div>
              )}

              {hoveredSection === 'mission' && (
                <motion.div
                  key="mission"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="p-8 sm:p-12 md:p-16 h-full flex flex-col justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 min-h-[500px] md:min-h-[420px]"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white">
                      {t("about.missionTitle")}
                    </h3>
                  </div>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                    {t("about.missionDescription")}
                  </p>
                  <div className="mt-6 text-white/80 text-sm">
                    ← Hover left for Vision
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${hoveredSection === 'vision' ? 'bg-blue-600 scale-150' : 'bg-gray-300'}`} />
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${!hoveredSection ? 'bg-gray-600 scale-150' : 'bg-gray-300'}`} />
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${hoveredSection === 'mission' ? 'bg-indigo-600 scale-150' : 'bg-gray-300'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - SEO Content */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 to-blue-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Why Choose Al-Hadaf for Metal Coating Services
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Expert Metal Coating Professionals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our team comprises highly trained powder coating specialists with extensive experience in metal surface finishing. We ensure every project meets the highest quality standards through meticulous attention to detail and technical expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Fast Turnaround Time
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We understand the importance of project timelines. Our efficient powder coating processes and streamlined workflows ensure quick turnaround times without compromising quality. Same-day and express coating services available for urgent requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Custom Color Matching
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access to thousands of RAL, Pantone, and custom powder coating colors. Our color matching capabilities ensure perfect consistency across batches. We provide color samples and can match any existing finish specification.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer cost-effective powder coating solutions without sacrificing quality. Transparent pricing, no hidden fees, and volume discounts available for large-scale projects. Get a free quote for your metal coating requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Guaranteed Durability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All our powder coated finishes come with durability warranties. Proven resistance to weathering, corrosion, chemicals, and mechanical damage. Long-lasting protection that maintains appearance for years.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Customer-Centric Service
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated account managers, free consultations, pickup and delivery services available. We work closely with clients to understand requirements and deliver customized metal coating solutions that exceed expectations.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metal Coating Applications */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Powder Coating Applications & Capabilities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Architectural Components
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Aluminum window frames and profiles</li>
                  <li>• Metal doors and door frames</li>
                  <li>• Curtain wall systems and facades</li>
                  <li>• Railings, handrails, and balusters</li>
                  <li>• Cladding panels and louvers</li>
                  <li>• Structural steel components</li>
                  <li>• Decorative metalwork and grilles</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Industrial & Manufacturing
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Machinery housings and enclosures</li>
                  <li>• Control panels and electrical cabinets</li>
                  <li>• Storage racks and shelving systems</li>
                  <li>• Conveyor components and guards</li>
                  <li>• HVAC equipment and ductwork</li>
                  <li>• Manufacturing equipment parts</li>
                  <li>• Safety barriers and protective guards</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Consumer & Commercial
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Office and outdoor furniture</li>
                  <li>• Automotive parts and accessories</li>
                  <li>• Bicycle frames and components</li>
                  <li>• Appliance housings and panels</li>
                  <li>• Lighting fixtures and poles</li>
                  <li>• Signage and display systems</li>
                  <li>• Playground equipment and structures</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Metal Surfaces?
              </h3>
              <p className="text-lg mb-6 max-w-3xl mx-auto">
                Contact Al-Hadaf Metal Coating LLC today for professional powder coating services in UAE. Our experts are ready to discuss your project requirements and provide customized solutions for all your metal finishing needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Free Quote
                </a>
                <a
                  href="/services"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            {t("about.meetTeamTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 w-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300 w-full"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;