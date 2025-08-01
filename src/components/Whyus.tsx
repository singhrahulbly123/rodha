import React from "react";
import bridgeBG from "../assets/images/background/bgback.png";

const features = [
  {
    title: "Extensive Test Series",
    desc: "Get 30 CAT mocks, 50 OMET mocks, 105 sectional tests, and 40+ topic-wise tests for thorough preparation.",
    highlight: "30+",
    subtext: "Students with 99%ile percentile in CAT 2024",
    bg: "bg-[#FF6D1B]",
    text: "text-white",
  },
  {
    title: "Extensive Test Series",
    desc: "10,000+ High-Quality test questions crafted by experts",
    highlight: "10+",
    subtext: "Students with 99+ %ile percentile in SNAP 2024",
    bg: "bg-[#333333]",
    text: "text-white",
  },
  {
    title: "Complete Video Solutions & Strategy Sessions",
    desc: "Comprehensive Video Solutions for ALL questions, Strategy-Based Mock Analysis Sessions",
    highlight: "50+",
    subtext: "BLACK Courses in 2024",
    bg: "bg-[#FF6D1B]",
    text: "text-white",
  },
  {
    title: "Advanced Performance Tracking",
    desc: "Percentile Tracking Tool, Closest Experience To The Actual CAT Exam",
    highlight: "90+",
    subtext: "Growers in BLACK X R, SPJAIN in 2024",
    bg: "bg-[#333333]",
    text: "text-white",
  },
];

const Whyus = () => {
  return (
    <section className="relative px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center z-10 relative ">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Why <span className="text-[#FF6D1B]">Choose Us?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Rodha is not just another CAT coaching program. <span className="text-[#FF6D1B]">We focus on developing skills</span> that make you stand out in the corporate world.
        </p>
        <div className="w-[100%] hidden sm:block pointer-events-none select-none">
          <img src={bridgeBG}/>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-t-[20px] shadow-lg ${feature.bg} ${feature.text} transition-transform transform hover:-translate-y-2 duration-300`}
            >
              <div className="absolute inset-0 opacity-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('/assets/images/background/group-bg.png')` }}></div>
              <h3 className="text-lg font-semibold relative z-10 mb-2 min-h-[56px]">
                {feature.title}
              </h3>
              <p className="text-sm relative z-10 min-h-[80px]">
                {feature.desc}
              </p>
              <div className="mt-6 relative z-10">
                <p className="text-4xl font-bold">{feature.highlight}</p>
                <p className="text-xs mt-1 text-gray-300 max-w-[90%] mx-auto">
                  {feature.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Whyus;