import React from 'react';
import Hero_1 from '../assets/images/hero/hero-1.png';
import Bg_Back from '../assets/images/hero/bg-back.jpg';

const HeroSection = () => {
  return (
    <div
      className="bg-black text-white py-10 pb-0 px-4 md:px-20 lg:px-32 font-sans bg-back"
      style={{ backgroundImage: `url(${Bg_Back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-5">
        {/* Left Text Section */}
        <div className="text-left flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Elevate Your CAT 2025 <br /> Preparation With Rodha Mocks
          </h1>
          <p className="mt-3 text-lg md:text-4xl font-light">
            Get the Closest Experience To <br /> The Actual CAT Exam
          </p>
          <p className="mt-4 text-sm md:text-lg font-semibold py-6 text-gray-300">
            Mentored By India’s Top MBA Experts <br />
            Curated according to students’ needs to ace the <br /> CAT 2025 Exam
          </p>

          <hr className="border-orange-500 w-3/2" />

          <p className="text-xs md:text-base py-4">
            Buy Rodha Mocks Today and Analyse Your CAT 2025 Preparation
          </p>

          <div className="mt-5 sm:flex flex-col flex-row flex-nowrap gap-4">
            <a
                href="https://examrodha.thinkexam.com/startTest/NA/MTI4Nzk2MzU="
                target="_blank"
                rel="noopener noreferrer"
              >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 sm:mb-0 mb-3 sm:px-15 sm:py-4 md:px-10 md:py-4 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto">
              Take A Free Mock
            </button>
            </a>
             <a
                href="#package"
              >
            <button className="bg-orange-500 hover:bg-orange-600 py-4 py-3 sm:mb-0 mb-3 text-white sm:px-15 sm:py-4 md:px-10 md:py-4 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto">
              Buy Rodha Mocks for CAT 2025
            </button>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center">
          <img
            src={Hero_1}
            alt="Rodha Mentor"
            className="w-full max-w-xs sm:max-w-md md:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;