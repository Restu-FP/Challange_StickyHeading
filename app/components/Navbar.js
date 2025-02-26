"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-gray-900 py-4 px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="mr-2">📚</span> Inilah My Skripsi
        </h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-900" />
          ) : (
            <FaBars className="text-2xl text-gray-900" />
          )}
        </div>
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 absolute md:static bg-white md:bg-transparent transition-all duration-300 ${
            isOpen ? "top-16" : "top-[-200px]"
          }`}>
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-900 hover:text-teal-500 transition duration-300">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          {/* Add more links here */}
        </ul>
      </div>
      {/* Mobile Menu Background */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden transition-all duration-300">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-900 hover:text-teal-500 transition duration-300">
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            {/* Add more links here */}
          </ul>
        </div>
      )}
    </nav>
  );
}
