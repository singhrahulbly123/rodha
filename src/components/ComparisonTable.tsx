import React from "react";

export default function ComparisonTable() {
  const features = [
    "Full Length CAT Mocks",
    "OMETs Full Length Mocks\n(NMAT, SNAP, & XAT)",
    "CAT Sectional Tests",
    "Video Solutions",
    "CAT Topic Tests\n(VARC and QA)",
    "Percentile Tracker",
  ];

  const plans = [
    {
      name: "RODHA CAT &\nOMETs Package",
      values: ["30", "50", "105", "✔", "40+", "✔"],
    },
    {
      name: "RODHA CAT Mocks &\nSectional Tests",
      values: ["30", "✕", "105", "✔", "40+", "✔"],
    },
    {
      name: "RODHA\nCAT Mocks",
      values: ["30", "✕", "✕", "✔", "✕", "✔"],
    },
    {
      name: "RODHA\nSectional Tests",
      values: ["✕", "✕", "105", "✔", "40+", "✔"],
    },
    {
      name: "RODHA\nFree Mocks",
      values: ["01", "✕", "03", "✔", "5 QA\n2 VARC", "✕"],
    },
  ];

  return (
  <div className="bg-white dark:bg-[#242424] px-2 sm:px-4 py-12 w-full">
  <div className="overflow-x-auto max-w-7xl mx-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
    <table className="w-full min-w-[950px] border-separate border-spacing-2 text-xs sm:text-sm md:text-base">
      <thead>
        <tr>
          <th className="w-[220px] bg-black text-white px-2 sm:px-2 py-3 text-center font-semibold rounded-lg whitespace-pre-line">
            Products & Features
          </th>
          {plans.map((_, i) => (
            <th
              key={i}
              className="w-[160px] bg-black text-white px-2 sm:px-2 py-3 text-center font-semibold rounded-lg whitespace-pre-line"
            >
              {plans[i].name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature, rowIdx) => (
          <tr key={rowIdx}>
            <td className="w-[220px] bg-[#3e3e3e] text-white px-3 sm:px-4 py-4 text-center font-medium whitespace-pre-line rounded-lg">
              {feature}
            </td>
            {plans.map((plan, colIdx) => {
              const value = plan.values[rowIdx];
              const isCheck = value === "✔";
              const isCross = value === "✕";
              const isHighlightedColumn = colIdx === 1 || colIdx === 3;

              const bgColor = isHighlightedColumn
                ? "bg-[#262626] dark:bg-[#242424] border border-[#5b5b5b]"
                : "bg-[#FFECE0] dark:bg-[#FDFDFD]";

              const textColor =
                isCheck || isCross
                  ? "text-[#FF6B00]"
                  : isHighlightedColumn
                    ? "text-white dark:text-white"
                    : "text-[#000] dark:text-black";

              return (
                <td
                  key={colIdx}
                  className={`w-[160px] px-3 sm:px-4 py-4 h-20 text-center font-semibold whitespace-pre-line text-xs sm:text-sm md:text-base ${bgColor} ${textColor} rounded-lg`}
                >
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
