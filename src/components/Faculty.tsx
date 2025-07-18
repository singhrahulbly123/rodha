import React from "react";





const teamImages = import.meta.glob('/src/assets/images/team/team-*.png', { eager: true });
const sortedImageKeys = Object.keys(teamImages).sort((a, b) => {
  const numA = parseInt(a.match(/team-(\d+)/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/team-(\d+)/)?.[1] || '0', 10);
  return numA - numB;
});
const teamImagesArray = sortedImageKeys.map(key => (teamImages[key] as any).default);
const faculty = [
  { name: "Ravi Sir", image: teamImagesArray[0], highlight: true },
  { name: "Apoorv Sir", image: teamImagesArray[1] },
  { name: "KD Sir", image: teamImagesArray[2], highlight: true },
  { name: "Swapnil Sir", image: teamImagesArray[3] },
  { name: "Tarun Sir", image: teamImagesArray[4], highlight: true },
  { name: "Nikita Ma’am", image: teamImagesArray[5], highlight: true },
  { name: "Brijesh Sir", image: teamImagesArray[6] },
  { name: "Sanchit Sir", image: teamImagesArray[7], highlight: true },
  { name: "Sharwari Ma’am", image: teamImagesArray[8] },
];

export default function Faculty() {
  return (
    <div className="bg-white dark:text-white dark:bg-[#242424]  py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl  md:text-4xl font-bold mb-12">
          Faculty – They're Your{" "}
          <span className="text-[#FF6B00]">Success Partners</span>
        </h2>

        <div className="flex gap-6 sm:justify-center sm:flex-wrap sm:overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth px-1">

          {faculty.map((member, index) => (
            <div key={index} className="min-w-[70%] sm:min-w-0 flex flex-col items-center transition-transform duration-300 hover:scale-105 snap-start">
              <div className="w-full h-auto overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-[200px] h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-sm md:text-base font-medium">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
