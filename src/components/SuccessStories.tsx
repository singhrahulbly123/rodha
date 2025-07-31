import React, { useState } from "react";
import { motion } from "framer-motion";
import stories_1 from '../assets/images/stories/black-carbon-texture.jpg';
import testmonislteam from '../assets/images/testimonials/images.png';
import testmonislteam1 from '../assets/images/testimonials/2.png';
import testmonislteam2 from '../assets/images/testimonials/latest.png';

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("CAT");

  const images: Record<string, string> = {
    CAT: testmonislteam,
    XAT: testmonislteam2,
    SNAP: testmonislteam1,
  };

  const examData = {
    CAT: {
      title: "CAT 2024 Toppers",
      year: "2024",
      mainStat: "10+ Scored 99.90+",
      highlights: [
        { text: "30+ Scored", color: "#6EE6FF" },
        { text: "99.50+ %ile", color: "#ffffffff" },
        { text: "75+ Scored", color: "#FD6A02" },
        { text: "99+ %ile", color: "#6EE6FF"},
      ]
    },
    XAT: {
      title: "XAT 2025 Toppers",
      year: "2025",
      mainStat: "12+ Scored 99.5+",
      highlights: [
        { text: "30+ Scored", color: "#6EE6FF" },
        { text: "99+ %ile", color: "#ffffffff" },
        { text: "25+ Scored", color: "#FD6A02" },
        { text: "99+ %ile", color: "#6EE6FF"},
      ]
    },
    SNAP: {
      title: "SNAP 2024 Toppers",
      year: "2024",
      mainStat: "10+ Scored 99.75+",
      highlights: [
        { text: "25+ Scored", color: "#6EE6FF" },
        { text: "99+ %ile", color: "#ffffffff" },
        { text: "25+ Scored", color: "#FD6A02" },
        { text: "99+ %ile", color: "#6EE6FF"},
      ]
    }
  };

  const cardStyle = (tab: string) =>
    `relative transition-all duration-300 ease-in-out p-4 md:p-6 rounded-md bg-cover bg-center text-white overflow-hidden 
     flex flex-col justify-between ${activeTab !== tab
      ? "w-full md:w-44 cursor-pointer min-h-[150px]"
      : "flex-1 h-[480px]"
    }`;

  const CollapsedCard = (exam: string) => {
    const data = examData[exam as keyof typeof examData];
    
    return (
      <div id="success-stories" className="h-[50px] sm:h-auto transition-all duration-300 ease-in-out">
        <div className="sm:rotate-[-90deg] text-center md:text-left relative">
          <h4 className="text-lg sm:text-3xl font-semibold w-[500px] absolute left-[-9rem] sm:left-auto sm:right-[-6rem] top-[0rem] sm:top-[-3rem]">
            {data.title}
          </h4>
          <p className="text-[#FD6A02] text-xl w-[500px] absolute left-[-8rem] sm:left-auto sm:right-[-6rem] top-[2rem] sm:top-[0rem]">
            {data.mainStat}<span className="text-[#FD6A02]">ile</span>
          </p>
        </div>
        <div className="absolute bottom-5 right-6 text-3xl">❯</div>
      </div>
    );
  };

  const ExpandedCard = (exam: string) => {
    const data = examData[exam as keyof typeof examData];
    
    return (
      <>
        <div className="absolute bottom-2 right-2 text-2xl">❮</div>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xl md:text-5xl font-bold text-left text-white">
              <span className="text-[#FD6A02]">{exam} {data.year}</span> Toppers
            </h3>
            <p className="mb-6 mt-3 text-2xl md:text-4xl text-left">
              <span className="text-[#FD6A02] font-bold">{data.mainStat}</span>
              <span className="text-[#FD6A02]">ile</span>
            </p>
          </div>
          
      <div className="flex flex-col md:flex-row gap-6 w-full">
  <ul className="text-base md:text-2xl text-left space-y-2 w-full md:w-1/3">
    {data.highlights.map((item, index) => (
      <li 
        key={index} 
        className={`py-0 ${index === 2 ? 'sm:pt-[30px] pt-[15px]' : ''}`}  
      >
        <span className={"font-bold text-2xl sm:text-3xl"} style={{ color: item.color }}>
          {item.text}
        </span>
      </li>
    ))}
  </ul>
  
  <div className="w-full md:w-2/3 flex items-center justify-center">
    <img
      src={images[exam]}
      className="w-full h-auto max-h-[250px] object-contain rounded-md shadow"
      alt={`${exam} topper`}
    />
  </div>
</div>
        </div>
      </>
    );
  };

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
        {Object.keys(examData).map((exam) => (
          <motion.div
            key={exam}
            className={cardStyle(exam)}
            style={{
              backgroundImage: `url(${stories_1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => setActiveTab(exam)}
            whileHover={{ scale: activeTab === exam ? 1 : 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === exam ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
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