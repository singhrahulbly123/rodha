import React from "react";
import { Mail, PhoneCall } from "lucide-react";
import footer_img from '../assets/images/footer/bg-banner.jpg'
import icon_1 from '../assets/images/footer/Layer 20.png'
import icon_2 from '../assets/images/footer/Layer 21.png'
import icon_3 from '../assets/images/footer/Layer 23.png'
import footer_logo from '../assets/images/footer/footer-logo.png'






import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white text-sm" style={{ backgroundImage: `url(${footer_img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 text-left">
          <img
            src={footer_logo}
            alt="Rodha Logo"
            className="w-[180px] mb-4"
          />
          <p className="text-gray-300 text-left text-base mb-4">
            Empowering students to achieve their dreams through comprehensive CAT
            preparation and holistic skill development.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/rodhaplanet" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-black p-2 rounded-full">
              <FaInstagram size={16} />
            </a>

            <a href="https://www.linkedin.com/company/rodha-educational-services-private-limited/" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://www.youtube.com/@Rodha" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-2 rounded-full">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 text-left">
          <h3 className="text-2xl text-left font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-left text-base font-semibold text-gray-300">
            <li>Home</li>
            <li>Success Stories</li>
            <li>Why Choose Us?</li>
            <li>Student Testimonials</li>
            <li>Our Programs</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Our Courses */}
        <div className="col-span-1 text-left">
          <h3 className="text-2xl text-left font-bold mb-4">Our Courses</h3>
          <ul className="space-y-2 text-left text-base font-semibold text-gray-300">
            <li>Complete CAT Package</li>
            <li>CAT Fast Track Program</li>
            <li>Mock Test Series</li>
            <li>GDPI Preparation</li>
            <li>Quantitative Aptitude</li>
            <li>Verbal Ability</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 text-left">
          <h3 className="text-2xl text-left font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-left text-base font-semibold text-gray-300">
            <li className="flex"><img src={icon_1} className="w-[25px] h-[25px] mr-2" />  +91-9394324046</li>
            <li className="ml-8">+91-7982212251</li>
            <li className="ml-8">+91-9874218333</li>
            <li className="ml-8">+91-9997577662</li>
            <li className="flex"><img src={icon_2} className="w-[25px] h-[25px] mr-3" />  contactus@rodha.co.in</li>
            <li className="flex"><img src={icon_3} className="w-[25px] h-[25px] mr-3" />  Mon-Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <span>
          © 2023 <span className="text-orange-500">Rodha Education</span>. All rights reserved.
        </span>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="https://mocks.rodha.co.in/terms/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="https://mocks.rodha.co.in/refund/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Refund Policy
          </a>
          <a href="https://mocks.rodha.co.in/privacy/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
