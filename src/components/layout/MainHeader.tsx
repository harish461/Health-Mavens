"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

const navLinks = [
  { label: "Treatments", href: "/#treatments", active: true },
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Ayurveda", href: "#ayurveda" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-white transition-all duration-300 z-40 sticky top-0 ${
          isScrolled ? "shadow-md py-2.5" : "py-3 sm:py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Left: Health Mavens Logo */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-teal-primary rounded-lg transition-transform hover:opacity-95"
              aria-label="Health Mavens Homepage"
            >
              <div className="relative h-14 sm:h-16 lg:h-[76px] w-auto aspect-[1024/944]">
                <Image
                  src="/images/health-mavens-logo.jpg"
                  alt="Health Mavens - Global Healthcare Facilitation"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Center: Main Navigation Menu (Desktop & Large Tablet) */}
            <nav
              className="hidden lg:flex items-center space-x-7 xl:space-x-9"
              aria-label="Primary Navigation"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[15px] xl:text-base font-medium transition-colors relative py-2 ${
                    item.active
                      ? "text-teal-primary font-semibold"
                      : "text-[#2D3748] hover:text-teal-primary"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-teal-primary rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right: CTA Button & Mobile Hamburger */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="#quote-form"
                className="hidden sm:inline-flex items-center justify-center gap-2 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] text-white font-semibold text-sm lg:text-[15px] px-5 sm:px-6 py-3 rounded-[10px] shadow-cta hover:shadow-cta-hover transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:ring-offset-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Mobile / Tablet Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-navy hover:text-teal-primary hover:bg-teal-soft/50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-primary"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navLinks}
      />
    </>
  );
}
