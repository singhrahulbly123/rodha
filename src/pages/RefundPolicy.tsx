import React from "react";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white">
      {/* Top breadcrumb and title section */}
      <div className="bg-gray-100 dark:bg-[#1f1f1f] py-10 px-4 sm:px-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-2">
            Refund Policy
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:underline text-orange-500">
              Home
            </Link>{" "}
            / Refund Policy
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-10 py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Please read our refund guidelines carefully before making a purchase.
          </p>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              We understand that plans may change. However, due to the digital
              nature of our products and the resources involved in preparing
              mocks and materials, we follow a strict no-refund policy.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                All purchases are final and non-refundable once access is granted.
              </li>
              <li>
                In rare cases of duplicate transactions or technical errors, please
                contact support within 7 days.
              </li>
              <li>
                Refunds will be processed only if a valid reason is approved by our team.
              </li>
            </ul>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
