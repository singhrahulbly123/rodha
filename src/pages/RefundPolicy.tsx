import React from "react";
import { Link } from "react-router-dom";



export default function Term() {
  return (
    
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#2B2B2B] dark:text-white">
      
      {/* Header Section */}
      <div className="bg-gray-100 dark:bg-[#1f1f1f] py-10 px-4 sm:px-0 border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-4">
            Cancellation & Refunds
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:underline text-orange-500">
              Home
            </Link>{" / Cancellation & Refunds"} 
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 py-14 bg-white dark:bg-[#121212]">
        <div className="max-w-5xl mx-auto space-y-10">

          <div className="bg-zinc-50 dark:bg-[#1A1A1A] p-6 sm:p-10 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <div className="space-y-8 text-[15px] sm:text-[17px] leading-7 text-gray-800 dark:text-gray-200">
              <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Thank you for registering the e-learning course at Rodha
                </h2>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Returns
                </h2>
                <p>
                  Unfortunately digital courses sold at Rodha cannot be cancelled/refunded.

                </p>
              </section>

               <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Contact Us
                </h2>
                <p>
                  If you have any questions on refund policy, kindly contact us at <a href="mailto:contactus@rodha.co.in">contactus@rodha.co.in</a>
                </p>
              </section>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">Last updated: July 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
