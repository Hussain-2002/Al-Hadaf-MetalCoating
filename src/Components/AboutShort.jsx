// src/Components/AboutShort.jsx
// 🎨 ENHANCED ABOUT SHORT WITH PASTEL LAVENDER THEME
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

function AboutShort() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Image with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4  rounded-3xl opacity-20 blur-xl"></div>
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/logo.png"
                  alt="Al-Hadaf Metal Coating Facility"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/founder.jpg";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 "></div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-red-200"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">15+</p>
                  <p className="text-sm font-semibold text-gray-700">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Leading Provider of{" "}
              <span className="text-red-600">Metal Coating Solutions</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Al-Hadaf Metal Coating LLC is the UAE's trusted partner for premium powder coating, 
              galvanizing, and metal finishing services. With over 15 years of industry expertise, 
              we deliver exceptional quality and precision for residential, commercial, and industrial projects.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <p className="text-3xl font-bold text-red-600">500+</p>
                <p className="text-sm text-gray-600 font-medium">Projects Done</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <p className="text-3xl font-bold text-red-600">100+</p>
                <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <p className="text-3xl font-bold text-red-600">6+</p>
                <p className="text-sm text-gray-600 font-medium">Services</p>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 pt-4"
            >
              {[
                "ISO Certified Quality Standards",
                "State-of-the-Art Equipment",
                "Expert Technical Team",
                "Competitive Pricing"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                onClick={() => window.location.href = "/about"}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base"
              >
                Learn More About Us →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutShort;