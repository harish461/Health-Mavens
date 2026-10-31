import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function MainFooter() {
  const quickLinks = [
    { label: "Find Best Doctors", href: "/doctors" },
    { label: "Find Best Hospitals", href: "/hospitals" },
    { label: "Ayurveda Treatments", href: "/ayurveda" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Book Appointment", href: "#quote-form" },
    { label: "Home", href: "/" },
  ];

  const aboutLinks = [
    { label: "Who Are We", href: "/about-us#story" },
    { label: "Vision", href: "/about-us#vision" },
    { label: "Mission", href: "/about-us#mission" },
    { label: "Our Standards", href: "/about-us#standards" },
    { label: "Our Network", href: "/about-us#network" },
    { label: "Patient Journey", href: "/about-us#journey" },
  ];

  return (
    <footer className="w-full bg-[#071932] text-slate-300 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Partner Badge (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <div className="bg-white p-2 rounded-xl inline-block shadow-sm">
              <Image
                src="/images/health-mavens-logo.jpg"
                alt="Health Mavens Logo"
                width={120}
                height={55}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Mission Statement */}
            <p className="mt-4 text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-sm">
              At Health Mavens, we bring patients closer to trusted doctors and advanced
              treatments, making quality care simple, reliable, and within reach.
            </p>

            {/* Accredited Partner Badge */}
            <div className="mt-5 inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 max-w-xs">
              <div className="w-7 h-7 rounded-lg bg-[#00838D]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#19B6B0]" />
              </div>
              <span className="text-xs font-semibold text-slate-200 leading-tight">
                NABH &amp; JCI Accredited Network Partner
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 2.5) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-white font-bold text-base mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About (Col 2.5) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-white font-bold text-base mb-4 tracking-tight">
              About
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13.5px]">
              {aboutLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Col 3.5) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-base mb-4 tracking-tight">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-[13px]">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#19B6B0] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  F-98, Abul Fazal Enclave, Okhla, New Delhi - 110025
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#19B6B0] shrink-0" />
                <a
                  href="tel:+18005550199"
                  className="font-bold text-white hover:text-[#19B6B0] transition-colors"
                >
                  +1 (800) 555-0199
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#19B6B0] shrink-0" />
                <a
                  href="mailto:contact@healthmavens.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  contact@healthmavens.com
                </a>
              </li>

              {/* Support Availability */}
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#19B6B0] shrink-0" />
                <span className="text-slate-300 font-medium">
                  Available 24/7 Global Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note Box */}
        <div className="bg-[#0B2544]/60 border border-white/10 rounded-xl p-4 sm:p-5 text-slate-400 text-[11px] sm:text-xs leading-relaxed">
          <p>
            <strong className="text-slate-200">Note:</strong> Health Mavens provides
            information for educational purposes only. It is not a substitute for
            professional medical advice, diagnosis, or treatment. Always consult a
            qualified healthcare provider regarding any medical condition or decision.
          </p>
        </div>
      </div>
    </footer>
  );
}
