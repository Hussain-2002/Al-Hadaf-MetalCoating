// ✅ src/pages/TestimonialPage.jsx
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import QRCode from "react-qr-code"; // ✅ Added QR
import { ToastProvider, Toast, ToastTitle } from "@radix-ui/react-toast";

// ✅ Custom toast hook
function useToast() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  return {
    toast: (msg) => {
      setMessage(msg);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    },
    ToastUI: (
      <ToastProvider swipeDirection="right">
        <Toast 
          open={open} 
          onOpenChange={setOpen}
          className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-[100]"
        >
          <ToastTitle className="text-gray-900 font-semibold">{message}</ToastTitle>
        </Toast>
      </ToastProvider>
    ),
  };
}

export default function TestimonialPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "5",
    feedback: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // ✅ Toast hook
  const { toast, ToastUI } = useToast();

  // ✅ Google Sheet (read)
  const SHEET_ID = "1iWJ_cALoQ69JudFZ3fvKzP_PX2J_RxalYM2RYZmpYjs";
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  // ✅ App Script (write)
  // ✅ Replace this line in TestimonialPage.jsx
const FORM_SUBMIT_URL =
  "https://script.google.com/macros/s/AKfycbzaanj22pm4YmMEQaKlMrU1bf6aaG5c5XmqQrsx0QczwqD-VB6MHW_wDI9i_xdb2LilNg/exec";


  // ✅ Fetch Testimonials
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const rows = json.table.rows.map((r) => ({
          name: r.c[0]?.v || "Anonymous",
          email: r.c[1]?.v || "",
          phone: r.c[2]?.v || "",
          rating: r.c[3]?.v || "5",
          feedback: r.c[4]?.v || "",
          date: r.c[5]?.f || r.c[5]?.v || "",
        }));
        setTestimonials(rows.reverse().slice(0, 5));
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 🌀 Auto-slide
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials]);

  // 🧠 Auto-open form if "?add=true"
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("add") === "true") {
      setShowForm(true);
    }
  }, []);

  // 📝 Handle Input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🚀 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      toast("✅ Thank you for your feedback!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        rating: "5",
        feedback: "",
      });
      setShowForm(false);
    } catch (err) {
      console.error("Error submitting:", err);
      toast("❌ Something went wrong, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Generate QR link
  const qrLink = `${window.location.origin}/testimonials?add=true`;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          What People Say About Us 💬
        </h1>

        {/* 🧾 Testimonials */}
        {loading ? (
          <p className="text-gray-600">Loading testimonials...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-gray-500">No testimonials yet.</p>
        ) : (
          <div className="relative w-full max-w-xl h-[320px]">
            {testimonials.map((t, index) => {
              const isActive = index === currentIndex;
              return (
                <motion.div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-700 ${
                    isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-90 z-0"
                  }`}
                  animate={{
                    x: isActive ? 0 : index < currentIndex ? -100 : 100,
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Card className="w-full h-full bg-gray-900 text-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-gray-700">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {t.name || "Anonymous"}
                      </h3>
                      <p className="text-gray-300 mb-4 italic">
                        "{t.feedback || "No feedback provided."}"
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: Number(t.rating) || 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{t.date}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* 🔮 Add Testimonial Button */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            onClick={() => setShowForm(true)}
          >
            Add Your Testimonial ✏️
          </Button>

          {/* 📱 QR Code */}
          <div className="flex flex-col items-center">
            <p className="text-gray-700 mb-2 text-sm font-medium">
              Scan to open testimonial form 📱
            </p>
            <div className="bg-white p-3 rounded-xl shadow-md border border-gray-200">
              <QRCode value={qrLink} size={120} />
            </div>
            <p className="text-xs mt-2 text-gray-500">{qrLink}</p>
          </div>
        </div>
      </main>

      {/* 🧾 Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Share Your Experience 💬
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-800">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 text-gray-700"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Stars
                  </option>
                ))}
              </select>
              <Textarea
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
              <div className="flex gap-4 mt-6 justify-center">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
                <Button type="button" onClick={() => setShowForm(false)} variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {ToastUI}

      <Footer />
    </div>
  );
}