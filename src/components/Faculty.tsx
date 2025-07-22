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
  {
    name: "Ravi Prakash",
    image: teamImagesArray[0],
    highlight: true,
    desc: `• Founder of RODHA | Expert in Quant & LRDI\n• 10+ years of experience in training students for CAT and other MBA entrance exams\n• Recognized as one of the top educators in the EdTech industry for his clear, concept-driven approach to QA and LRDI.\n• Believes in the mantra “Don’t give up”, inspiring thousands of aspirants to stay motivated and overcome obstacles.`
  },
  {
    name: "Apoorv Tandon",
    image: teamImagesArray[1],
    desc: `• Quant & LRDI Mentor | CAT Expert | 8+ Years of Teaching Experience\n• 8 years of experience mentoring students for competitive exams with a strong focus on QA and LRDI\n• A consistent CAT taker since 2017, with a personal best of 99.72 percentile overall in CAT 2019.\n• Scored 99.9+ percentile six times in QA and LRDI.`
  },
  {
    name: "Swapnil Singhai",
    image: teamImagesArray[3],
    desc: `• Senior Faculty | Engineer + MBA | 20 Years of Teaching Excellence\n• Brings with him 20+ years of rich experience in the education and test-prep industry\n• Has successfully trained over 18,000+ students for competitive exams including CAT, XAT, GMAT, and Banking\n• Firm believer in the mantra: “Genius is 1% talent and 99% hard work”`
  },
  {
    name: "Tarun Malik",
    image: teamImagesArray[4],
    highlight: true,
    desc: `• Aptitude Expert with 20+ Years of Excellence in Test Prep & Mentoring\n• Over 20 years of teaching experience in DILR and QA across major competitive exams like CAT, XAT, GMAT, SAT, CLAT, and others.\n• Scored 100%ile in Quantitative Ability & Data Interpretation (QADI) in CAT\n• Secured 99.99%ile in Quantitative Ability (QA) in XAT\n• Achieved a perfect score of 800/800 in the SAT Math section`
  },
  {
    name: "Krishnendu Dutta (KD)",
    image: teamImagesArray[2],
    highlight: true,
    desc: `• VARC Expert | CAT Veteran\n• 20+ years of experience coaching aspirants for CAT and other MBA entrance exams\n• A consistent 99.9%iler in CAT and other top exams\n• Renowned for crystal-clear concepts, a relatable teaching style\n• Has mentored thousands of students across India`
  },
  {
    name: "Nikita Gupta",
    image: teamImagesArray[5],
    highlight: true,
    desc: `• Verbal Aptitude Expert | TESOL Scholar | Language Educator\n• 8+ years of experience teaching Verbal Aptitude to aspirants of MBA and Law entrance exams, including CAT, XAT, NMAT, SNAP, and CLAT.\n• Specializes in building students’ LSRW skills (Listening, Speaking, Reading, Writing), guiding many to top institutes like IIMs and NLUs.\n• 99.9%ile in Verbal on CAT and XAT\n• 111/120 in NMAT, 14/15 in SNAP, 8.5/9 band in IELTS, with a perfect 9 in Reading`
  },
  {
    name: "Sharwari Amte",
    image: teamImagesArray[8],
    desc: `• Experienced Educator | Verbal Ability Expert | Test-Prep Educator\n• 8+ years of experience teaching Verbal Ability across major competitive exams including CAT, GRE, GMAT, CLAT, XAT, NMAT, and IIFT.\n• Blends strong conceptual clarity with real-world application\n• Holds a postgraduate degree in engineering, earned on a full scholarship\n• Known for her deep understanding of exam frameworks and learner psychology`
  },
  {
    name: "Brijesh Pandey",
    image: teamImagesArray[6],
    desc: `• Verbal Mentor\n• 15+ years’ experience in CAT, GMAT and IPMAT industry\n• 99%iler in CAT VARC\n• Teaches vocabulary in a simplified storytelling way\n• Known for making sessions interesting by cracking jokes and by motivating students.`
  },
  {
    name: "Sanchit Gupta",
    image: teamImagesArray[7],
    highlight: true,
    desc: `• Faculty | IIT Jodhpur Alumnus | 8+ Years of Teaching Excellence\n• An IIT Jodhpur graduate in Electrical Engineering\n• Has taught thousands of students for CAT, IPMAT, and other aptitude exams\n• Known for making complex Quant and Logical Reasoning concepts accessible\n• 99.9 percentile in CAT Quantitative Aptitude`
  }
];

export default function Faculty1() {
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
              className="relative group min-w-[50%] sm:min-w-0 flex flex-col items-center transition-transform duration-300 hover:scale-105 snap-start"
            >
              {/* Image Container */}
              <div className="w-full h-auto overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[200px] max-w-[200px] h-[200px] object-scale-down shadow-md"
                />

                {/* Button Always Visible on Mobile, On Hover on Desktop */}
                <div className="absolute hidden sm:flex inset-0 items-end justify-center transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="cursor-pointer px-3 py-1 bg-orange-600 text-white text-[10px] rounded-full hover:bg-orange-700"
                  >
                    View More
                  </button>
                </div>
              </div>

              <p className="mt-2 text-sm md:text-base font-medium">{member.name}</p>
               <div className="mt-2 d-block sm:hidden inset-0 flex items-end justify-center transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
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

      {/* Popup Dialog */}
      <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg w-full rounded-2xl bg-white dark:bg-[#1e1e1e] p-6 shadow-lg space-y-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedMember?.image}
                alt={selectedMember?.name}
                className="w-[200px] h-[220px]"
              />
              <Dialog.Title className="text-xl font-bold mt-4 text-orange-600">
                {selectedMember?.name}
              </Dialog.Title>
            </div>

            <div className="mb-0 text-sm md:text-sm text-gray-800 dark:text-gray-300 leading-relaxed space-y-2">
              {selectedMember?.desc
                ?.split("•")
                .map(line => line.trim())
                .filter(Boolean)
                .map((line, idx) => (
                  <p key={idx} className="flex items-start gap-2 mb-0">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{line}</span>
                  </p>
                ))}
            </div>

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