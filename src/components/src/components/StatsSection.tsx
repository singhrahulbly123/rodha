import React, { useEffect, useState } from 'react';

const StatBox = ({ target, label, orange }: { target: number, label: React.ReactNode, orange?: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // total duration in ms
    const increment = Math.ceil(target / (duration / 20));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center sm:pb-0 pb-8">
      <h2 className={`text-[48px] font-bold leading-none ${orange ? 'text-[#ff6a00]' : 'text-white'}`}>
        {count}+
      </h2>
      <p className="text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: label as string }} />
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-600">
        <StatBox
          target={30}
          label={"Students with 99.50+<br />Percentile in CAT 2024"}
          orange
        />
        <StatBox
          target={10}
          label={"Students with 99.75+<br />Percentile in SNAP 2024"}
        />
        <StatBox
          target={50}
          label={"BLACKI Converts<br />in 2024"}
          orange
        />
        <StatBox
          target={90}
          label={"Converts in BLACKI, XLRI,<br />SPJAIN in 2024"}
        />
      </div>
    </div>
  );
};

export default StatsSection;
