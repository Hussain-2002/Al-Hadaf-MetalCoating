// src/Components/AboutShort.jsx
// 🎨 MODERNIZED ABOUT SHORT SECTION
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function AboutShort() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20" id="aboutus">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* ============================================ */}
        {/* 🖼️ IMAGE SECTION - LEFT */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0 md:w-1/2"
        >
          <div className="relative group">
            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-200 to-purple-200 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main Image */}
            <div className="relative">
              <img
                src="assets/logo.png"
                alt="Al Hadaf Metal Coating"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* ============================================ */}
        {/* 📝 CONTENT SECTION - RIGHT */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          {/* Title with Gradient Underline */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              {t("about.short1")}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              {t("about.short2")}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              {t("about.short3")}
            </p>
          </div>

          {/* Experience Badge */}
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-red-50 to-purple-50 border-2 border-red-200 text-red-800 px-6 py-3 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
              {t("about.experience")}
            </span>
          </div>

          {/* Read More Button */}
          <a
            href="/about"
            className="group inline-block relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">{t("readMore")}</span>
            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutShort;