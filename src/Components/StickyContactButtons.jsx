import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function StickyContactButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  // CONFIGURE POSITION HERE
  const POSITION_CONFIG = {
    top: "16.5%",
    transform: "translateY(-50%)",
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      url: "https://wa.me/+971585328151",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://www.facebook.com/profile.php?id=61582487084256",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 3a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
        </svg>
      ),
      url: "https://www.instagram.com/alhadafmetalcoating/",
      bgColor: "bg-gradient-to-br from-pink-500 to-yellow-500",
      hoverColor: "hover:opacity-90",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/al-hadaf-metal-coating-llc-undefined-411698389/",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      name: "Location",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
        </svg>
      ),
      url: "https://maps.app.goo.gl/dpArca6B8NaonbEH7",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
    },
  ];

  return (
    <>
      {/* 🖥️ DESKTOP VERSION - Fixed on Right Side - lg screens and above */}
      <div
        className="hidden lg:block fixed right-0 z-50"
        style={{
          top: POSITION_CONFIG.top,
          transform: POSITION_CONFIG.transform,
        }}
      >
        <div className="relative">
          {/* Animated Hint Text */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [50, 0, 0, 50],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-blue-700 font-semibold text-sm px-3 py-1 rounded-full shadow-md whitespace-nowrap flex items-center gap-1"
            >
              💬 Click-here
            </motion.div>
          )}

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white p-3 rounded-l-xl shadow-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 relative overflow-hidden group"
            aria-label="Toggle contact buttons"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>

          {/* Social Buttons */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: isExpanded ? 0 : 100,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute right-full top-0 mr-2 space-y-2"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: isExpanded ? 0 : 100,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${link.bgColor} ${link.hoverColor} text-white p-2 rounded-md shadow-lg flex items-center justify-center transition-all duration-300 group relative overflow-hidden`}
                aria-label={`Contact via ${link.name}`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {link.icon}
                <span className="absolute right-full mr-2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 📱 MOBILE VERSION - In Header - below lg screens */}
      <div className="block lg:hidden">
        {/* Toggle Button - Shows Chat Icon */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white p-1.5 rounded-md shadow-lg relative overflow-hidden"
          aria-label="Toggle contact buttons"
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.svg
                key="chat"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="close"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Social Buttons Panel - Slides from Right */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsExpanded(false)}
              />

              {/* Social Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed top-0 right-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 flex flex-col"
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <span>💬</span> Connect With Us
                  </h3>
                </div>

                {/* Social Links */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`${link.bgColor} ${link.hoverColor} text-white p-3 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-300`}
                    >
                      <div className="flex-shrink-0">{link.icon}</div>
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-700 text-center">
                  <p className="text-gray-400 text-xs">
                    Al-Hadaf Metal Coating LLC
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default StickyContactButtons;