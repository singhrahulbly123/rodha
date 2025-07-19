import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import Icon_1 from "../assets/images/student/icon-1.png";

const StudentImages = import.meta.glob("../assets/images/student/student-*.png", {
  eager: true,
});

const sortedImageKeys = Object.keys(StudentImages).sort((a, b) => {
  const numA = parseInt(a.match(/student-(\d+)/)?.[1] || "0", 10);
  const numB = parseInt(b.match(/student-(\d+)/)?.[1] || "0", 10);
  return numA - numB;
});

const Student_1Array = sortedImageKeys.map(
  (key) => (StudentImages[key] as any).default
);

interface Testimonial {
  name: string;
  batch: string;
  institute: string;
  image: string;
  imager: string;
  highlightedText: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ali Ahmed Khan",
    batch: "Batch - B1",
    institute: "IIM Ahmedabad",
    image: Student_1Array[0],
    imager: Icon_1,
    highlightedText:
      "Being a GEM and a working professional who had already flunked my first attempt at CAT, I knew that this time around I could not afford to make mistakes in my preparation phase.So i enrolled in the upcoming batch so I could have a better grasp on the concepts and improve my score this time around.",
    description:
      "The classes at Rodha have been instrumental in improving my core concepts. The material provided and the practice tests on the application have been a massive help in the same.",
  },
  {
    name: "Shivang Kasana",
    batch: "Batch - B4",
    institute: "IIM Bangalore",
    image: Student_1Array[1],
    imager: Icon_1,
    highlightedText:
      "I started CAT prep in April last year and quickly realized the lack of challenging LRDI sets available through most online resources. That’s when I came across the Rodha YouTube channel and decided to join the B4 batch in May '24.",

    description:
      " 500+ sets later, I still couldn't exhaust the resources I got here.The pace and depth of the classes helped me stay consistent throughout my prep. Rodha has been a cornerstone of my CAT journey and success!",
  },
  
  {
    name: "Ali Ahmed Khan",
    batch: "Batch - B4",
    institute: "IIM Calcutta",
    image: Student_1Array[2],
    imager: Icon_1,
    highlightedText:
      "Rodha played a crucial role in my CAT preparation journey with its structured approach and focus on concept clarity. Ravi Sir’s strategic guidance, Swapanil Sir’s quant shortcuts, and KD Sir’s in-depth VARC sessions helped me strengthen each section effectively. ",

    description:
      "The personalized support during the GDPI phase, especially through mock interviews and detailed feedback, boosted my confidence and communication skills. I’m truly grateful to the Rodha team for their consistent mentorship and support ",
  },

];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

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
              key={i}
              className="rounded-2xl p-6 text-left border dark:border-gray-500 bg-gray-50 dark:bg-[#444444] transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex gap-4 mt-4">
                <div className="w-150 h-50 text-center">
                  <img src={t.imager} className="w-[70px] mb-7" />
                  <div className="border-4 border-orange-500 rounded-full overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="object-cover w-[120px]"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 border-b-2 inline-block border-orange-500">
                    {t.institute}
                  </h3>
                  <p className="text-[10px] text-orange-500 whitespace-pre-line">
                    {t.highlightedText}
                  </p>
                  <p className="text-[10px] mb-4 whitespace-pre-line">{t.description}</p>
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.batch}
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
