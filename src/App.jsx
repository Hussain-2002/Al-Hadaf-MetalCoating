// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ContactForm from "./Pages/ContactForm.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home route loads Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
