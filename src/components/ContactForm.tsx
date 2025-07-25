import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    "bot-field": ""
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (formData["bot-field"]) {
      newErrors.name = "Bot detected.";
      return newErrors;
    }
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = "Valid email is required";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const errors = validateForm();
  setFormErrors(errors);

  if (Object.keys(errors).length > 0) return;

  try {
    const response = await fetch("https://rodha.mockup4clients.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      }),
    });

    if (response.ok) {
      setStatus("success");
      setShowPopup(true);
      setFormData({ name: "", email: "", phone: "", message: "", "bot-field": "" });
    } else {
      console.error("❌ Server error:", await response.text());
      setStatus("error");
    }
  } catch (error) {
    console.error("❌ Exception:", error);
    setStatus("error");
  } finally {
    setTimeout(() => {
      setStatus("");
      setShowPopup(false);
    }, 3000);
  }
};
  return (
    <div id="contact" className="relative w-full px-4 py-10 md:px-20 bg-white dark:bg-[#242424] text-[#2B2B2B] dark:text-white">
      {showPopup && status === "success" && (
        <div className="absolute top-4 right-4 z-50 flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Message sent successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                <h3>
                  <a href="tel:+919394324046" className="hover:text-[#FD6A02]">+91-9394324046</a>
                </h3>
                <p>
                  <a href="tel:+917982212251" className="hover:text-[#FD6A02]">+91-7982212251</a>
                </p>
                <p>
                  <a href="tel:+919874218333" className="hover:text-[#FD6A02]">+91-9874218333</a>
                </p>
                <p>
                  <a href="tel:+919997577662" className="hover:text-[#FD6A02]">+91-9997577662</a>
                </p>
              </div>

            </div>
            <div>
              <div className="flex items-center text-2xl dark:text-[#b5b6b5] gap-2 font-medium">
                <Mail className="text-[#FF7300]" /> Email Us
              </div>
              <p className="mt-2 dark:text-[#b5b6b5] text-xl sm:text-[28px] text-left pl-10"><a href="mailto:contactus@rodha.co.in" className="hover:text-[#FD6A02]">contactus@rodha.co.in</a></p>
            </div>
          </div>
        </div>
        {/* Form Start Here */}

        <div id="EnquireNow" className="w-full md:w-6/6 bg-[#444444] p-5 md:p-10 sm:p-10 rounded-xl border border-[#959595]">
          <h3 className="text-2xl py-5 font-bold text-left text-white mb-4">
            Send a <span className="text-orange-500">Message</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="bot-field"
              className="hidden"
              value={formData["bot-field"]}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <p className="text-red-400 text-sm">{formErrors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="text-red-400 text-sm">{formErrors.email}</p>}

            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="Phone"
              className="w-full px-5 py-4 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <p className="text-red-400 text-sm">{formErrors.phone}</p>}

            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className="w-full px-5 py-3 rounded-xl bg-transparent border border-[#959595] text-white placeholder-[#959595] focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && <p className="text-red-400 text-sm">{formErrors.message}</p>}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-4 mb-4 rounded-xl hover:bg-orange-600 transition"
            >
              Send Your Query
            </button>

            {status === "error" && (
              <div className="text-red-400 text-center">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
