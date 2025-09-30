// src/Components/AboutShort.jsx
import { motion } from "framer-motion";

function AboutShort() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0 md:w-1/2"
        >
          <img
            src="assets/logo.png"
            alt="Al Hadaf Metal Coating"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 mb-3">
            <strong>Al Hadaf Metal Coating L.L.C</strong> was established on{" "}
            <span className="font-semibold">11.09.2022</span>. We offer our
            customers a variety of the latest plating solutions. We’ve come a
            long way, so we know exactly which direction to take when supplying
            high-quality yet budget-friendly products.
          </p>
          <p className="text-gray-700 mb-3">
            Our engineers are a motivated bunch who always keep an eye on the
            latest trends in metal plating solutions and put our customers’
            wishes first. That is why we have satisfied customers all over the
            world and are proud to be part of this ever-growing plating
            industry.
          </p>
          <p className="text-gray-700 mb-6">
            The interests of our customers are always top priority, and we hope
            you will enjoy our products as much as we enjoy making them
            available to you.
          </p>

          {/* Experience Line */}
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold shadow">
              12+ Years of Experience in Metal Coating
            </span>
          </div>

          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutShort;
