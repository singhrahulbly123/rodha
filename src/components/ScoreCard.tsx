import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Easy", Questions: 15, fill: "#FFBE18" },
  { name: "Medium", Questions: 29, fill: "#FF7300" },
  { name: "Tough", Questions: 24, fill: "#7C7C7C" },
];

export default function ScoreCard() {
  return (
    <div className="bg-[#ffffff] text-white py-5 sm:py-16 dark:bg-[#242424] dark:text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-black dark:text-white text-3xl font-bold pb-10">
          Track . <span className="text-orange-500">Improve . Excel</span>
        </h2>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4 p-4 sm:p-4">
          <div className="bg-orange-500 text-white p-4 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            <p className="text-sm">Total Candidates</p>
            <p className="text-2xl font-bold">18934</p>
          </div>
          <div className="bg-[#4A4A4A] dark:bg-gray-200 p-4 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            <p className="text-sm">Total Questions</p>
            <p className="text-2xl font-bold">68</p>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            <p className="text-sm">Total Marks</p>
            <p className="text-2xl font-bold">204</p>
          </div>
          <div className="bg-[#4A4A4A] dark:bg-gray-200 p-4 rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
            <p className="text-sm">Total Test Duration</p>
            <p className="text-2xl font-bold">
              120 <span className="text-sm font-medium">Min</span>
            </p>
          </div>
        </div>

        {/* Summary and Chart */}
        <div className="flex flex-col p-5 sm:grid sm:grid-cols-2 gap-4 sm:pt-6 sm:px-0">
          {/* Summary Box */}
          <div className="bg-white text-black dark:bg-[#fff] dark:text-black p-4 sm:p-6 rounded-xl space-y-4 shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold">Summary</h3>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-left font-semibold">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Right Marks</p>
                  <p>141</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Negative Marks</p>
                  <p>09</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Left Questions</p>
                  <p>11</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Attempted Questions</p>
                  <p>57</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Time On Questions</p>
                  <p>00:02:01</p>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                  <p>Accuracy</p>
                  <p>82.50%</p>
                </div>
              </div>
            </div>

            {/* Stats Boxes */}
            <div className="flex flex-wrap gap-4 justify-between text-center">
              {["Rank", "Score", "Percentage", "Percentile"].map((label, idx) => (
                <div
                  key={idx}
                  className="flex-1 min-w-[130px] bg-gray-200 dark:bg-[#e5e5e5] text-black dark:text-black py-3 rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <p className="text-sm">{label}</p>
                  <p className="text-xl font-bold">
                    {label === "Rank"
                      ? "18"
                      : label === "Score"
                      ? "132"
                      : label === "Percentage"
                      ? "64.70%"
                      : "99.91"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white text-black dark:bg-[#fff] dark:text-black p-4 rounded-xl shadow border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Difficulty v/s Marks Distributions</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 10, right: 20, bottom: 10, left: 40 }}
              >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="Questions" fill="#FFBE18" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-around text-sm pt-2">
              <div className="flex items-center space-x-1">
                <div className="w-5 h-3 bg-[#FFBE18]" />
                <span>Easy</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-3 bg-[#FF7300]" />
                <span>Medium</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-3 bg-[#7C7C7C]" />
                <span>Tough</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
