// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

// Core pages
import LandingPage from "./pages/LandingPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ServicePage from "./pages/Service.jsx";
import RAL3DCube from "./Components/RalChart.jsx";
import TestimonialPage from "./pages/TestimonialPage";
import BlogDisplay from './pages/BlogDisplay';
import ProjectDetails from './pages/ProjectDetails';

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
          <Route path="/ralchart" element={<RAL3DCube />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/blog" element={<BlogDisplay />} />
          <Route path="/blog/project-details" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;