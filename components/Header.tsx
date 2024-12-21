"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              <span className="font-semibold">Promptly</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#platforms"
              className="text-gray-700 hover:text-gray-900"
            >
              Platforms
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-[#2D1537] hover:bg-[#2D1537] text-white">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/pricing"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Pricing
          </Link>
          <Link
            href="/reviews"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Reviews
          </Link>
          <Link
            href="/features"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Features
          </Link>
          <Link
            href="/platforms"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Platforms
          </Link>
          <Link
            href="/faq"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            FAQ
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full bg-[#2D1537] hover:bg-[#2D1537] text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
