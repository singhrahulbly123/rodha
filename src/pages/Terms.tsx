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
            </Link>{" "}/ Terms & Conditions
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 sm:px-10 py-14">
        <div className="max-w-5xl mx-auto prose prose-gray dark:prose-invert prose-lg">
          <p>Please read these terms carefully before using our services.</p>

          <p>
            Welcome to Rodha! These terms and conditions outline the rules and regulations for the use of Rodha's website, located at
            <a href="https://mocks.rodha.co.in" className="text-orange-500" target="_blank" rel="noopener noreferrer"> https://mocks.rodha.co.in</a>. By accessing this website we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all of the terms stated on this page.
          </p>

          <p>
            The terminology used in these terms includes “Client”, “You” and “Your” referring to you, the user of this website; “The Company”, “Ourselves”, “We”, “Our” and “Us” refers to Rodha; and “Party”, “Parties”, or “Us” refers to both the Client and ourselves. These terms govern your access to and use of the website and all related services.
          </p>

          <h2>Cookies</h2>
          <p>We employ the use of cookies. By accessing our website, you agree to use cookies in accordance with our Privacy Policy.</p>

          <h2>License</h2>
          <p>
            Unless otherwise stated, Rodha and/or its licensors own the intellectual property rights for all material on the site. You may access it for your own personal use, subject to the restrictions set in these terms.
          </p>
          <ul>
            <li>Do not republish material from the site.</li>
            <li>Do not sell, rent or sub-license material.</li>
            <li>Do not reproduce, duplicate or copy material.</li>
            <li>Do not redistribute content from the website.</li>
          </ul>

          <h2>User Comments</h2>
          <p>Comments posted on the website reflect the opinions of the individuals posting them and not those of Rodha. Rodha shall not be liable for such Comments. However, we reserve the right to monitor and remove any content deemed inappropriate or in breach of these Terms.</p>

          <h2>Hyperlinking</h2>
          <p>
            Certain organizations may link to our website without prior written approval, including government agencies, search engines, and news organizations. We may also approve requests from other entities, provided they meet our criteria.
          </p>

          <h2>Content Liability</h2>
          <p>We are not responsible for content that appears on external websites linking to ours. You agree to defend us against all claims arising on your website.</p>

          <h2>Reservation of Rights</h2>
          <p>We reserve the right to request the removal of all links or any particular link to our website. We also reserve the right to amend these terms and linking policy at any time.</p>

          <h2>Disclaimer</h2>
          <p>
            To the maximum extent permitted by law, we exclude all representations and warranties relating to this website and its use. Nothing in this disclaimer will limit or exclude any liabilities not permitted under applicable law.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 italic">Last updated: July 2025</p>
        </div>
      </div>
    </div>
  );
}
