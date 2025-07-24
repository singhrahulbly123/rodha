import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon_1 from "../assets/images/student/icon-1.png";
import axios from "axios";

interface Testimonial {
  id: number;
  post_by: string;
  batch: string;
  title: string;
  image: string;
  description: string;
  sort_description: string;
}

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/testimonial`);
      if (res.data.status) {
        setTestimonials(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  };

  const getImagePath = (img: string) =>
    img.startsWith("http")
      ? img
      : `${import.meta.env.VITE_BASE_URL}/${img.replace(/^\//, "")}`;

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ].filter(Boolean); // To handle early API load

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div id="student-testimonials" className="bg-white dark:bg-[#343434] py-16 px-4 md:px-8 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-between mb-6 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Student <span className="text-orange-500">Testimonials</span>
          </h2>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white text-black dark:bg-gray-800 dark:text-black flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <div
              key={t.id || i}
              className="rounded-2xl p-6 text-left border dark:border-gray-500 bg-gray-50 dark:bg-[#444444] transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex gap-4 mt-4">
                <div className="w-[30%] h-50 text-center">
                  <img src={Icon_1} className="w-[70px] mb-7" />
                  <div className="border-4 border-orange-500 rounded-full overflow-hidden">
                    <img
                      src={getImagePath(t.image)}
                      alt={t.post_by}
                      className="object-cover w-[120px] h-[120px]"
                    />
                  </div>
                </div>
                <div className="w-[70%]">
                  <h3 className="font-bold text-xl mb-2 border-b-2 inline-block border-orange-500">
                    {t.sort_description}
                  </h3>

                  {(() => {
                    const lines = t.description.split("\n").filter(line => line.trim() !== "");
                    return (
                      <p className="text-[10px] mb-4 whitespace-pre-line">
                        <span className="text-orange-500 font-semibold">{lines[0]}</span>
                        {lines.slice(1).map((line, idx) => (
                          "\n" + line
                        ))}
                      </p>
                    );
                  })()}
                  <p className="font-semibold text-lg">{t.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.post_by}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
