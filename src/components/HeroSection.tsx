import React from 'react';
import Hero_1 from '../assets/images/hero/hero-1.png';
import Bg_Back from '../assets/images/hero/bg-back.jpg';
import { motion } from 'framer-motion';

const Heros_1 = import.meta.glob('/src/assets/images/team/team-*.png', { eager: true });
const sortedImageKeys = Object.keys(Heros_1).sort((a, b) => {
  const numA = parseInt(a.match(/team-(\d+)/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/team-(\d+)/)?.[1] || '0', 10);
  return numA - numB;
});
const Heros_1Array = sortedImageKeys.map(key => (Heros_1[key] as any).default);

const HeroSection = () => {
  return (
    <div
      id="about-us"
      className="bg-black text-white py-10 pb-0 p-4 sm:p-0 font-sans bg-back"
      style={{
        backgroundImage: `url(${Bg_Back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Elevate Your CAT 2025 <br /> Preparation With Rodha Mocks
          </h1>
          <p className="mt-3 text-lg md:text-4xl font-light">
            Get The Closest Experience To <br /> The Actual CAT Exam
          </p>
          <p className="mt-4 text-sm md:text-lg font-semibold py-6 text-gray-300">
            Mentored By India’s Top MBA Experts <br />
            Curated according to students’ needs to ace the <br /> CAT 2025 Exam
          </p>

          <hr className="border-orange-500 w-3/2" />

          <p className="text-xs md:text-base py-4">
            Buy Rodha Mocks Today and Analyse Your CAT 2025 Preparation
          </p>

          <div className="mt-5 sm:flex flex-col sm:flex-row flex-nowrap gap-4">
            <a
              href="https://exam.rodha.co.in/candidate/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button
                className="cursor-pointer bg-yellow-400 text-black py-3 sm:px-15 sm:py-4 md:px-8 md:py-4 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow hover:shadow-xl animate-bounce hover:bg-[#fff] hover:text-[#000] border dark:border-[#000]"
              >
                Take A Free Mock
              </button>
            </a>
            <a href="#package" className="w-full sm:w-auto">
              <button
                className="cursor-pointer bg-orange-500 hover:bg-[#fff] hover:text-[#000] border dark:border-[#000] py-3 sm:px-15 sm:py-4 md:px-8 md:py-4 text-white rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow hover:shadow-xl animate-blink"
              >
                Buy Rodha Mocks for CAT 2025
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center pt-0 sm:pt-10"
        >
          <img
            src={Hero_1}
            alt="Rodha Mentor"
            className="w-full max-w-full sm:max-w-md md:max-w-full rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
