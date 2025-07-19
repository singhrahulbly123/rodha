import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SuccessStories from "./components/SuccessStories";
import WhyChoose from "./components/WhyChoose";
import MockPrograms from "./components/MockPrograms";
import ComparisonTable from "./components/ComparisonTable";
import ScoreCard from "./components/ScoreCard";
import Faculty from "./components/Faculty";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import CatMockBanner from './components/CatMockBanner';
import StatsSection from './components/StatsSection';

function App() {
  // Dark and Ligh Mode Start Here

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') setDarkMode(true);
  }, []);

  // Dark and Ligh Mode End Here



  return (
    <>
      <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-all duration-300">
 <div className="fixed top-1/2 right-3 z-[9999] transform -translate-y-1/2 group">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="relative translate-x-[70%] group-hover:translate-x-0 transition-all duration-300 ease-in-out p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg"
    aria-label="Toggle Theme"
  >
    {darkMode ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
  </button>
</div>

        <Header />
        <HeroSection />
        <SuccessStories />
        <WhyChoose />
        <StatsSection/>
        <MockPrograms />
        <ComparisonTable />
        <ScoreCard />
        <Faculty />
        <Testimonials />
        <CatMockBanner/>
        <ContactForm />
        <Footer />
      </div>
    </>

  );
}

export default App;