import React, { useState } from "react";
import { motion } from "framer-motion";
import stories_1 from '../assets/images/stories/black-carbon-texture.jpg';
import testmonislteam from '../assets/images/testimonials/images.png';
import testmonislteam1 from '../assets/images/testimonials/2.png';
import testmonislteam2 from '../assets/images/testimonials/4.png';

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("CAT");

    const images: Record<string, string> = {
    CAT: testmonislteam,
    XAT: testmonislteam1,
    SNAP: testmonislteam2,
  };
  const cardStyle = (tab: string) =>
    `relative transition-all duration-300 ease-in-out p-4 md:p-10 rounded-md bg-cover bg-center text-white overflow-hidden 
     flex flex-col justify-between ${activeTab !== tab
      ? "w-full md:w-44 cursor-pointer min-h-[150px]"
      : "flex-1 h-[480px]" // fixed height to prevent layout shift
    }`;

  // ✅ Collapsed Card accepts exam name and returns dynamic content
  const CollapsedCard = (exam: string) => {
    const titles: Record<string, string> = {
      CAT: "CAT 2024 Toppers",
      XAT: "XAT 2025 Toppers",
      SNAP: "SNAP 2024 Toppers",
    };



    const subtitles: Record<string, string> = {
      CAT: "30+ Scored 99.5+",
      XAT: "12+ Scored 99.5+",
      SNAP: "10+ Scored 99.5+",
    };

    return (
      <div id="success-stories" className="h-[50px] sm:h-auto transition-all duration-300 ease-in-out">
        <div className="sm:rotate-[-90deg] text-center md:text-left relative">
          <h4 className="text-lg sm:text-3xl font-semibold w-[500px] absolute left-[-9rem] sm:left-auto sm:right-[-6rem] top-[0rem] sm:top-[-3rem]">
            {titles[exam]}
          </h4>
          <p className="text-[#FD6A02] text-xl w-[500px] absolute left-[-8rem] sm:left-auto sm:right-[-6rem] top-[2rem] sm:top-[0rem]">
            {subtitles[exam]}<span className="text-[#FD6A02]">ile</span>
          </p>
        </div>
        <div className="absolute bottom-5 right-6 text-3xl">❯</div>
      </div>
    );
  };

  const ExpandedCard = (exam: string) => (

    
    <>
      <div className="absolute bottom-2 right-2 text-2xl">❯</div>
      <h3 className="text-xl md:text-6xl font-bold text-left text-white">
        <span className="text-[#FD6A02]">{exam} 2024</span> Toppers
      </h3>
      <p className="mb-6 mt-3 text-2xl md:text-4xl text-left">
        <span className="text-[#FD6A02] font-bold">30+ Scored</span> 99.5+
        <span className="text-[#FD6A02]">ile</span>
      </p>
      <ul className="text-base md:text-3xl text-left space-y-2 mb-4 float-left sm:w-[30%]">
        <li className="sm:py-5">
          <span className="text-[#6EE6FF] font-bold">10+ Scored</span> 99.95+
          <span className="text-[#6EE6FF]"> %ile</span>
        </li>
        <li>
          <span className="text-[#FD6A02] font-bold">25+ Scored</span> 99+
          <span className="text-[#FD6A02]"> %ile</span>
        </li>
      </ul>
      <div className="flex flex-wrap gap-2 sm:w-[60%] float-right">
        <img
          src={images[exam]}
          className="w-full object-cover rounded-md shadow"
          alt={`${exam} topper`}
        />
      </div>
    </>
  );

  return (
    <motion.section
      className="max-w-7xl mx-auto w-full py-10 px-4 md:px-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Rodha <span className="text-[#FD6A02]">Success Stories</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-4 transition-all duration-500">
        {["CAT", "XAT", "SNAP"].map((exam) => (
          <motion.div
            key={exam}
            className={cardStyle(exam)}
            style={{
              backgroundImage: `url(${stories_1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => setActiveTab(exam)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === exam ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {ExpandedCard(exam)}
              </motion.div>
            ) : (
              CollapsedCard(exam)
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
