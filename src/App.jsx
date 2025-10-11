// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

// Core pages
import LandingPage from "./pages/LandingPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ServicePage from "./pages/Service.jsx";

// Service detail components
import PowderCoating from "./pages/PowderCoating.jsx";
import Galvanizing from "./pages/Galvanizing.jsx";
import Electroplating from "./pages/Electroplating.jsx";
import TinPlating from "./pages/TinPlating.jsx";
import MetalPlating from "./pages/MetalPlating.jsx";
import AntiqueFinish from "./pages/AntiqueFinish.jsx";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* 🔹 Landing and main routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<ServicePage />} />

          {/* 🔹 Individual service detail pages */}
          <Route path="/services/powder-coating" element={<PowderCoating />} />
          <Route path="/services/galvanizing" element={<Galvanizing />} />
          <Route path="/services/electroplating" element={<Electroplating />} />
          <Route path="/services/tin-plating" element={<TinPlating />} />
          <Route path="/services/metal-plating" element={<MetalPlating />} />
          <Route path="/services/antique-finish" element={<AntiqueFinish />} />

          <Route path="/testimonials" element={<TestimonialPage />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
