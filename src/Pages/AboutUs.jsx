import { useTranslation } from "react-i18next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

function AboutUs() {
  const { t } = useTranslation();

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
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            {t("about.heroTitle")}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            {t("about.heroDescription")}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            {t("about.whoWeAreTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto w-full"
          >
            <p className="mb-4">{t("about.whoWeAreDescription")}</p>
            <p>{t("about.whoWeAreDescription2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          {/* Vision & Mission Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {t("about.visionTitle")}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {t("about.visionDescription")}
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {t("about.missionTitle")}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {t("about.missionDescription")}
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
              {t("about.coreValuesTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⭐", key: "quality" },
                { icon: "🤝", key: "integrity" },
                { icon: "💡", key: "innovation" },
                { icon: "👥", key: "customer" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {t(`about.coreValues.${value.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t(`about.coreValues.${value.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message from Founder */}
      <section className="py-12 sm:py-16 bg-gray-100 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.img
              src="/assets/founder.jpg"
              alt="Founder of Al-Hadaf Metal Coating"
              className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[420px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center md:text-left w-full"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex-1 bg-white py-12 sm:py-16 w-full">
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
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300 w-full"
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