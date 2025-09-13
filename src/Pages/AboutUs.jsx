// src/Pages/AboutUs.jsx
import { useTranslation } from "react-i18next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";


function AboutUs() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "John Doe",
      role: t("about.team.ceo"),
      image: "assets/team1.jpg",
    },
    {
      name: "Jane Smith",
      role: t("about.team.manager"),
      image: "assets/team2.jpg",
    },
    {
      name: "Ali Khan",
      role: t("about.team.engineer"),
      image: "assets/team3.jpg",
    },
    {
      name: "Sara Lee",
      role: t("about.team.designer"),
      image: "assets/team4.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('assets/about-hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
            {t("about.title")}
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            {t("about.description")}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex-1 bg-gray-100 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            {t("about.ourTeam")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
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
