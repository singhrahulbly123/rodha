import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logo/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "#mocks" },
    { label: "Why Choose Us?", href: "#courses" },
    { label: "Our Programs", href: "#faculty" },
    { label: "Faculty", href: "#faculty" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Enquire Now", href: "#contact" },
  ];

  return (
    <header className="bg-white dark:bg-[#121212] shadow-sm py-4 text-black px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between w-full md:hidden">
          <img src={Logo} alt="Rodha Logo" className="h-12" />

          <div className="flex items-center gap-3">
            <a
              href="http://examrodha.thinkexam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white border border-white px-6 py-1 rounded-full text-xs hover:bg-white hover:text-black transition">
                Login
              </button>
            </a>
            <a
              href="http://examrodha.thinkexam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF6B00] text-white px-6 py-1 rounded-full text-xs hover:bg-orange-600 transition">
                Sign Up
              </button>
            </a>
            <button onClick={toggleSidebar} className="text-black dark:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center w-full">
          <img src={Logo} alt="Rodha Logo" className="h-16" />
          <nav className="flex items-center space-x-6 dark:text-white text-base font-light font-poppins">
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href} className="hover:text-[#FF6B00]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex space-x-3">
            <a
              href="http://examrodha.thinkexam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border bg-dark dark:border-white dark:text-white px-10 text-black py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                Login
              </button>
            </a>
            <a
              href="http://examrodha.thinkexam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF6B00] text-white px-10 py-2 rounded-full text-sm hover:bg-orange-600 transition">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed top-0 left-0 w-[80%] h-full bg-[#1E1E1E] p-6 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="Rodha Logo" className="h-10" />
              <button onClick={toggleSidebar} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Login + Signup */}
            <div className="mb-8 flex gap-3">
              <a
                href="http://examrodha.thinkexam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-white text-white px-8 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-full">
                  Login
                </button>
              </a>
              <a
                href="http://examrodha.thinkexam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FF6B00] text-white px-8 py-2 rounded-full text-sm hover:bg-orange-600 transition w-full">
                  Sign Up
                </button>
              </a>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-0 text-black dark:text-white text-base">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="px-2 py-3 border-b border-gray-600 text-left hover:text-[#FF6B00] transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Backdrop */}
          <div
            onClick={toggleSidebar}
            className="absolute inset-0  bg-opacity-70 z-40"
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
