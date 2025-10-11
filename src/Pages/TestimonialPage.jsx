// ✅ src/pages/TestimonialPage.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ballpit } from "reactbits";
import QRCode from "react-qr-code";

// 🧠 All logic, styling, and fetch in ONE file

export default function TestimonialPage() {
  // ---------- STATE ----------
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Replace with your own SHEET_ID
  const SHEET_ID = "YOUR_SHEET_ID_HERE";
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  // ✅ Replace with your App Script URL
  const FORM_URL = "YOUR_APP_SCRIPT_WEB_APP_URL_HERE";

  // ---------- FETCH TESTIMONIALS ----------
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const rows = json.table.rows.map((r) => ({
          name: r.c[0]?.v,
          email: r.c[1]?.v,
          phone: r.c[2]?.v,
          rating: r.c[3]?.v,
          feedback: r.c[4]?.v,
          date: r.c[5]?.f || r.c[5]?.v,
        }));
        setTestimonials(rows.reverse()); // newest first
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ---------- CARD SWAP LOGIC ----------
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // every 4 sec
    return () => clearInterval(interval);
  }, [testimonials]);

  // ---------- INLINE STYLES ----------
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#0f0f0f",
      color: "#fff",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "600",
      marginBottom: "2rem",
      letterSpacing: "1px",
      textAlign: "center",
    },
    cardContainer: {
      position: "relative",
      width: "90%",
      maxWidth: "600px",
      height: "320px",
      perspective: "1000px",
    },
    card: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      backdropFilter: "blur(6px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    name: { fontSize: "1.3rem", fontWeight: "500", marginBottom: "0.4rem" },
    feedback: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      marginBottom: "1rem",
      color: "#ddd",
    },
    rating: { color: "#ffdf00", fontSize: "1.2rem" },
    formSection: {
      marginTop: "3rem",
      textAlign: "center",
    },
    formBtn: {
      background: "#ff4d4d",
      color: "#fff",
      border: "none",
      padding: "0.8rem 1.5rem",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "0.3s",
    },
    qrWrapper: { marginTop: "1.5rem" },
  };

  // ---------- RENDER ----------
  return (
    <div style={styles.container}>
      {/* 🎈 Animated background */}
      <Ballpit backgroundColor="#0f0f0f" count={50} gravity={0.1} />

      {/* 🏷️ Heading */}
      <h1 style={styles.heading}>What People Say About Us 💬</h1>

      {/* 💫 Animated card stack */}
      {loading ? (
        <p>Loading testimonials...</p>
      ) : (
        <div style={styles.cardContainer}>
          {testimonials.map((t, index) => {
            const isActive = index === currentIndex;
            const z = testimonials.length - index;
            return (
              <motion.div
                key={index}
                style={{
                  ...styles.card,
                  zIndex: z,
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.9,
                }}
                animate={{
                  x: isActive ? 0 : index < currentIndex ? -200 : 200,
                  rotateY: isActive ? 0 : 10,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div>
                  <h3 style={styles.name}>{t.name || "Anonymous"}</h3>
                  <p style={styles.feedback}>
                    {t.feedback || "No feedback provided."}
                  </p>
                </div>
                <div>
                  <p style={styles.rating}>
                    {"⭐".repeat(Number(t.rating) || 5)}
                  </p>
                  <small>{t.date}</small>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* 📮 Form & QR Section */}
      <div style={styles.formSection}>
        <p>Wanna drop your thoughts?</p>
        <a href={FORM_URL} target="_blank" rel="noreferrer">
          <button style={styles.formBtn}>Add Your Testimonial ✍️</button>
        </a>

        <div style={styles.qrWrapper}>
          <QRCode value={FORM_URL} bgColor="#0f0f0f" fgColor="#fff" size={120} />
          <p style={{ fontSize: "0.9rem", color: "#bbb", marginTop: "0.5rem" }}>
            Scan to share your experience
          </p>
        </div>
      </div>
    </div>
  );
}
