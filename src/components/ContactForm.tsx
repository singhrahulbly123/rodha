import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="w-full px-4 py-10 md:px-20 bg-white dark:bg-[#242424] text-[#2B2B2B] dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-left">
            Get in <span className="text-[#FF7300]">Touch</span>
          </h2>
          <p className="max-w-md text-xl dark:text-[#b5b6b5] text-left">
            Have questions or need more information? Our team is here to help you.
          </p>

          <div className="space-y-6 mt-6">
            <div className="py-8">
              <div className="flex items-center gap-2 dark:text-[#b5b6b5] text-[24px] font-medium">
                <PhoneCall className="text-[#FF7300]" />  Call Us 
              </div>
              <div className="mt-2 space-y-1 text-xl sm:text-[28px] dark:text-[#b5b6b5] text-left pl-10">
                <h3>+91-9394324046</h3>
                <p>+91-7982212251</p>
                <p>+91-9874218333</p>
                <p>+91-9997577662</p>
              </div>
            </div>
            <div>
              <div className="flex items-center text-2xl dark:text-[#b5b6b5] gap-2 font-medium">
                <Mail className="text-[#FF7300]" /> Email Us
              </div>
              <p className="mt-2 dark:text-[#b5b6b5] text-xl sm:text-[28px] text-left pl-10">contactus@rodha.co.in</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
   <div className="w-full md:w-6/6 bg-[#444444] p-10 rounded-xl border border-[#959595]">
        <h3 className="text-2xl py-5 font-bold text-left text-white mb-4">
          Send a <span className="text-orange-500">Message</span>
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-5 py-3 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-4 mb-8 rounded-xl hover:bg-orange-600 transition"
          >
            Send Your Query
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
