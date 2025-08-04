import React from "react";
import { Check } from "lucide-react";
import WhyUs from "../assets/images/whychoose/whychoose.png";
import Whyus from "./Whyus";

export default function WhyChooseUs() {
  return (
    <>
     <div className="w-full md:w-1/2 m-auto px-4 md:px-8 text-center sm:pt-15">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Why <span className="text-[#FF6B00] font-bold">Choose Us?</span>
          </h2>
          <p className="text-[17px] mb-6 text-[#4A4A4A] dark:text-[#CCCCCC] font-semibold">
            Rodha is not just another CAT coaching program.{" "}
            <span className="text-[#FF6B00] font-semibold">
              We focus on developing skills
            </span>{" "}
            that make you stand out in the corporate world.
          </p>


        </div>
     
    <div
      id="why-choose-us"
      className="bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white flex items-center justify-center pt-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center border-b-[2px] border-[#5a5a5a]">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
          <img
            src={WhyUs}
            alt="Instructor"
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/3 text-left">
            <Whyus/>
        </div>
      </div>
    </div>

       </>
  );
}
