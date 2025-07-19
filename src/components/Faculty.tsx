import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const teamImages = import.meta.glob('/src/assets/images/team/team-*.png', { eager: true });

const sortedImageKeys = Object.keys(teamImages).sort((a, b) => {
  const numA = parseInt(a.match(/team-(\d+)/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/team-(\d+)/)?.[1] || '0', 10);
  return numA - numB;
});

const teamImagesArray = sortedImageKeys.map(key => (teamImages[key] as any).default);

const faculty = [
  { name: "Ravi Sir", image: teamImagesArray[0], highlight: true, desc: "Expert in Quantitative Aptitude with 10+ years of experience." },
  { name: "Apoorv Sir", image: teamImagesArray[1], desc: "Specialist in LRDI, known for intuitive techniques." },
  { name: "Swapnil Sir", image: teamImagesArray[3], desc: "Guides students in Verbal Ability and RC with strategy-based learning." },
  { name: "Tarun Sir", image: teamImagesArray[4], highlight: true, desc: "Senior mentor with CAT mentoring background." },
  { name: "KD Sir", image: teamImagesArray[2], highlight: true, desc: "Math magician simplifying toughest problems." },
  { name: "Nikita Ma’am", image: teamImagesArray[5], highlight: true, desc: "Passionate verbal trainer with interactive approach." },
  { name: "Sharwari Ma’am", image: teamImagesArray[8], desc: "Known for her crisp logical reasoning techniques." },
  { name: "Brijesh Sir", image: teamImagesArray[6], desc: "Brings practical approach to DI-LR sets." },
  { name: "Sanchit Sir", image: teamImagesArray[7], highlight: true, desc: "CAT 100 percentiler – brings toppers' strategy to you." },
];

export default function Faculty() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <div className="bg-white dark:text-white dark:bg-[#242424] py-16 px-4" id="faculty">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Faculty – They're Your <span className="text-[#FF6B00]">Success Partners</span>
        </h2>

        <div className="flex gap-6 sm:justify-center sm:flex-wrap sm:overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth px-1">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="min-w-[70%] sm:min-w-0 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 snap-start"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-full h-auto overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] max-w-[200px] h-[200px] object-scale-down shadow-md"
                />
              </div>
              <p className="mt-4 text-sm md:text-base font-medium">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md w-full rounded-2xl bg-white dark:bg-[#1e1e1e] p-6 shadow-lg transition-all space-y-4 text-center">
            <img
              src={selectedMember?.image}
              alt={selectedMember?.name}
              className="w-[100]  mx-auto"
            />
            <Dialog.Title className="text-xl font-bold text-[#FF6B00]">{selectedMember?.name}</Dialog.Title>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{selectedMember?.desc}</p>

            <button
              onClick={() => setSelectedMember(null)}
              className="mt-4 px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
