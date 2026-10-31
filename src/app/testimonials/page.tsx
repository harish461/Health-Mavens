"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import PatientStoryModal from "@/components/testimonials/PatientStoryModal";
import {
  patientStoriesData,
  specialtiesFilterList,
  countriesFilterList,
  PatientStory,
} from "@/components/testimonials/testimonialsData";
import {
  Star,
  ShieldCheck,
  Building2,
  ChevronRight,
  Search,
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2,
  Phone,
  Play,
  Heart,
  Globe2,
  FileText,
  UserCheck,
  Clock,
  Sparkles,
  Lock,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

export default function TestimonialsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStory, setActiveStory] = useState<PatientStory | null>(null);
  const [inquiryTarget, setInquiryTarget] = useState<string>("");

  // Video spotlight patient (featured #1)
  const spotlightPatient = patientStoriesData[0];

  // Filtered stories
  const filteredStories = useMemo(() => {
    return patientStoriesData.filter((item) => {
      const matchSpecialty =
        selectedSpecialty === "All Specialties" || item.specialty === selectedSpecialty;
      const matchCountry =
        selectedCountry === "All Countries" || item.country === selectedCountry;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.patientName.toLowerCase().includes(q) ||
        item.headline.toLowerCase().includes(q) ||
        item.procedure.toLowerCase().includes(q) ||
        item.hospital.toLowerCase().includes(q) ||
        item.doctor.toLowerCase().includes(q) ||
        item.condition.toLowerCase().includes(q);

      return matchSpecialty && matchCountry && matchSearch;
    });
  }, [selectedSpecialty, selectedCountry, searchQuery]);

  const handleEnquireStory = (story: PatientStory) => {
    setInquiryTarget(`${story.doctor} (${story.procedure})`);
    document.getElementById("consult-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700">
      <TopContactBar />
      <MainHeader />

      <main className="flex-1 overflow-x-clip bg-[#FAFBFD]">
        {/* ========================================================
            HERO: Cinematic Header & Live Metric Indicators
            ======================================================== */}
        <section className="relative bg-gradient-to-b from-[#0B2345] via-[#0E2E59] to-[#0B2345] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6"
            >
              <Link href="/" className="hover:text-[#19B6B0] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[#19B6B0]">Patient Testimonials</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Title & Trust Badges */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#19B6B0] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                  <Heart className="w-3.5 h-3.5 fill-[#19B6B0]" />
                  <span>Real International Patient Journeys</span>
                </div>

                <h1 className="text-[20px] sm:text-[28px] font-bold tracking-tight leading-snug sm:leading-[1.25] mb-5 text-white">
                  Proof of Care,{" "}
                  <span className="text-[#19B6B0] italic font-serif">Stories of Healing</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-8">
                  Over 7,000 patients from 25+ countries have entrusted their surgical and medical
                  journeys to Health Mavens. Read verified, clinical-audit backed experiences across
                  robotic orthopedics, cardiac surgery, neuro-spine, and oncology.
                </p>

                {/* Live Stats Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-4 border-t border-white/10">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="block text-xl sm:text-2xl font-black text-white">99.2%</span>
                    <span className="text-[11px] text-slate-300 font-medium">Patient Satisfaction</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="block text-xl sm:text-2xl font-black text-[#19B6B0]">7,000+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Global Recoveries</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="block text-xl sm:text-2xl font-black text-white">25+</span>
                    <span className="text-[11px] text-slate-300 font-medium">Countries Trusted</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Spotlight Video Card */}
              <div className="lg:col-span-5">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-[#19B6B0] text-navy">
                      Featured Patient Spotlight
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Spotlight Media Box */}
                  <div
                    onClick={() => setActiveStory(spotlightPatient)}
                    className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#103E54] via-[#1A526E] to-[#256D93] cursor-pointer flex items-center justify-center border border-white/10"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <div className="w-14 h-14 rounded-full bg-white text-navy flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-navy text-navy translate-x-0.5" />
                    </div>
                    <span className="absolute bottom-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white">
                      {spotlightPatient.videoDuration} Video Case
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {spotlightPatient.headline}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
                      {spotlightPatient.quote}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="text-xs">
                        <strong className="text-white">{spotlightPatient.patientName}</strong>{" "}
                        <span className="text-slate-300">({spotlightPatient.country})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveStory(spotlightPatient)}
                        className="text-xs font-bold text-[#19B6B0] hover:underline cursor-pointer"
                      >
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FILTER CONTROLS BAR: Specialty, Country & Live Keyword
            ======================================================== */}
        <section className="sticky top-16 sm:top-20 z-30 bg-white border-b border-slate-200/90 shadow-2xs py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Specialty Selector */}
              <div className="md:col-span-4">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 cursor-pointer"
                >
                  {specialtiesFilterList.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country Selector */}
              <div className="md:col-span-3">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 cursor-pointer"
                >
                  {countriesFilterList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Query Input */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by procedure, hospital, surgeon, or patient..."
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STORIES GRID: Creative Editorial Patient Cards
            ======================================================== */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-3 border-b border-slate-200">
              <div className="text-sm text-slate-600">
                Displaying{" "}
                <strong className="text-navy font-bold">{filteredStories.length}</strong> verified
                patient success stories
              </div>

              {(selectedSpecialty !== "All Specialties" ||
                selectedCountry !== "All Countries" ||
                searchQuery.trim()) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSpecialty("All Specialties");
                    setSelectedCountry("All Countries");
                    setSearchQuery("");
                  }}
                  className="text-xs font-semibold text-teal-primary hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredStories.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-lg mx-auto">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-navy mb-1">No matching stories found</h3>
                <p className="text-xs text-slate-500 mb-5">
                  Try adjusting your specialty, country, or search keywords.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSpecialty("All Specialties");
                    setSelectedCountry("All Countries");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-teal-primary text-white text-xs font-semibold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredStories.map((story) => (
                  <article
                    key={story.id}
                    className="group bg-white rounded-3xl border border-slate-200/90 hover:border-teal-primary/40 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Country & Verification */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FAFBFD] text-navy border border-slate-200">
                          <span>{story.countryFlag}</span>
                          <span>{story.country}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Verified Patient</span>
                        </span>
                      </div>

                      {/* Procedure Tag */}
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-primary mb-2">
                        {story.specialty}
                      </span>

                      {/* Headline */}
                      <h3
                        onClick={() => setActiveStory(story)}
                        className="text-base sm:text-[17px] font-bold text-navy leading-snug mb-3 group-hover:text-teal-primary transition-colors cursor-pointer"
                      >
                        {story.headline}
                      </h3>

                      {/* Quote Box */}
                      <p className="text-xs sm:text-[13px] text-slate-600 italic font-serif leading-relaxed mb-4 line-clamp-3">
                        &ldquo;{story.quote}&rdquo;
                      </p>

                      {/* Clinical Metadata */}
                      <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Surgeon:</span>
                          <strong className="text-navy truncate max-w-[170px]">{story.doctor}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Hospital:</span>
                          <strong className="text-slate-700 truncate max-w-[170px]">{story.hospital}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Outcome:</span>
                          <strong className="text-emerald-700 font-bold">{story.outcome}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="text-xs">
                        <span className="text-slate-400 block text-[10.5px]">Patient</span>
                        <strong className="text-navy">{story.patientName}</strong>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveStory(story)}
                          className="px-3.5 py-1.5 rounded-lg bg-teal-soft/70 hover:bg-teal-soft text-teal-primary text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Read Case
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEnquireStory(story)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-[#00838D] hover:text-white text-navy transition-colors cursor-pointer"
                          title="Consult this surgeon"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            CLINICAL TRUST AUDIT: Why Patients Trust Health Mavens
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-3">
                INTEGRITY STANDARDS
              </span>
              <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-3">
                How Health Mavens Protects International Patients
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every testimonial represents an independently vetted surgical file with direct
                institutional billing and clinical documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <span className="text-2xl font-black text-teal-primary mb-3 block">01</span>
                <h4 className="text-base font-bold text-navy mb-2">Zero Broker Markups</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Hospital estimates and invoices are issued on official hospital letterheads with
                  direct cashier billing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <span className="text-2xl font-black text-teal-primary mb-3 block">02</span>
                <h4 className="text-base font-bold text-navy mb-2">Top 1% Senior Surgeons</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Patients are operated exclusively by department directors and senior consultants
                  with 20+ years of high-volume tenure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <span className="text-2xl font-black text-teal-primary mb-3 block">03</span>
                <h4 className="text-base font-bold text-navy mb-2">24/7 Bedside Concierge</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Dedicated in-hospital patient navigators assist with Arabic, French, Swahili, and
                  Russian translation round the clock.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <span className="text-2xl font-black text-teal-primary mb-3 block">04</span>
                <h4 className="text-base font-bold text-navy mb-2">Lifelong Telemedicine Followup</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Structured post-discharge video consults with your operating surgeon and medicine
                  delivery support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            INQUIRY SECTION: Free Case Evaluation Form
            ======================================================== */}
        <section
          id="consult-section"
          className="scroll-mt-24 py-16 sm:py-24 bg-gradient-to-br from-[#0B2345] via-[#0E2E59] to-[#071830] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#19B6B0] border border-white/15 mb-4">
                  START YOUR HEALING STORY
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold tracking-tight leading-snug sm:leading-[1.25] mb-4 text-white">
                  Get a Free Treatment Opinion from Top Indian Surgeons
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7">
                  Share your recent MRI, CT scan, or doctor prescription. Our medical advisory board
                  will prepare comparative treatment plans from accredited hospitals within 2 to 4
                  hours.
                </p>

                <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#19B6B0]" />
                    <span>Free second opinion from hospital department directors</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#19B6B0]" />
                    <span>Itemized hospital package quotes with zero hidden markups</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#19B6B0]" />
                    <span>24-Hour urgent medical visa invitation letters</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-[#19B6B0]" />
                    <div>
                      <span className="block text-[11px] text-slate-400">Call Us 24/7</span>
                      <a href="tel:+18005550199" className="text-sm font-bold text-white">
                        +1 (800) 555-0199
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form Card */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-1">
                    Request Free Treatment Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    Fast-track response within 5 to 10 minutes. 100% confidential.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Thank you! Your case inquiry has been dispatched to our chief medical coordinators."
                      );
                    }}
                    className="space-y-3.5"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johnathan Smith"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Medical Query or Procedure Needed *
                      </label>
                      <textarea
                        rows={3}
                        required
                        defaultValue={
                          inquiryTarget
                            ? `Interested in consultation for: ${inquiryTarget}`
                            : ""
                        }
                        placeholder="Describe current symptoms, MRI/CT diagnosis, or requested doctor..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-cta transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get Free Hospital Quotes</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Encrypted medical transmission. Direct hospital billing.</span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />

      {/* Case Details Modal */}
      <PatientStoryModal
        story={activeStory}
        onClose={() => setActiveStory(null)}
        onEnquire={handleEnquireStory}
      />
    </div>
  );
}

