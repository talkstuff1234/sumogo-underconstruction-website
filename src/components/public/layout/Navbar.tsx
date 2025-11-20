"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside of mobile menu AND menu button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (pathname === "/") {
      handleScroll(e, targetId);
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/#home", label: "Home", target: "#home" },
    { href: "/#about", label: "About Us", target: "#about" },
    { href: "/products", label: "Our Products", target: null },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="block"
          >
            <Image
              src={logo}
              alt="DeSumogo Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.target ? (
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.target!)}
                    className="text-[#474747] hover:text-green-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#474747] hover:text-green-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-[#049B3D] text-white hidden md:flex h-12 p-6 justify-center items-center rounded-full transition-all duration-200 whitespace-nowrap"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-800 hover:text-green-700 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <i className={`bx text-2xl ${isOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 px-6">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              {link.target ? (
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.target!)}
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 hover:text-green-700 transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Contact Button */}
          <li className="w-full text-center mt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
