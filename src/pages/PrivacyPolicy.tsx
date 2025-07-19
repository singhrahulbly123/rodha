import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white">
      {/* Breadcrumb + Title Section */}
      <div className="bg-gray-100 dark:bg-[#1f1f1f] py-10 px-4 sm:px-0">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-2">
            Privacy Policy
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:underline text-orange-500">
              Home
            </Link>{" "}
            / Privacy Policy
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-10 py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Your privacy is important to us. Here's how we collect and protect your data.
          </p>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              This privacy policy outlines how we collect, use, and safeguard your personal information when you interact with our website and services.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                We collect information like name, email, and contact number solely to provide access and communication regarding our services.
              </li>
              <li>
                Your personal data is never shared with third parties without your explicit consent.
              </li>
              <li>
                All transactions and user sessions are secured using industry-standard SSL encryption.
              </li>
              <li>
                You have full control to opt out of promotional emails anytime through provided links.
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
