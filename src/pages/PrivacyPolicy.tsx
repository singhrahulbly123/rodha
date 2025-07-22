import React from "react";
import { Link } from "react-router-dom";



export default function PrivacyPolicy() {
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

                <p>
                  This Privacy Policy governs the manner in which Rodha collects, uses, maintains and discloses
                  information collected from users (each, a "User") of the <a href="https://mocks.rodha.co.in">https://mocks.rodha.co.in</a> website
                  ("Site"). This privacy policy applies to the Site and all products and services offered by Rodha.
                </p>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Personal identification information
                </h2>
                <p>
                  We may collect personal identification information from Users in a variety of ways, including,
                  but not limited to, when Users visit our site, register on the site, place an order, subscribe to the
                  newsletter, respond to a survey, fill out a form, and in connection with other activities, services,
                  features or resources we make available on our Site. Users may be asked for, as appropriate,
                  name, email address, mailing address, phone number, credit card information. Users may,
                  however, visit our Site anonymously. We will collect personal identification information from
                  Users only if they voluntarily submit such information to us. Users can always refuse to supply
                  personally identification information, except that it may prevent them from engaging in certain
                  Site related activities.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Non-personal identification information
                </h2>
                <p>
                  We may collect non-personal identification information about Users whenever they interact
                  with our Site. Non-personal identification information may include the browser name, the type
                  of computer and technical information about Users means of connection to our Site, such as
                  the operating system and the Internet service providers utilized and other similar information.

                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  Web browser cookies
                </h2>
                <p>
                  Our Site may use "cookies" to enhance User experience. User's web browser places cookies on
                  their hard drive for record-keeping purposes and sometimes to track information about them.
                  User may choose to set their web browser to refuse cookies, or to alert you when cookies are
                  being sent. If they do so, note that some parts of the Site may not function properly.
                </p>
              </section>


              <section>
                <h2 className="text-xl font-semibold text-orange-500 mb-3 border-b border-gray-300 dark:border-gray-600 pb-1">
                  How we use collected information
                </h2>
                <p>
                  Rodha may collect and use Users personal information for the following purposes:
                </p>
                <ul>
                  <li><strong>To improve customer service:</strong>Information you provide helps us respond to your
                    customer service requests and support needs more efficiently.</li>
                  <li><strong>To personalize user experience:</strong>We may use information in the aggregate to
                    understand how our Users as a group use the services and resources provided on our
                    Site.</li>
                </ul>

              </section>



              <p className="text-sm text-gray-500 dark:text-gray-400 italic">Last updated on August 14, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
