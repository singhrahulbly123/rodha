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
import MobileBottomMenu from "./MobileBottomMenu";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1B1B1B] text-white text-sm" style={{ backgroundImage: `url(${footer_img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
        <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 text-left">
            <img
              src={footer_logo}
              alt="Rodha Logo"
              className="w-[250px] mb-4"
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
              <li><a href="#home" className="hover:text-[#ff6900] transition-colors">Home</a></li>
              <li><a href="#success-stories" className="hover:text-[#ff6900] transition-colors">Success Stories</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#ff6900] transition-colors">Why Choose Us?</a></li>
              <li><a href="#student-testimonials" className="hover:text-[#ff6900] transition-colors">Student Testimonials</a></li>
              <li><a href="#package" className="hover:text-[#ff6900] transition-colors">Our Programs</a></li>
              <li><a href="#about-us" className="hover:text-[#ff6900] transition-colors">About Us</a></li>
            </ul>

          </div>

          {/* Our Courses */}
          {/* <div className="col-span-1 text-left">
          <h3 className="text-2xl text-left font-bold mb-4">Our Courses</h3>
          <ul className="space-y-2 text-left text-base font-semibold text-gray-300">
            <li>Complete CAT Package</li>
            <li>CAT Fast Track Program</li>
            <li>Mock Test Series</li>
            <li>GDPI Preparation</li>
            <li>Quantitative Aptitude</li>
            <li>Verbal Ability</li>
          </ul>
        </div> */}

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 text-left">
            <h3 className="text-2xl text-left font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-left text-base font-semibold text-gray-300">
              <li className="flex items-center">
                <img src={icon_1} className="w-[25px] h-[25px] mr-2" />
                <a href="tel:+919394324046" className="hover:text-[#FD6A02]">+91-9394324046</a>
              </li>
              <li className="ml-8">
                <a href="tel:+917982212251" className="hover:text-[#FD6A02]">+91-7982212251</a>
              </li>
              <li className="ml-8">
                <a href="tel:+919874218333" className="hover:text-[#FD6A02]">+91-9874218333</a>
              </li>
              <li className="ml-8">
                <a href="tel:+919997577662" className="hover:text-[#FD6A02]">+91-9997577662</a>
              </li>
              <li className="flex items-center">
                <img src={icon_2} className="w-[25px] h-[25px] mr-3" />
                <a href="mailto:contactus@rodha.co.in" className="hover:text-[#FD6A02]">contactus@rodha.co.in</a>
              </li>
              <li className="flex items-center">
                <img src={icon_3} className="w-[25px] h-[25px] mr-3" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </li>
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
      <MobileBottomMenu />
    </>
  );
}
