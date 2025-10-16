// src/Components/AboutShort.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function AboutShort() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white" id="aboutus">
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
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("about.title")}
          </h2>

          {/* Description */}
<p className="text-gray-700 mb-3 text-justify">
  {t("about.short1")}
</p>
<p className="text-gray-700 mb-3 text-justify">
  {t("about.short2")}
</p>
<p className="text-gray-700 mb-6 text-justify">
  {t("about.short3")}
</p>


          {/* Experience Line */}
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold shadow">
              {t("about.experience")}
            </span>
          </div>

          {/* Read More */}
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {t("readMore")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutShort;
