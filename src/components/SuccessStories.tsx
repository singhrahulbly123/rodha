import React, { useState } from "react";
import stories_1 from '../assets/images/stories/black-carbon-texture.jpg';

const avatars = Array.from({ length: 20 }, (_, i) =>
  `https://randomuser.me/api/portraits/men/${i + 1}.jpg`
);

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("CAT");

  const cardStyle = (tab: string) =>
    `relative transition-all duration-700 ease-in-out p-4 md:p-10 rounded-md bg-cover bg-center text-white overflow-hidden ${
      activeTab !== tab ? "w-full md:w-44 cursor-pointer" : "flex-1"
    }`;

  const CollapsedCard = () => (
    <div className="h-[50px] sm:h-auto transition-all duration-500 ease-in-out">
      <div className="sm:rotate-[-90deg] text-center md:text-left relative">
        <h4 className="text-lg sm:text-3xl font-semibold w-[500px] absolute left-[-9rem] sm:left-auto sm:right-[-6rem] top-[0rem] sm:top-[-3rem]">
          SNAP 2024 Toppers
        </h4>
        <p className="text-[#FD6A02] text-xl w-[500px] absolute left-[-8rem] sm:left-auto sm:right-[-6rem] top-[2rem] sm:top-[0rem]">
          10+ Scored 99.5+<span className="text-[#FD6A02]">ile</span>
        </p>
      </div>
      <div className="absolute bottom-5 right-6 text-3xl">❯</div>
    </div>
  );

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
        <li>
          <span className="text-[#6EE6FF] font-bold">10+ Scored</span> 99.95+
          <span className="text-[#6EE6FF]"> %ile</span>
        </li>
        <li>
          <span className="text-[#FD6A02] font-bold">25+ Scored</span> 99+
          <span className="text-[#FD6A02]"> %ile</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-2 sm:w-[70%] float-left">
        {avatars.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Avatar ${idx + 1}`}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-300 object-cover"
          />
        ))}
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FD6A02] flex items-center justify-center text-white text-xl font-bold">
          +
        </div>
      </div>
    </>
  );

  return (
    <section className="max-w-7xl mx-auto w-full py-10 px-4 md:px-0">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Rodha <span className="text-[#FD6A02]">Success Stories</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-4 transition-all duration-500">
        {["CAT", "XAT", "SNAP"].map((exam) => (
          <div
            key={exam}
            className={cardStyle(exam)}
            style={{
              backgroundImage: `url(${stories_1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => setActiveTab(exam)}
          >
            {activeTab === exam ? ExpandedCard(exam) : <CollapsedCard />}
          </div>
        ))}
      </div>
    </section>
  );
}
