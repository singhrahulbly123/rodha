import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import clsx from "clsx";
// import Student_1 from '../assets/images/student/student-1.png'
import Icon_1 from '../assets/images/student/icon-1.png'


const StudentImages = import.meta.glob('../assets/images/student/student-*.png', { eager: true });

const sortedImageKeys = Object.keys(StudentImages).sort((a, b) => {
  const numA = parseInt(a.match(/student-(\d+)/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/student-(\d+)/)?.[1] || '0', 10);
  return numA - numB;
});

const Student_1Array = sortedImageKeys.map(key => (StudentImages[key] as any).default);


interface Testimonial {
  name: string;
  batch: string;
  institute: string;
  image: string;
  imager:string,
  highlightedText: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ali Ahmed Khan",
    batch: "Batch - B1",
    institute: "IIM Ahmedabad",
    image: Student_1Array[0],
    imager:Icon_1,
    highlightedText:
      "Being a GEM and a working professional... The classes at Rodha have been instrumental...",
    description:
      "So I enrolled in the upcoming batch... provided and the practice tests on the application have been a massive help in the same.",
  },
  {
    name: "Shivang Kasana",
    batch: "Batch - B4",
    institute: "IIM Bangalore",
    image: Student_1Array[1],
    imager:Icon_1,
    highlightedText:
      "500+ sets later, I still couldn’t exhaust the resources I got here. The pace and depth of the classes helped...",
    description:
      "I started CAT prep in April last year... cornerstone of my CAT journey and success!",
  },
  {
    name: "Ali Ahmed Khan",
    batch: "Batch - B4",
    institute: "IIM Calcutta",
    image: Student_1Array[2],
    imager:Icon_1,
    highlightedText:
      "Ravi Sir’s strategic guidance, Swapnil Sir’s quant shortcuts, and KD Sir’s in-depth VARC sessions helped...",
    description:
      "Rodha played a crucial role... consistent mentorship and support throughout the process.",
  },
  {
    name: "Ali Number",
    batch: "Batch - B4",
    institute: "IIM  2",
    image: Student_1Array[3],
    imager:Icon_1,
    highlightedText:
      "Ravi Sir’s strategic guidance, Swapnil Sir’s quant shortcuts, and KD Sir’s in-depth VARC sessions helped...",
    description:
      "Rodha played a crucial role... consistent mentorship and support throughout the process.",
  },
  {
    name: "Ali Khan",
    batch: "Batch - B4",
    institute: "IIM Calcutta",
    image: Student_1Array[4],
    imager:Icon_1,
    highlightedText:
      "Ravi Sir’s strategic guidance, Swapnil Sir’s quant shortcuts, and KD Sir’s in-depth VARC sessions helped...",
    description:
      "Rodha played a crucial role... consistent mentorship and support throughout the process.",
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


console.log("Student image keys:", sortedImageKeys);
console.log("Student image URLs:", Student_1Array);

  return (
    <div className="bg-white dark:bg-[#343434] py-16 px-4 md:px-8 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
       

        <div className="flex justify-between mb-6 gap-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Student <span className="text-orange-500">Testimonials</span>
        </h2>
          <div className="flex gap-4"> 

            <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:opacity-80"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white text-black dark:bg-gray-800 dark:text-black flex items-center justify-center hover:opacity-80"
          >
            <ChevronRight />
          </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-left border dark:border-gray-500 bg-gray-50 dark:bg-[#444444] transition-all"
            >
            
              <div className="flex gap-4 mt-4">
                
                <div className="w-100 h-50 text-center">
                  <img src={t.imager} className="w-[70px] mb-7"/>
                  <div className="border-4 border-orange-500 rounded-full  overflow-hidden">
                    <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-full h-full"
                  />
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 border-b-2 inline-block border-orange-500">
                    {t.institute}
                  </h3>
                  <p className="text-sm mb-3 text-orange-500 whitespace-pre-line">
                    {t.highlightedText}
                  </p>
                  <p className="text-sm mb-4 whitespace-pre-line">{t.description}</p>
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
