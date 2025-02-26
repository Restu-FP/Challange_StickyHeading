"use client";
import { useEffect, useState } from "react";

export default function StickyHeading({ sections }) {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            // Adjust this value as needed
            current = section.title;
          }
        }
      });

      setActiveSection(current);
      setIsSticky(window.scrollY > 56); // Sticky active if scrolled more than navbar height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div
      className={`fixed top-[56px] left-0 w-full px-6 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-gray-900 shadow-lg z-40 
      transition-all duration-300 transform ${
        isSticky ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}>
      <h2 className="text-lg font-semibold text-center">
        {activeSection || "Skripsi Online"}
      </h2>
      <div className="mt-2 border-t border-gray-900 opacity-50"></div>
    </div>
  );
}
