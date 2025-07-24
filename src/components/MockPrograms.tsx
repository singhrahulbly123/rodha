import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import axios from "axios";
import Programs from "../assets/images/programs/Programs.png";

interface Program {
  id: number;
  title: string;
  sort_description: string;
  image: string;
  post_by: string;
  description: string;
  url: string;
}

export default function MockPrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    axios
      .get("https://rodha.mockup4clients.com/api/program")
      .then((res) => {
        if (res.data.status) {
          setPrograms(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch programs:", err);
      });
  }, []);

  const parseDescription = (desc: string): string[] =>
    desc.split(/\r?\n/).filter(Boolean);


  return (
    <div id="package" className="min-h-screen bg-[#f3f4f6] dark:bg-[#121212] text-black dark:text-white px-4 py-12 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our <span className="text-[#FF6B00] font-bold">CAT Mocks</span> Programs
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Choose from our high quality test packages designed to suit your preparation needs.
        </p>
        
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 sm:grid sm:grid-cols-3 sm:overflow-x-visible sm:snap-none">

            {/* Cards */}
            {programs.map((program, i) => (
              <div key={program.id}  className="group relative min-w-[85%] sm:min-w-0 snap-start bg-white dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left transition duration-300 hover:bg-gradient-to-r hover:from-[#1c1c1c] hover:to-[#454546] hover:text-white">
                 {i === 0 && (
                <div className="absolute -top-4 left-4 bg-[#FF6B00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Recommended
                </div>
              )}
                <h3 className="text-3xl font-semibold mb-2 text-left cursor-default">
                     {program.title}
                </h3>
                <p className="text-[#FF6B00] text-5xl font-bold mb-4 text-left cursor-default">
                  {program.post_by}
                </p>
                <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-white">
                  {parseDescription(program.description).map((line, idx) => (
                    <li key={idx} className="flex gap-2 items-center cursor-default">
                      <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                        <Check className="w-3 h-3" />
                      </span> {line}
                    </li>
                  ))}
                </ul>
                <a
                   href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-6 bg-[#FF6B00] hover:bg-white hover:text-black text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300 cursor-pointer">
                    {program.sort_description}
                  </button>
                </a>
              </div>
            ))}

            {/* Final Banner Card */}
            <div
              style={{ backgroundImage: `url(${Programs})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
              className="group min-w-[85%] sm:min-w-0 snap-start text-left bg-gray-200 dark:bg-[#2A2A2A] border border-gray-300 dark:border-[#2C2C2C] rounded-xl p-6 flex justify-left p-8 transition duration-300"
            >
              <div>
                <p className="text-white dark:text-white text-3xl font-semibold mb-4">
                  Check out our <br /> Full Comprehensive <br /> Preparation <br /> Programs
                </p>
                <a
                  href="https://www.rodha.co.in/s/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-2 border border-white dark:border-white mt-10 text-white dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-xl font-semibold py-4 px-16 rounded-full transition duration-300 cursor-pointer">
                    Check Now
                  </button>
                </a>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}
