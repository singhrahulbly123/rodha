import React, { useEffect, useState } from "react";
import { PhoneCall, MessageCircle, FileText, ChevronDown, ChevronUp } from "lucide-react";

const MobileBottomMenu = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    // Optional: only show on mobile devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (!isMobile) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#1E1E1E] border-t border-gray-300 dark:border-gray-700 shadow-md md:hidden">
            <div className="flex justify-around items-center py-2 relative">

                {/* Call Us Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="flex flex-col items-center text-sm text-gray-700 dark:text-white hover:text-[#FF6B00] transition"
                    >
                        <PhoneCall size={22} />
                        <span className="text-xs mt-1 flex items-center gap-1">
                            Call Us {showDropdown ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        </span>
                    </button>

                    {showDropdown && (
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white dark:bg-[#2b2b2b] border rounded-xl shadow-xl px-4 py-2 w-48 z-50">
                            {[
                                "+91-9394324046",
                                "+91-7982212251",
                                "+91-9874218333",
                                "+91-9997577662",
                            ].map((number, index, arr) => (
                                <a
                                    key={index}
                                    href={`tel:${number.replace(/[^+\d]/g, "")}`}
                                    className={`block text-sm text-gray-800 dark:text-white hover:text-orange-500 py-2 text-center transition ${index < arr.length - 1 ? 'border-b border-gray-300 dark:border-gray-600' : ''
                                        }`}
                                >
                                    {number}
                                </a>
                            ))}
                        </div>
                    )}
                </div>


                {/* WhatsApp */}
                <a
                    href="https://wa.me/919304491484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-sm text-gray-700 dark:text-white hover:text-[#25D366] transition"
                >
                    <MessageCircle size={22} />
                    <span className="text-xs mt-1">WhatsApp</span>
                </a>

                {/* Enquiry */}
                <button
                    onClick={() => {
                        const enquiry = document.getElementById("contact");
                        enquiry?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex flex-col items-center text-sm text-gray-700 dark:text-white hover:text-[#FF6B00] transition"
                >
                    <FileText size={22} />
                    <span className="text-xs mt-1">Enquiry</span>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomMenu;
