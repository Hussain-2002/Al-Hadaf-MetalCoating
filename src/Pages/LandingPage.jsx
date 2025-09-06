// src/pages/LandingPage.jsx
import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import Footer from "../components/Footer";

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false)

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

{/* Hero Section */}
<section className="relative h-screen w-screen overflow-hidden">
  {/* Desktop Background */}
  <div
    className="hidden md:block absolute inset-0 w-screen h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('assets/hero-desktop.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  ></div>

  {/* Mobile Background */}
  <div
    className="block md:hidden absolute inset-0 w-screen h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('assets/hero-mobile.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 w-screen h-screen bg-gradient-to-b from-white/80 via-white/90 to-white"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mb-4 leading-tight">
      Welcome to <br />
      <span className="text-blue-900">Al-Hadaf Metal Coating LLC</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
      We specialize in delivering top-quality surface finishing solutions with precision
      and durability. Explore our wide range of services trusted by industries across UAE.
    </p>

    {/* Services */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-gray-800 font-semibold">
      <span className="hover:text-teal-600 transition">Powder Coating</span>
      <span className="hover:text-teal-600 transition">Galvanizing</span>
      <span className="hover:text-teal-600 transition">Electroplating</span>
      <span className="hover:text-teal-600 transition">Tin Plating</span>
      <span className="hover:text-teal-600 transition">Metal Plating</span>
      <span className="hover:text-teal-600 transition">Antique Finish</span>
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-4">
      <Button
        className="bg-yellow-500 text-white font-bold hover:bg-yellow-600 transition transform hover:scale-105"
        onClick={() => (window.location.href = "#aboutus")}
      >
        Read More
      </Button>
      <Button
        variant="outline"
        className="border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition transform hover:scale-105"
        onClick={() => (window.location.href = "#gallery")}
      >
        View Our Work
      </Button>
    </div>
  </div>
</section>

<Footer /> 

      {/* Scroll to Top */}
      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

export default LandingPage
