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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
            {t("about.heroTitle")}
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            {t("about.heroDescription")}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            {t("about.whoWeAreTitle")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
          >
            <p>{t("about.whoWeAreDescription")}</p>
            <br />
            <br />
            <p>{t("about.whoWeAreDescription2")}</p>
          </motion.div>
        </div>
      </section>

      {/* Message from Founder */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/assets/founder.jpg"
            alt="Founder of Al-Hadaf Metal Coating"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("about.founderMessageTitle")}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {t("about.founderMessage")}
              <br />
              <br />
              {t("about.founderMessage2")}
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              {t("about.founderSignature")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex-1 bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            {t("about.meetTeamTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
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