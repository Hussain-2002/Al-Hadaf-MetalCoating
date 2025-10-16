// AntiqueFinish.jsx - Component Version
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trans as T } from "react-i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { submitComment } from "@/utils/submitComment";

export default function AntiqueFinish() {
  const [activeTab, setActiveTab] = useState("gallery");
  const [popupImage, setPopupImage] = useState(null);
  const [popupVideo, setPopupVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);

  // Mock gallery + video items
  const images = Array.from({ length: 12 }).map((_, i) => `/assets/gallery/antique-${i + 1}.jpg`);
  const videos = Array.from({ length: 6 }).map((_, i) => `/assets/videos/antique-${i + 1}.mp4`);

  // ✅ Unified form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitComment(form, "Antique Finish"); // 🎯 Service name sent here
      setSent(true);
      setForm({ name: "", contact: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch {
      alert("⚠️ Failed to send. Check connection or script URL.");
    }
  };

  // useEffect(() => {
  //   const logos = document.querySelectorAll("header img, nav img");
  //   logos.forEach((img) => {
  //     if (img && img.src && img.src.includes("logo")) {
  //       img.src = "/logo.png";
  //     }
  //   });
  // }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] text-white overflow-x-hidden">
      {/* Main Content */}
      <main className="pb-12 px-4 text-center relative">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
          <T>Antique Finish</T>
        </h1>
        <p className="text-gray-800 mb-12 max-w-2xl mx-auto">
          <T>Classic. Timeless. Elegant — where age becomes artistry.</T>
        </p>

        {/* TAB PILL SWITCHER */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex bg-white/10 rounded-full p-1 backdrop-blur-lg border border-white/20 space-x-2"
            style={{ boxShadow: "0 4px 15px rgba(255,255,255,0.1)" }}
          >
            {["gallery", "video", "comment"].map((tab) => (
              <TooltipProvider key={tab}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-full transition-all ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <T>
                        {tab === "gallery"
                          ? "Gallery"
                          : tab === "video"
                          ? "Video"
                          : "Comment"}
                      </T>
                    </button>
                  </TooltipTrigger>

                  <TooltipContent
                    className="bg-white text-black text-xs px-3 py-1 rounded-lg shadow-lg border border-gray-200"
                  >
                    <p>
                      {tab === "gallery"
                        ? "Work done by us"
                        : tab === "video"
                        ? "Experience the process with your own eyes"
                        : "Leave a comment or enquiry"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* ANIMATED TABS */}
        <AnimatePresence mode="wait">
          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
            >
              {images.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`antique-${i}`}
                  className="w-full h-48 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setPopupImage(src)}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {videos.map((src, i) => (
                <motion.video
                  key={i}
                  src={src}
                  muted
                  loop
                  className="w-full h-64 rounded-xl object-cover cursor-pointer"
                  onMouseEnter={() => setTimeout(() => setHoveredVideo(src), 2000)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => setPopupVideo(src)}
                  autoPlay={hoveredVideo === src}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "comment" && (
            <motion.div
              key="comment"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto text-left bg-white rounded-2xl p-3 shadow-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                <T>Leave a Comment or Enquiry</T>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="text"
                  placeholder="Contact Details"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <textarea
                  placeholder="Your Comment or Enquiry"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows="2"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                />

                <Button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right,#dc2626,#b91c1c)",
                    color: "#fff",
                  }}
                >
                  <T>Send Message</T>
                </Button>

                {sent && (
                  <p className="text-green-600 text-sm mt-2">
                    <T>Your message has been sent successfully!</T>
                  </p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IMAGE POPUP */}
        <AnimatePresence>
          {popupImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupImage(null)}
            >
              <motion.img
                src={popupImage}
                className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}

          {popupVideo && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupVideo(null)}
            >
              <motion.video
                src={popupVideo}
                autoPlay
                muted
                loop
                className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}