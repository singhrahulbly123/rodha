import React, { useEffect, useState } from "react";
import Banner_1 from "../assets/images/banner/bannerimage.jpg";
import Banner_2 from "../assets/images/banner/darkmode.jpg";
import Girls from "../assets/images/banner/awords.png";

export default function CatMockBanner() {
  const [bgImage, setBgImage] = useState(Banner_2);

  useEffect(() => {
    const updateImage = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setBgImage(isDark ? Banner_1 : Banner_2);
    };

    updateImage();

    const observer = new MutationObserver(updateImage);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full bg-[#242424] text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto relative w-full flex flex-col md:flex-row items-center justify-between overflow-hidden p-3 sm:p-0">
        {/* Text Content */}
        <div className="z-10 max-w-6xl text-center md:text-left pb-10">
          <div className="sm:h-[144px] h-[50px]"> </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 text-white">
            Take A Free Full-Length Mock <br className="hidden md:block" />
            Today to Analyse Your CAT 2025 <br className="hidden md:block" />
            Preparation
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* First Button */}
            <a href="https://examrodha.thinkexam.com/startTest/NA/MTI4Nzk2MzU=" target="_blank">
            <button
              className="relative overflow-hidden bg-white text-[#FD6A02] font-semibold px-6 py-3 rounded-full text-sm group transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03]"
            >
              <span className="relative z-10">Rodha Mocks for CAT 2025</span>
              <span className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#FD6A02] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
            </button>
            </a>

            {/* Second Button */}
            <button
              className="relative overflow-hidden border border-white text-white font-semibold px-6 py-3 rounded-full text-sm group transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03]"
            >
              <span className="relative z-10 group-hover:text-[#FD6A02] transition-colors duration-300">
                Enquire Now
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/3 max-w-9xl mx-auto z-10 pt-16 sm:pt-0">
          <img
            src={Girls}
            alt="Girl Holding Books"
            className="w-full h-auto object-contain mb-[-20px]"
          />
        </div>
      </div>

      {/* Top white background strip (for spacing) */}
      <div className="hidden sm:block absolute inset-0 bg-[#ffff] dark:bg-[#242424] top-0 h-28 w-full" />
    </section>
  );
}
