"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Leaf,
  ShieldCheck,
  Award,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface AyurvedaHeroSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  onExplore: () => void;
}

const popularSearches = ["Panchakarma", "Back Pain", "Insomnia", "Weight Loss", "PCOS"];

export default function AyurvedaHeroSection({
  searchQuery,
  setSearchQuery,
  onExplore,
}: AyurvedaHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBF8F2]">
      {/* Decorative botanical rings & glows */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#E8DCC2]/70 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full border border-dashed border-[#D9C9A3]/60 pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-14 pb-14 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left: Copy, search & trust row */}
        <div className="lg:col-span-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-6"
          >
            <Link href="/" className="hover:text-teal-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-[#174A3A] font-semibold">Ayurveda</span>
          </nav>

          <div className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-[#E8DCC2] shadow-sm mb-5">
            <span className="w-6 h-6 rounded-full bg-[#174A3A] flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5 text-[#E9D8A6]" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#8A6A1F]">
              Ancient Wisdom · Modern Care
            </span>
          </div>

          <h1 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-5">
            Heal the Root,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-serif text-[#174A3A]">
                Not Just the Symptom
              </span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#E9D8A6]/70 -z-0 rounded-sm" />
            </span>
          </h1>

          <p className="text-[14px] sm:text-[17px] text-slate-600 leading-relaxed max-w-xl mb-8">
            Authentic Ayurvedic therapies in India, personalized to your unique{" "}
            <em className="not-italic font-semibold text-[#174A3A]">Prakriti</em> by senior BAMS /
            MD Vaidyas at accredited wellness retreats — from Panchakarma detox to chronic pain
            recovery.
          </p>

          {/* Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onExplore();
            }}
            className="flex items-center gap-2 bg-white rounded-2xl p-2 pl-4 shadow-[0_12px_40px_-12px_rgba(23,74,58,0.25)] border border-[#EFE7D8] max-w-xl"
          >
            <Search className="w-5 h-5 text-[#174A3A]/60 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a condition or therapy…"
              aria-label="Search Ayurveda treatments"
              className="flex-1 min-w-0 bg-transparent text-sm text-navy placeholder:text-slate-400 font-medium focus:outline-none py-2"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 bg-[#174A3A] hover:bg-[#123B2E] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-xs font-semibold text-slate-500">Popular:</span>
            {popularSearches.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSearchQuery(tag);
                  onExplore();
                }}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#174A3A] bg-[#EEF5F0] hover:bg-[#174A3A] hover:text-white border border-[#D6E7DC] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-[#E8DCC2]/80 max-w-xl">
            {[
              { icon: Leaf, value: "20+", label: "Classical Therapies" },
              { icon: Users, value: "BAMS/MD", label: "Senior Vaidyas" },
              { icon: Award, value: "NABH", label: "Accredited Retreats" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="w-10 h-10 rounded-xl bg-white border border-[#E8DCC2] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#B08A2E]" />
                </span>
                <div>
                  <div className="text-sm sm:text-base font-bold text-navy leading-tight">{value}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image collage with floating cards */}
        <div className="lg:col-span-6">
          <div className="relative h-[340px] sm:h-[480px] lg:h-[540px]">
            <div className="absolute left-0 top-8 w-[60%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl ring-8 ring-white">
              <Image
                src="/images/ayurveda/rejuvenation-therapy-in-ayurveda.png"
                alt="Ayurvedic rejuvenation therapy"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-0 w-[36%] h-[44%] rounded-[28px] overflow-hidden shadow-xl ring-8 ring-white">
              <Image
                src="/images/ayurveda/ayurvedic-treatment-for-stress-relief.png"
                alt="Shirodhara for stress relief"
                fill
                sizes="(max-width: 1024px) 36vw, 18vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[36%] h-[48%] rounded-[28px] overflow-hidden shadow-xl ring-8 ring-white">
              <Image
                src="/images/ayurveda/detoxification-of-the-body-and-the-mind.png"
                alt="Panchakarma detoxification"
                fill
                sizes="(max-width: 1024px) 36vw, 18vw"
                className="object-cover"
              />
            </div>

            {/* Floating badge: Vaidyas */}
            <div className="absolute left-[44%] top-0 sm:top-2 -translate-x-1/2 bg-white rounded-full shadow-lg border border-[#EFE7D8] pl-1.5 pr-4 py-1.5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-navy whitespace-nowrap">
                Vaidya Supervised
              </span>
            </div>

            {/* Floating program card */}
            <div className="absolute left-3 sm:left-6 -bottom-4 sm:bottom-2 bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-[#EFE7D8] p-3.5 sm:p-4 flex items-center gap-3 max-w-[250px]">
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#174A3A] to-[#2F7A5E] flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-[#E9D8A6]" />
              </span>
              <div>
                <div className="text-[13px] sm:text-sm font-bold text-navy leading-tight">
                  21-Day Panchakarma
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Complete mind–body detox &amp; reset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
