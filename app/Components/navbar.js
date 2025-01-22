"use client";
import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/Favicon.png?v=1737325460"
          alt="Logo"
          className="w-10 h-10 rounded-full sm:w-20 sm:h-20"
        />
        <span className="ml-4 text-lg font-bold">Brand Name</span>
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <button
        className="block sm:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } z-10 sm:flex sm:items-center sm:gap-10 sm:translate-x-0 bg-gray-800 sm:bg-transparent absolute sm:relative top-16 left-0 w-full sm:w-auto transition-transform`}
      >
        <li className="text-center py-2 sm:py-v ">
          <Link href="/home" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li className="text-center py-2 sm:py-v ">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li className="text-center py-2 sm:py-v ">
          <Link href="/episodes" className="hover:text-gray-300">
            Episodes
          </Link>
        </li>
        <li className="text-center py-2 sm:py-v ">
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
    
  );
}
