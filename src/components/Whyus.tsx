import React from "react";
import bridgeBG from "../assets/images/background/bgback.png";
import rodhasBG from "../assets/images/background/rodhas.png";


const features = [
  {
    title: "Extensive Practice Material",
    desc: "⁠⁠30 CAT Mocks, 50 OMET Mocks, 105 Sectional Tests, 40+ Topic-wise Tests ⁠10,000+ High-Quality test questions crafted by experts", 
    bg: "bg-[#FF6D1B]",
    text: "text-white",
  },
  {
    title: "Complete Learning Support",
    desc: "⁠Comprehensive Video Solutions for ALL questions ⁠Strategy-Based Mock Analysis Sessions",
    title_new: "Advanced Performance Tracking",
    desc_new: "Percentile Tracking Tool, Closest Experience To The Actual CAT Exam",
    highlight: "Smart Performance Tracking",
    subtext: "⁠Percentile Tracking Tool ⁠Actionable insights to improve scores over time",
    bg: "bg-[#333333]",
    text: "text-white",
  },
  {
    title: "Real Exam Experience",
    desc: "⁠Closest Experience to the Actual CAT Exam Simulates the pressure, interface, and pattern of the real test",
    bg: "bg-[#FF6D1B]",
    text: "text-white",
  },
  // {
  //   title: "Advanced Performance Tracking",
  //   desc: "Percentile Tracking Tool, Closest Experience To The Actual CAT Exam",
  //   bg: "bg-[#333333]",
  //   text: "text-white",
  // },
];

const Whyus = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto text-center z-10 relative p-4 sm:p-0">
        {/* <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Why <span className="text-[#FF6D1B]">Choose Us?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Rodha is not just another CAT coaching program. <span className="text-[#FF6D1B]">We focus on developing skills</span> that make you stand out in the corporate world.
        </p>
        <div className="w-[100%] hidden sm:block pointer-events-none select-none">
          <img src={bridgeBG}/>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 items-end md:grid-cols-3 gap-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative p-4 pt-10 pb-30 text-left border-t-[2px] rounded-t-[20px] shadow-lg ${feature.bg} ${feature.text} transition-transform transform hover:-translate-y-2 duration-300`}
            >
              <div className="absolute inset-0 opacity-20 translate-y-[33px] bg-bottom border-[#5a5a5a] contrast-[0.4] bg-cover sm:bg-auto bg-no-repeat" style={{ backgroundImage: `url(${rodhasBG})` }}></div>
              <h3 className="text-lg font-semibold relative z-10 mb-2 min-h-[56px]">
                {feature.title}
              </h3>
              <p className="text-sm relative z-10 min-h-[80px]">
                {feature.desc}
              </p>
              <div className={`pt-5 relative z-10 ${idx === 1 ? 'border-t-[2px] border-[#5a5a5a]' : ''}`}>
                <p className="text-lg font-bold">{feature.highlight}</p>
                <p className="text-xs mt-2 text-gray-300 max-w-[100%] mx-auto">
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