import React from "react";
import { Link } from "react-router-dom";

export default function Term() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white">
      {/* Top grey breadcrumb + title bar */}
      <div className="bg-gray-100 dark:bg-[#1f1f1f] py-10 px-4 sm:px-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-2">
            Terms & Conditions
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:underline text-orange-500">
              Home
            </Link>{" "}
            / Terms & Conditions
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 sm:px-10 py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Please read these terms carefully before using our services.
          </p>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              By accessing and using our website and services, you agree to
              comply with the following terms and conditions. These terms may
              be updated periodically, so we encourage you to review them
              regularly.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                Users must provide accurate and current information during
                registration.
              </li>
              <li>
                All content on this website is the intellectual property of{" "}
                <strong>Rodha</strong> and may not be reproduced without
                permission.
              </li>
              <li>
                Misuse of services, including cheating or attempting to hack,
                will lead to account termination.
              </li>
              <li>
                Rodha reserves the right to modify or discontinue services at
                any time without prior notice.
              </li>
              <li>
                Users are responsible for maintaining the confidentiality of
                their login credentials.
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
