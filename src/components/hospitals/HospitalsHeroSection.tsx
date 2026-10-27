"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  BriefcaseMedical,
  MapPin,
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

interface HospitalsHeroSectionProps {
  specialty: string;
  setSpecialty: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  hospitalsCount: number;
  onFilterSubmit?: () => void;
}

const specialtiesList = [
  "Orthopedic Surgery",
  "Cardiology & Heart Surgery",
  "Neurology & Spine Surgery",
  "Oncology & Cancer Care",
  "Organ Transplant Surgery",
  "Gastroenterology & GI Surgery",
  "Urology & Nephrology",
  "Cosmetic & Plastic Surgery",
  "Pediatric Surgery",
  "Robotic Knee & Hip Surgery",
];

const citiesList = [
  "All India",
  "New Delhi",
  "Gurgaon / NCR",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
];

export default function HospitalsHeroSection({
  specialty,
  setSpecialty,
  city,
  setCity,
  searchQuery,
  setSearchQuery,
  hospitalsCount,
  onFilterSubmit,
}: HospitalsHeroSectionProps) {
  return (
    <section className="w-full bg-[#FAFBFD] pt-8 sm:pt-11 pb-10 sm:pb-14 border-b border-[#EDF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation matching screenshot */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-5 font-medium"
        >
          <Link href="/" className="hover:text-teal-primary transition-colors">
            Home
          </Link>
          <span className="text-slate-300">›</span>
          <span className="text-slate-500">Hospitals</span>
          <span className="text-slate-300">›</span>
          <span className="text-[#00838D] font-semibold">{specialty}</span>
        </nav>

        {/* Badge matching screenshot */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-4 select-none shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#A16207]" />
          <span>Accredited Centers • JCI &amp; NABH Certified</span>
        </div>

        {/* Main Title matching screenshot */}
        <h1 className="text-[20px] sm:text-4xl lg:text-[44px] font-medium text-navy tracking-tight leading-snug sm:leading-[1.15] mb-3">
          Best {specialty} Hospitals in India
        </h1>

        {/* Subtitle & Verified Badge Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <p className="text-slate-body text-[14px] sm:text-base leading-relaxed max-w-2xl">
            Connect with world-class healthcare centers providing advanced diagnostics, robotic joint
            replacements, and comprehensive orthopedic therapeutics.
          </p>

          {/* Right Green Dot Pill */}
          <div className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-full text-xs font-semibold text-slate-700 shadow-2xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#00838D] font-bold">{hospitalsCount} Verified Top Hospitals Available</span>
          </div>
        </div>

        {/* Filter Bar Card matching attached screenshot */}
        <div className="bg-white border border-[#E5EDF4] rounded-2xl sm:rounded-[22px] p-5 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Field 1: Specialty */}
            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-[#00838D] flex items-center gap-1.5 mb-1.5">
                <BriefcaseMedical className="w-3.5 h-3.5 text-[#00838D]" />
                <span>Specialty</span>
              </label>
              <div className="relative">
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full pl-3.5 pr-8 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all appearance-none cursor-pointer"
                >
                  {specialtiesList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Field 2: City */}
            <div className="md:col-span-3">
              <label className="text-xs font-semibold text-[#00838D] flex items-center gap-1.5 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00838D]" />
                <span>City</span>
              </label>
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full pl-3.5 pr-8 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all appearance-none cursor-pointer"
                >
                  {citiesList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Field 3: Hospital Name / Keyword */}
            <div className="md:col-span-4">
              <label className="text-xs font-semibold text-[#00838D] flex items-center gap-1.5 mb-1.5">
                <Search className="w-3.5 h-3.5 text-[#00838D]" />
                <span>Hospital Name / Keyword</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hospital by name or facility..."
                  className="w-full px-3.5 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-medium text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all"
                />
              </div>
            </div>

            {/* Field 4: Filter Button */}
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={onFilterSubmit}
                className="w-full py-3 px-4 bg-[#007A87] hover:bg-[#006A76] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-cta transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="whitespace-nowrap">Filter Hospitals</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
