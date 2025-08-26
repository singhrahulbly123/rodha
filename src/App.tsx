import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { BASE_URL } from "@/config/constants";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Popup from "../src/assets/images/popup/popup.png";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Dark mode setup
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
  }, []);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const ThemeToggleButton = () => (
    <div className="fixed top-1/2 right-3 z-[9999] transform -translate-y-1/2 group">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative translate-x-[70%] group-hover:translate-x-0 transition-all duration-300 ease-in-out p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg"
        aria-label="Toggle Theme"
      >
        {darkMode ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
      </button>
    </div>
  );

  return (
    <Router basename="/">
      <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-all duration-300">
        <ThemeToggleButton />

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#000000ab] bg-opacity-50 z-[9998]">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-0 max-w-lg w-[90%]">
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-2 py-1 text-sm"
              >
                ✕
              </button>

              {/* Popup Image */}
              <img
                src={Popup}
                alt="Popup"
                className="w-full rounded-lg border-2 border-white p-0"
              />
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/terms-conditions"
            element={
              <>
                <Header />
                <Terms />
                <Footer />
              </>
            }
          />
          <Route
            path="/refund-policy"
            element={
              <>
                <Header />
                <RefundPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Header />
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
