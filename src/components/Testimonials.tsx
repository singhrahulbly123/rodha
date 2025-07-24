import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import Icon_1 from "../assets/images/student/icon-1.png";

const StudentImages = import.meta.glob("../assets/images/student/studen-*.png", {
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
    name: "Ritesh Pathak",
    batch: "Batch - B4",
    institute: "IIM Udaipur",
    image: Student_1Array[0],
    imager: Icon_1,
    highlightedText:
      "guidance I received from our teachers.",
    description:
      "Rodha was an integral part of my journey. It not only helped me with its course but also all this while. I'll forever be grateful for joining this amazing team. ",
  },
  {
    name: "Shreyansh Srivastava",
    batch: "Batch - B2",
    institute: "SIBM PUNE",
    image: Student_1Array[1],
    imager: Icon_1,
    highlightedText:
      "The portal has great questions and material. The mentors were very helpful in the gdpi process.",

    description:
      " The teachers taught really well and also helped in resolving personal issues related to preparation for the exam The teachers went above and beyond in their efforts that motivates us to study as well.",
  },
  {
    name: "Pranav S",
    batch: "Batch - B3",
    institute: "SPJIMR",
    image: Student_1Array[2],
    imager: Icon_1,
    highlightedText:
      "Rodha helped me build this mindset. Teachers and mentors in Rodha are extremely humble, they treated us like their own. ",

    description:
      "Rodha for me was not just a institute, Rodha was a part of my life for 1.5 years. My day started with Rodha and ended with Rodha. The reason for my selection is because i loved what i studied throughout my prep and never felt burdened and I had an amazing time in Rodha and as I said its not just an institute, its part of my life. ",
  },


  {
    name: "Siddharth Dev",
    batch: "Batch - B4",
    institute: "NMIMS",
    image: Student_1Array[3],
    imager: Icon_1,
    highlightedText:
      "After working for 5 years During the GDPI journey the in depth GK lectures by Priyam ma'am helped me flaunt my GK in most of the interviews.",

    description:
      "switching back to studying was not easy especially since my mathematics has always been poor however, when I saw Ravi sir's lectures I knew that I should go for Rodha as a partner during this journey because I was able to grasp quants for what felt like the first time in my life of understanding mathematical concepts. and I'm forever grateful to the team and faculty at Rodha for helping me in this journey.",
  },



  {
    name: "Sakshi Didwania",
    batch: "Batch - B4",
    institute: "XLRI",
    image: Student_1Array[4],
    imager: Icon_1,
    highlightedText:
      "Coming to the GDPI journey, the mentors at Rodha really boosted my confidence and prepared me in every way for the final interviews.",

    description:
      "Rodha has been played a pivotal role in my CAT & OMET preparation.Ravi sir has been a guide and motivator on the classes.A big thank you to team Rodha for their commitment and support in my journey! ",
  },


  {
    name: "Kirti",
    batch: "Batch - B2, GDPI",
    institute: "IIM Kozhikode",
    image: Student_1Array[5],
    imager: Icon_1,
    highlightedText:
      "ODHA played a crucial role in helping me improve my performance in the Quant section, especially compared to last year when I scored only 50 percentile in CAT.",

    description:
      " R I'm truly grateful for their guidance. The GDPI course also significantly boosted my confidence for the interviews, and the regular current affairs updates kept me well-informed. The mentors were incredibly supportive throughout the journey.",
  },
  {
    name: "Paras Hela",
    batch: "Batch - B2",
    institute: "IIM Lucknow",
    image: Student_1Array[6],
    imager: Icon_1,
    highlightedText:
      "As advised by Ravi Sir in one of the classes,  if you’ve come this far with CAT, don’t give up now. Go ahead and fight in the GDPI journey.",

    description:
      " Ravi Sir and Rodha really helped me improve my problem-solving skills and gave me the courage to take risks and keep fighting till last despite my financial and personal family problems. Even though I didn’t get a great percentile. Learn from the experience. Give your best to convert whatever calls you have. After that, decide if you want to try again or not.",
  },


  {
    name: "Alok Kumar",
    batch: "Batch - B4",
    institute: "IIM Shillong",
    image: Student_1Array[7],
    imager: Icon_1,
    highlightedText:
      "Rodha has been instrumental in my CAT and OMET preparation, as well as during my GDPI journey.",

    description:
      "The guidance I received at every stage was structured, motivating, and incredibly insightful. Ravi Sir, in particular, has been a constant source of inspiration. His clarity of thought, strategic approach, and powerful words were the driving force behind my preparation."
  },
  {
    name: "Chinmay Sahoo",
    batch: "Batch - B2",
    institute: "IIM Mumbai",
    image: Student_1Array[8],
    imager: Icon_1,
    highlightedText:
      "Rodha has helped me to score 99.76 percentile in CAT 24. Rodha has helped me specifically in VARC and LRDI. Thanks to the live classes, portal tests, sectional tests, and full-length mock tests.",

    description:
      "I have improved and developed a structured way to approach the questions. The vast and varied list of questions that I had at my disposal was all thanks to Rodha. Practicing these questions again and again helped me to develop the mindset and approach, because of which I was able to secure 99.76 percentile in CAT."
  },


  {
    name: "Yash Pal",
    batch: "Batch - B2",
    institute: "IIM Mumbai",
    image: Student_1Array[9],
    imager: Icon_1,
    highlightedText:
      "The structured approach, expert faculty, and constant mentoring helped me stay focused and improve consistently. The mock tests played a crucial role in identifying my weak areas and working on them.",

    description:
      "Coming from an Agriculture background, I knew I had to put in extra effort to crack the CAT. Joining Rodha turned out to be a great platform for my preparation journey. Thanks to the guidance and support from the Rodha team, I was able to convert IIM Lucknow."
  },

  // {
  //   name: "Adarsh Pandey",
  //   batch: "Batch - B2",
  //   institute: "IIM Lucknow",
  //   image: Student_1Array[2],
  //   imager: Icon_1,
  //   highlightedText:
  //     "Especially in VARC both Ayush and KD sir were superb in there teaching ways there tips and tricks were highly beneficial. And in Quant and LRDI the quality and quantity was superb.",

  //   description:
  //     "Yes definitely Rodha has helped a lot.there are not too many platforms where the quantity is huge without compromising on quality so yes in this aspect also Rodha helped a lot. And obviously Ravi, Apoorv and Tarun sir were great in their teaching methodologies."
  // },



  // {
  //   name: "Adarsh Pandey",
  //   batch: "Batch - B2",
  //   institute: "FMS",
  //   image: Student_1Array[2],
  //   imager: Icon_1,
  //   highlightedText:
  //     "Coming from a non-math background, things were really tough in the beginning. I felt lost, but I trusted Sir’s advice and kept pushing forward.",

  //   description:
  //     "When I started this journey, I was completely clueless. Joining Rodha turned out to be the best decision I ever made. I began with Rodha’s YouTube videos and later subscribed to their course. Ravi Sir’s guidance was truly invaluable—I don’t think I could’ve cracked the exam without his support. I’m truly grateful to Rodha for making this possible."
  // },
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
                <div className="w-[30%] h-50 text-center">
                  <img src={t.imager} className="w-[70px] mb-7" />
                  <div className="border-4 border-orange-500 rounded-full overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="object-cover w-[120px]"
                    />
                  </div>
                </div>
                <div className="w-[70%]">
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