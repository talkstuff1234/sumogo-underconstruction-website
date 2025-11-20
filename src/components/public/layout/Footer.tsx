"use client";

import React from "react";
import Image from "next/image";
import instagram from "@/assets/icons/instagram.svg";
import facebook from "@/assets/icons/facebook-02.svg";
import twitter from "@/assets/icons/new-twitter.svg";
import linkedin from "@/assets/icons/linkedin-02.svg";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

function Footer() {
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
  };

  const handleFooterClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (window.location.pathname === "/") {
      handleScroll(e, targetId);
    }
  };

  const navLinks = [
    { href: "/#home", label: "Home", target: "#home" },
    { href: "/#about", label: "About Us", target: "#about" },
    { href: "/products", label: "Our Products", target: null },
    { href: "/contact", label: "Contact Us", target: null },
  ];

  const socialLinks = [
    {
      icon: facebook,
      alt: "Facebook",
      href: "https://www.facebook.com/share/1AExg5qcEu/?mibextid=wwXIfr",
    },
    {
      icon: instagram,
      alt: "Instagram",
      href: "https://www.instagram.com/sumogogroup",
    },
    {
      icon: twitter,
      alt: "Twitter",
      href: "#", // Add your Twitter URL when available
    },
    {
      icon: linkedin,
      alt: "LinkedIn",
      href: "#", // Add your LinkedIn URL when available
    },
  ];

  return (
    <footer className="bg-white text-center py-10 px-5" id="contact">
      <div className="flex justify-center mb-4">
        <Link href="/">
          <Image
            src={logo}
            alt="Sumogo Logo"
            width={180}
            height={60}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Tagline */}
      <p className="text-foundation-secondary-s100 mb-8 text-sm">
        Stay connected. Stay nourished.
      </p>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-8 text-foundation-secondary-200 text-sm font-medium">
        {navLinks.map((link) => (
          <React.Fragment key={link.href}>
            {link.target ? (
              <Link
                href={link.href}
                onClick={(e) => handleFooterClick(e, link.target!)}
                className="hover:text-green-700 transition cursor-pointer"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="hover:text-green-700 transition"
              >
                {link.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6 text-xl">
        {socialLinks.map((social) => (
          <a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background-link p-1 rounded-lg transition hover:scale-110 hover:bg-green-100"
          >
            <Image src={social.icon} height={20} width={20} alt={social.alt} />
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 mb-6 text-foundation-secondary-s200 text-sm">
        <div className="flex items-center gap-2">
          <i className="bx bx-envelope"></i>
          <a
            href="mailto:info@sumogolimited.com"
            className="hover:text-green-700 transition"
          >
            info@sumogolimited.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-center justify-center">
          <i className="bx bx-map"></i>
          <span>
            No. 4 Sefadu Close, Off Adetokunbo Ademola Crescent, Wuse 2, Abuja,
            Nigeria
          </span>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-foundation-secondary-s100 text-xs">
        © {new Date().getFullYear()} Sumogo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
