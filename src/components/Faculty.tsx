import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import axios from "axios";

interface FacultyMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function Faculty1() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/faculty`)
      .then((res) => {
        if (res.data.status) {
          setFaculty(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch faculty:", error);
      });
  }, []);

  return (
    <div className="bg-white dark:text-white dark:bg-[#242424] py-16 px-4" id="faculty">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Faculty – They're Your <span className="text-[#FF6B00]">Success Partners</span>
        </h2>

        <div className="flex gap-6 sm:justify-center sm:flex-wrap sm:overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth px-1">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="relative group min-w-[50%] sm:min-w-0 flex flex-col items-center transition-transform duration-300 hover:scale-105 snap-start"
            >
              {/* Image */}
              <div className="w-full h-auto overflow-hidden relative">
                <img
                  src={`https://rodha.mockup4clients.com/${member.image}`}
                  alt={member.name}
                  className="w-[200px] max-w-[200px] h-[200px] object-scale-down shadow-md"
                />

                {/* Desktop Hover Button */}
                <div className="absolute hidden sm:flex inset-0 items-end justify-center transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="cursor-pointer px-3 py-1 bg-orange-600 text-white text-[10px] rounded-full hover:bg-orange-700"
                  >
                    View More
                  </button>
                </div>
              </div>

              {/* Name */}
              <p className="mt-2 text-sm md:text-base font-medium">{member.name}</p>

              {/* Mobile View More Button */}
              <div className="mt-2 d-block sm:hidden inset-0 flex items-end justify-center">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer px-3 py-1 bg-orange-600 text-white text-[10px] rounded-full hover:bg-orange-700"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Popup */}
      <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)} className="relative z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg w-full rounded-2xl bg-white dark:bg-[#1e1e1e] p-6 shadow-lg space-y-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={`https://rodha.mockup4clients.com/${selectedMember?.image}`}
                alt={selectedMember?.name}
                className="w-[200px] h-[220px] object-scale-down"
              />
              <Dialog.Title className="text-xl font-bold mt-4 text-orange-600">
                {selectedMember?.name}
              </Dialog.Title>
            </div>

            {/* Description Bullet Points */}
            <div className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed space-y-2">
              {selectedMember?.description
                ?.replace(/\r\n|\n/g, "")
                .split("•")
                .map((line) => line.trim())
                .filter(Boolean)
                .map((line, idx) => (
                  <p key={idx} className="flex items-start gap-2 mb-0">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{line}</span>
                  </p>
                ))}
            </div>

            {/* Close Button */}
            <div className="text-center">
              <button
                onClick={() => setSelectedMember(null)}
                className="mt-6 px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
