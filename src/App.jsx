// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

import LandingPage from "./pages/LandingPage.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import AboutUs from "./pages/AboutUs.jsx"; // ✅ new import

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Home route loads Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutUs />} /> {/* ✅ new route */}
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
