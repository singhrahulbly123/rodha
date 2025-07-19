import React from "react";
import { Check } from "lucide-react";
import WhyUs from '../assets/images/whychoose/whychoose.png'

export default function WhyChooseUs() {
  return (
    <div className=" bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <img
            src={WhyUs}
            alt="Instructor"
            className="rounded-lg max-h-[500px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-4 md:px-8 text-left">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Why <span className="text-[#FF6B00] font-bold">Choose Us?</span>
          </h2>
          <p className="text-[17px] mb-6 text-[#4A4A4A] dark:text-[#CCCCCC] font-semibold">
            Rodha is not just another CAT coaching program.{' '}
            <span className="text-[#FF6B00] font-semibold">We focus on developing skills</span> that make you stand out in the corporate world.
          </p>

          <ul className="space-y-3 flex text-[16px] text-[#333333] dark:text-gray-200 text-left font-semibold">

            <div>
              <li className="py-2 flex">
                <Check className="w-6 font-bold  mr-2" />
                <p><span className="text-[#FF6B00] font-semibold">30 CAT</span> Mocks, <span className="text-[#FF6B00] font-semibold">50 OMET</span> Mocks, <span className="text-[#FF6B00] font-semibold">105 Sectional</span> Tests, <span className="text-[#FF6B00] font-semibold">40+ Topic-wise</span> Tests</p>
              </li>

              <li className="py-2 flex">
                <Check className="w-6 font-bold mr-2" />
                <p>   <span className="font-semibold">10,000+</span> High-Quality test questions crafted by experts</p>
              </li>

              <li className="py-2 flex">
                <Check className="w-6 font-bold mr-2" />
                <p><span className="font-semibold text-[#FF6B00]">Comprehensive Video Solutions</span> for ALL questions</p>
              </li>
              <li className="py-2 flex">
                <Check className="w-6 font-bold mr-2" />
                <p> <span className="font-semibold text-[#FF6B00]">Strategy-Based</span> Mock Analysis Sessions</p>
              </li>
              <li className="py-2 flex">
                <Check className="w-6 font-bold mr-2" />
                <p> <span className="font-semibold text-[#FF6B00]">Percentile Tracking</span> Tool</p>
              </li>
              <li className="py-2 flex">
                <Check className="w-6 font-bold mr-2" />
                <p> Closest Experience To <span className="text-[#FF6B00] font-semibold">The Actual CAT Exam</span></p>
              </li>
            </div>
          </ul>
          <a
            href="http://examrodha.thinkexam.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="mt-8 bg-[#FF6B00] hover:bg-[#e55e00] text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Enroll Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
