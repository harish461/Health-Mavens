"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Menu,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Stethoscope,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Search,
  Activity,
  HeartHandshake,
  Award,
} from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { specialtiesMenuData, SpecialtyItem } from "./specialtiesData";

const baseNavLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/#treatments", isDropdown: true },
  { label: "Doctors", href: "/doctors" },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "About Us", href: "/about-us" },
];

export default function MainHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>("orthopedic-surgery");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = baseNavLinks.map((item) => ({
    ...item,
    active:
      item.href === pathname ||
      (pathname === "/" && item.label === "Home"),
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target)
      ) {
        setTreatmentsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setTreatmentsDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setTreatmentsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setTreatmentsDropdownOpen(false);
    }, 220);
  };

  // Filter specialties based on search query
  const filteredSpecialties = specialtiesMenuData.filter((spec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      spec.name.toLowerCase().includes(q) ||
      spec.description.toLowerCase().includes(q) ||
      spec.procedures.some((p) => p.name.toLowerCase().includes(q))
    );
  });

  const currentSpecialty =
    filteredSpecialties.find((s) => s.id === activeSpecialtyId) ||
    filteredSpecialties[0] ||
    specialtiesMenuData[0];

  return (
    <>
      <header
        className={`w-full bg-white transition-all duration-300 z-40 sticky top-0 relative ${
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
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              aria-label="Primary Navigation"
            >
              {navLinks.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div
                      key={item.label}
                      ref={dropdownRef}
                      className="relative py-2"
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      <button
                        type="button"
                        onClick={() => setTreatmentsDropdownOpen(!treatmentsDropdownOpen)}
                        aria-expanded={treatmentsDropdownOpen}
                        aria-haspopup="true"
                        className={`text-[15px] xl:text-base font-medium transition-colors inline-flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                          treatmentsDropdownOpen || item.active
                            ? "text-teal-primary font-semibold"
                            : "text-[#2D3748] hover:text-teal-primary"
                        }`}
                      >
                        <span>{item.label}</span>
                        {treatmentsDropdownOpen ? (
                          <ChevronUp className="w-4 h-4 text-teal-primary transition-transform" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-teal-primary transition-transform" />
                        )}
                      </button>

                      {(treatmentsDropdownOpen || item.active) && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-teal-primary rounded-full pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                }

                return (
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
                );
              })}
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

        {/* HERO BIG MEGA DROPDOWN (Positioned flush directly beneath the header) */}
        {treatmentsDropdownOpen && (
          <div
            ref={megaMenuRef}
            className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[96vw] max-w-[1180px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <div className="w-full bg-white rounded-3xl shadow-[0_25px_70px_rgba(11,35,69,0.25)] border border-slate-200/90 overflow-hidden flex flex-col">
              {/* Top Mega Menu Header Banner */}
              <div className="px-6 py-3.5 bg-gradient-to-r from-[#FAFBFD] via-[#F4F9F9] to-white border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#19B6B0] animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-navy">
                    MEDICAL SPECIALTIES &amp; ACCREDITED PROCEDURES
                  </span>
                </div>

                {/* Instant Search Bar */}
                <div className="relative w-64 xl:w-72">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search 150+ procedures..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-navy placeholder:text-slate-400 focus:outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="hidden xl:flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="text-navy font-bold">{specialtiesMenuData.length} Specialties</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#00838D] font-bold">150+ Verified Surgeries</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">JCI &amp; NABH Hospitals</span>
                </div>
              </div>

              {/* 2-Column Mega Body */}
              <div className="grid grid-cols-12 min-h-[440px] max-h-[500px]">
                {/* Left Column (5 of 12 cols): Specialties List (Exact styling from reference image) */}
                <div className="col-span-5 border-r border-slate-100/90 flex flex-col bg-white">
                  <div className="px-5 py-2.5 bg-[#FAFBFD] border-b border-slate-100 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest">
                    <span className="text-[#00838D]">SPECIALTIES</span>
                    <span className="text-slate-400">
                      {filteredSpecialties.length} SPECIALTIES
                    </span>
                  </div>

                  <div className="overflow-y-auto max-h-[440px] py-1.5 custom-scrollbar">
                    {filteredSpecialties.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">
                        No specialties found matching &quot;{searchQuery}&quot;
                      </div>
                    ) : (
                      filteredSpecialties.map((spec) => {
                        const isSelected = currentSpecialty.id === spec.id;
                        return (
                          <div
                            key={spec.id}
                            onMouseEnter={() => setActiveSpecialtyId(spec.id)}
                            onClick={() => setActiveSpecialtyId(spec.id)}
                            className={`px-5 py-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-[#EAF8F7] text-[#00838D] font-bold"
                                : "hover:bg-slate-50 text-navy font-semibold text-[13.5px]"
                            }`}
                          >
                            {/* Left: Green Dot + Name */}
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                                  isSelected ? "bg-[#00838D]" : "bg-[#59C7B6]"
                                }`}
                              />
                              <span className="text-[13.5px] truncate">
                                {spec.name}
                              </span>
                            </div>

                            {/* Right: Active Pill or Arrow */}
                            {isSelected ? (
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00838D] inline-flex items-center gap-0.5 shrink-0">
                                <span>VIEW PROCEDURES</span>
                                <ChevronRight className="w-3 h-3" />
                              </span>
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Right Column (7 of 12 cols): Big Interactive Procedures Showcase */}
                <div className="col-span-7 bg-[#FAFBFD] p-6 flex flex-col justify-between overflow-y-auto max-h-[500px]">
                  <div>
                    {/* Header for the selected specialty */}
                    <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/80 mb-5">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#EAF8F7] text-[#00838D] mb-1.5">
                          <Sparkles className="w-3 h-3 text-[#00838D]" />
                          <span>Specialty Procedures</span>
                        </div>
                        <h3 className="text-xl font-bold text-navy leading-snug">
                          {currentSpecialty.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {currentSpecialty.description}
                        </p>
                      </div>

                      <Link
                        href={`/doctors?specialty=${encodeURIComponent(currentSpecialty.name)}`}
                        onClick={() => setTreatmentsDropdownOpen(false)}
                        className="px-3.5 py-1.5 rounded-xl bg-teal-primary hover:bg-teal-dark text-white text-xs font-bold shrink-0 transition-colors shadow-sm inline-flex items-center gap-1"
                      >
                        <span>Find Doctors</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Procedure Links Grid */}
                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {currentSpecialty.procedures.map((proc, idx) => (
                        <Link
                          key={idx}
                          href={proc.href}
                          onClick={() => setTreatmentsDropdownOpen(false)}
                          className="group p-2.5 rounded-xl bg-white border border-slate-200/70 hover:border-teal-primary/50 hover:bg-teal-50/20 hover:shadow-xs transition-all flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#19B6B0] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-semibold text-navy group-hover:text-teal-primary transition-colors leading-snug line-clamp-2">
                            {proc.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Quick Consultation & Assurance Box */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0B2345] to-[#123B2E] text-white flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-[#19B6B0]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">
                          Need a Custom Treatment Cost Quote?
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Free review by accredited hospital department directors
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="https://wa.me/918766320470"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shrink-0 transition-colors inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="#quote-form"
                        onClick={() => setTreatmentsDropdownOpen(false)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#19B6B0] hover:bg-teal-aqua text-navy text-xs font-bold shrink-0 transition-colors"
                      >
                        Get Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
