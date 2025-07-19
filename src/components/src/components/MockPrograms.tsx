import { Check } from "lucide-react";

import Programs from '../assets/images/programs/Programs.png'

export default function MockPrograms() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#121212] text-black dark:text-white px-4 py-12 font-sans" id="package">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our <span className="text-[#FF6B00] font-bold">CAT Mocks</span> Programs
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Choose from our high quality test packages designed to suit your preparation needs.
        </p>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 sm:grid sm:grid-cols-3 sm:overflow-x-visible sm:snap-none">


          {/* Card 1 */}
          <div className="group min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-[#fff] flex items-start justify-between bg-white flex-col g-gray-100 dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left">
            <div className="absolute -top-4 left-4 bg-[#FF6B00] text-white text-xs font-semibold px-3 py-1 rounded-full">Most Recommended</div>
            <h3 className="text-3xl font-semibold text-left mb-2">Rodha CAT Mocks And OMETs Package Test</h3>
            <p className="text-[#FF6B00] text-5xl text-left font-bold mb-4">₹5,999/-</p>
            <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4  dark:text-gray-300 group-hover:text-[#fff]">
              <li className="flex gap-2 items-center"> <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 30 Full-length CAT Mocks</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 10 XAT, 25 SNAP, And 15 NMAT Mocks</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 105 Sectional Tests</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 40+ Topic-wise Practice Modules</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Comprehensive Video Solutions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Strategy-based Mock Analysis Sessions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Percentile Tracking Tool</li>
            </ul>
            <a
              href="https://examrodha.thinkexam.com/packages/RodhaCATMocksandOMETSPackage/MTYwNQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-[#FF6B00] hover:bg-[#e55e00] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300">
                Buy Now
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="group min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-[#fff] flex items-start justify-between bg-white flex-col g-gray-100 dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left">
            <h3 className="text-3xl font-semibold text-left mb-2">Rodha CAT Mocks & Sectional Tests</h3>
            <p className="text-[#FF6B00] text-5xl text-left font-bold mb-4">₹4,999/-</p>
            <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-[#fff]">
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 30 Full-length CAT Mocks</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 105 Sectional Tests</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 40+ Topic-wise Practice Modules</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Comprehensive Video Solutions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Strategy-based Mock Analysis Sessions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Percentile Tracking Tool</li>
            </ul>
            <a
              href="https://examrodha.thinkexam.com/packages/RodhaCATMocksandSectionalTests/MTYwNA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-[#FF6B00] hover:bg-[#e55e00] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300">
                Buy Now
              </button>
            </a>
          </div>

          {/* Card 3 */}
          <div className="group min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-[#fff] flex items-start justify-between bg-white flex-col bg-gray-100 dark:bg-[#1C1C1C] border border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left">
            <h3 className="text-3xl font-semibold text-left mb-2">Rodha CAT Mocks</h3>
            <p className="text-[#FF6B00] text-5xl text-left font-bold mb-4">₹2,499/-</p>
            <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-[#fff]">
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 30 Full-length CAT Mocks</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Comprehensive Video Solutions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Strategy-based Mock Analysis Sessions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Percentile Tracking Tool</li>
            </ul>
            <a
              href="https://examrodha.thinkexam.com/packages/RodhaCATMocks/MTYwMw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-[#FF6B00] hover:bg-[#e55e00] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300">
                Buy Now
              </button>
            </a>
          </div>

          {/* Card 4 */}
          <div className="group min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-[#fff] flex items-start justify-between bg-white flex-col bg-gray-100 dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-left">Rodha Sectional Tests</h3>
            <p className="text-[#FF6B00] text-5xl text-left font-bold mb-4">₹2,999/-</p>
            <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-[#fff]">
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 105 Sectional Tests</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 40+ Topic-wise Practice Modules</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Comprehensive Video Solutions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Strategy-based Mock Analysis Sessions</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Percentile Tracking Tool</li>
            </ul>
            <a
              href="https://examrodha.thinkexam.com/packages/RodhaSectionalTests/MTYwMg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-[#FF6B00] hover:bg-[#e55e00] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300">
                Buy Now
              </button>
            </a>
          </div>

          {/* Card 5 */}
          <div className="group min-w-[85%] sm:min-w-0 snap-start hover:bg-[#545454] hover:text-[#fff] flex items-start justify-between bg-white flex-col bg-gray-100 dark:bg-[#1C1C1C] border-2 border-gray-200 dark:border-[#7c7c7c] rounded-xl p-6 text-left">
            <h3 className="text-3xl font-semibold mb-2 text-left">Rodha Free Mocks</h3>
            <h4 className="text-[#FF6B00] text-5xl font-bold mb-4 text-left">Free</h4>
            <ul className="text-sm space-y-2 text-gray-700 font-bold pt-4 dark:text-gray-300 group-hover:text-[#fff]">
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 1 Full Length CAT Mock</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 3 Sectional Tests</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 5 Topic Tests From Quantitative Aptitude</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> 2 Topic Tests From VARC</li>
              <li className="flex gap-2 items-center"><span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-white text-black dark:text-black">
                <Check className="w-3 h-3" />
              </span> Complete Video Solutions</li>
            </ul>
            <button className="mt-6 bg-[#FF6B00] hover:bg-[#e55e00] text-white text-sm font-semibold py-2 px-10 rounded-full transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Card 6 */}
          <div style={{ backgroundImage: `url(${Programs})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className="group min-w-[85%] sm:min-w-0 snap-start text-left bg-gray-200 dark:bg-[#2A2A2A] border border-gray-300 dark:border-[#2C2C2C] rounded-xl p-6 flex  justify-left p-8">
            <div>
              <p className="text-white dark:text-white text-3xl font-semibold mb-4">
                Check out our <br /> full comprehensive <br /> preparation <br /> programs
              </p>
              <a
                href="https://www.rodha.co.in/s/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 border border-white dark:border-white mt-10 text-white dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-xl font-semibold py-4 px-16 rounded-full transition duration-300">
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
