import { Check } from "lucide-react";
import Programs from '../assets/images/programs/Programs.png'

export default function MockPrograms() {
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
          {[...Array(5)].map((_, i) => (
            <div key={i} className="group relative min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-white flex items-start justify-between bg-white flex-col dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left transition duration-300">
              {i === 0 && (
                <div className="absolute -top-4 left-4 bg-[#FF6B00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Recommended
                </div>
              )}
              <h3 className="text-3xl font-semibold mb-2 text-left cursor-default">
                {[
                  "Rodha CAT Mocks And OMETs Package Test",
                  "Rodha CAT Mocks & Sectional Tests",
                  "Rodha CAT Mocks",
                  "Rodha Sectional Tests",
                  "Rodha Free Mocks"
                ][i]}
              </h3>
              <p className="text-[#FF6B00] text-5xl font-bold mb-4 text-left cursor-default">
                {[
                  "₹5,999/-",
                  "₹4,999/-",
                  "₹2,499/-",
                  "₹2,999/-",
                  "Free"
                ][i]}
              </p>
              <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-white">
                {[
                  [
                    "30 Full-length CAT Mocks",
                    "10 XAT, 25 SNAP, And 15 NMAT Mocks",
                    "105 Sectional Tests",
                    "40+ Topic-wise Practice Modules",
                    "Comprehensive Video Solutions",
                    "Strategy-based Mock Analysis Sessions",
                    "Percentile Tracking Tool"
                  ],
                  [
                    "30 Full-length CAT Mocks",
                    "105 Sectional Tests",
                    "40+ Topic-wise Practice Modules",
                    "Comprehensive Video Solutions",
                    "Strategy-based Mock Analysis Sessions",
                    "Percentile Tracking Tool"
                  ],
                  [
                    "30 Full-length CAT Mocks",
                    "Comprehensive Video Solutions",
                    "Strategy-based Mock Analysis Sessions",
                    "Percentile Tracking Tool"
                  ],
                  [
                    "105 Sectional Tests",
                    "40+ Topic-wise Practice Modules",
                    "Comprehensive Video Solutions",
                    "Strategy-based Mock Analysis Sessions",
                    "Percentile Tracking Tool"
                  ],
                  [
                    "1 Full Length CAT Mock",
                    "3 Sectional Tests",
                    "5 Topic Tests From Quantitative Aptitude",
                    "2 Topic Tests From VARC",
                    "Complete Video Solutions"
                  ]
                ][i].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center cursor-default">
                    <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                      <Check className="w-3 h-3" />
                    </span> {item}
                  </li>
                ))}
              </ul>
              <a
                href={[
                  "https://examrodha.thinkexam.com/packages/RodhaCATMocksandOMETSPackage/MTYwNQ==",
                  "https://examrodha.thinkexam.com/packages/RodhaCATMocksandSectionalTests/MTYwNA==",
                  "https://examrodha.thinkexam.com/packages/RodhaCATMocks/MTYwMw==",
                  "https://examrodha.thinkexam.com/packages/RodhaSectionalTests/MTYwMg==",
                  "https://examrodha.thinkexam.com/startTest/NA/MTI4Nzk2MzU="
                ][i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 bg-[#FF6B00] hover:bg-[#fff] hover:text-[#000] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300 cursor-pointer">
                  Buy Now
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
                Check out our <br /> full comprehensive <br /> preparation <br /> programs
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
