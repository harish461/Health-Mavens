"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  HeartHandshake,
  Compass,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Globe2,
  Plane,
  FileCheck2,
  Sparkles,
  ChevronRight,
  Lock,
  Stethoscope,
  Smile,
  Clock,
  Coins,
  Hospital,
  UserCheck,
} from "lucide-react";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Patient Safety & Clinical Rigor",
      tagline: "Gold-Standard Accreditations Only",
      description:
        "We selectively affiliate exclusively with JCI (Joint Commission International, USA) and NABH gold-standard medical institutions across Delhi NCR, Mumbai, Bangalore, and Chennai.",
      metric: "Top 1%",
      metricLabel: "Super-Speciality Centres",
    },
    {
      icon: UserCheck,
      title: "Direct Access to Chief Surgeons",
      tagline: "Zero Intermediary Medical Filters",
      description:
        "Every patient case is evaluated directly by department chairpersons, Padmashree awardees, and senior consultants with 20+ years of clinical tenure.",
      metric: "2,000+",
      metricLabel: "Vetted Senior Specialists",
    },
    {
      icon: Coins,
      title: "Transparent & Direct Hospital Billing",
      tagline: "100% Commission-Free Transparency",
      description:
        "All payments are remitted directly to the hospital billing administration with itemized estimates. No hidden facilitator markups, surcharges, or inflated costs.",
      metric: "$0",
      metricLabel: "Facilitation Markup",
    },
    {
      icon: Plane,
      title: "Concierge Medical Travel Coordination",
      tagline: "End-to-End Diplomatic & Logistical Care",
      description:
        "From urgent 24-hour Medical Visa Invitation Letters and free airport chauffeur pick-up to dedicated in-hospital multilingual language interpreters.",
      metric: "24/7",
      metricLabel: "Concierge Assistance",
    },
  ];

  const milestones = [
    {
      number: "01",
      title: "Comprehensive Clinical Triage",
      desc: "Our senior medical desk conducts a meticulous review of MRI, CT, biopsy, and pathology scans.",
    },
    {
      number: "02",
      title: "Multi-Hospital Comparative Quotes",
      desc: "Patients receive 2 to 3 official treatment plans with transparent itemized quotes from competing accredited hospitals.",
    },
    {
      number: "03",
      title: "Visa & Priority Fast-Track Travel",
      desc: "Official government FRRO-compliant Medical Visa letters provided within 24 hours plus airport liaison.",
    },
    {
      number: "04",
      title: "In-Person Executive Bedside Support",
      desc: "A dedicated Health Mavens medical coordinator stays assigned to your bedside throughout hospital admission.",
    },
    {
      number: "05",
      title: "Post-Discharge Telemedicine Continuity",
      desc: "Comprehensive discharge dossiers, medicine shipment assistance, and video follow-ups with chief operating surgeons.",
    },
  ];

  const leadershipValues = [
    {
      title: "Clinical Integrity Over Commercial Interests",
      desc: "If a patient does not genuinely need surgery, our medical board actively recommends non-invasive therapies or conservative rehabilitation.",
    },
    {
      title: "Compassionate Human Empathy",
      desc: "Traveling abroad for complex surgical care can be daunting. We treat every foreign patient and attendant as our own family members.",
    },
    {
      title: "Strict Confidentiality & Privacy",
      desc: "Medical records are shielded by end-to-end HIPAA-aligned data encryption and strict non-disclosure compliance protocols.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700">
      <TopContactBar />
      <MainHeader />

      <main className="flex-1 overflow-x-clip">
        {/* ========================================================
            HERO SECTION: Sophisticated Editorial Split Architecture
            ======================================================== */}
        <section className="relative bg-gradient-to-b from-[#FAFBFD] via-[#F4F9F9] to-white pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-[#E8F1F2] overflow-hidden">
          {/* Ambient Glows & Background Shapes */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-teal-soft/80 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream/70 rounded-full blur-2xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6"
            >
              <Link href="/" className="hover:text-teal-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-teal-primary">About Us</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Mission Manifesto */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF8F7] border border-teal-primary/20 text-teal-primary text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-teal-primary" />
                  <span>Global Medical Value Travel Facilitator</span>
                </div>

                <h1 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-6">
                  Guiding Global Patients to{" "}
                  <span className="relative inline-block text-[#00838D]">
                    India’s Foremost Medical Masters
                    <span className="absolute left-0 right-0 -bottom-1 h-2.5 bg-[#FFF5E5] -z-10 rounded-sm" />
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                  At <strong>Health Mavens</strong>, we bridge international and domestic patients
                  with India’s premier JCI &amp; NABH-accredited hospital networks, pioneering
                  robotic surgical masters, and authentic Ayurvedic wellness retreats. We deliver
                  uncompromising clinical excellence, direct institutional billing, and round-the-clock
                  human hospitality.
                </p>

                {/* Quick Impact Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-200/80 mb-8 max-w-xl">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs">
                    <span className="block text-2xl font-extrabold text-navy">7,000+</span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Recovered Patients
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs">
                    <span className="block text-2xl font-extrabold text-[#00838D]">150+</span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Accredited Hospitals
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs col-span-2 sm:col-span-1">
                    <span className="block text-2xl font-extrabold text-navy">25+</span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Countries Served
                    </span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center gap-2.5 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] text-white font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-cta hover:shadow-cta-hover transition-all"
                  >
                    <span>Request Free Case Evaluation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:+18005550199"
                    className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-navy font-semibold text-sm sm:text-[15px] px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-all"
                  >
                    <Phone className="w-4 h-4 text-teal-primary" />
                    <span>Call +1 (800) 555-0199</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Creative Hospital & Doctor Montage */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                  {/* Primary Feature Image */}
                  <div className="relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/hospitals/medanta.jpg"
                      alt="Premier Quaternary Hospital Facility"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EAF8F7] text-teal-dark inline-block mb-1.5">
                        JCI &amp; NABH Gold Standards
                      </span>
                      <h3 className="text-base sm:text-lg font-bold leading-snug">
                        Multi-Super Speciality Quaternary Infrastructure
                      </h3>
                      <p className="text-xs text-slate-200 mt-0.5">
                        Modular robotic surgical suites &amp; executive patient wings
                      </p>
                    </div>
                  </div>

                  {/* Overlapping Floating Doctor Card */}
                  <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3.5 max-w-[270px]">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-teal-primary/30">
                      <Image
                        src="/images/doctors/dr-rajgopal.jpg"
                        alt="Padma Shri Awarded Orthopedic Surgeon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy leading-tight">
                        Dr. Ashok Rajgopal
                      </div>
                      <div className="text-[11px] text-teal-primary font-semibold mt-0.5">
                        35,000+ Surgeries
                      </div>
                      <div className="text-[10px] text-slate-500">Padma Shri Awardee</div>
                    </div>
                  </div>

                  {/* Overlapping Floating Safety Badge */}
                  <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy leading-none">
                        100% Direct Billing
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                        Zero Broker Markups
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: Our Core Pillars of Care (Different from Link)
            ======================================================== */}
        <section id="standards" className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-3">
                OUR OPERATIONAL STANDARDS
              </span>
              <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-4">
                Redefining the Medical Travel Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We eliminate the uncertainty, inflated costs, and logistical anxiety typically
                associated with cross-border healthcare navigation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-[#FAFBFD] hover:bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-teal-soft group-hover:bg-[#00838D] text-teal-primary group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-teal-primary mb-1">
                        {pillar.tagline}
                      </span>
                      <h3 className="text-lg font-bold text-navy leading-snug mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                      <span className="text-xl font-extrabold text-navy">{pillar.metric}</span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: Interactive Vision, Mission & Values Tabs
            ======================================================== */}
        <section id="vision" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Tab Selector & Headings */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00838D] block mb-2">
                  OUR PURPOSE &amp; CREED
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-5">
                  Built by Medical Advocates, Driven by Patient Welfare
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-7">
                  Health Mavens was founded on a simple premise: patients facing high-stakes medical
                  decisions deserve unbiased doctor choices, absolute price clarity, and dignified
                  bedside accompaniment.
                </p>

                {/* Tab Pill Buttons */}
                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("vision")}
                    className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeTab === "vision"
                        ? "bg-white border-teal-primary/40 shadow-sm text-navy"
                        : "bg-transparent border-transparent text-slate-500 hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Compass className={`w-5 h-5 ${activeTab === "vision" ? "text-teal-primary" : "text-slate-400"}`} />
                      <span className="font-bold text-sm sm:text-base">Our Vision</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${activeTab === "vision" ? "text-teal-primary" : "text-slate-300"}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("mission")}
                    className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeTab === "mission"
                        ? "bg-white border-teal-primary/40 shadow-sm text-navy"
                        : "bg-transparent border-transparent text-slate-500 hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Award className={`w-5 h-5 ${activeTab === "mission" ? "text-teal-primary" : "text-slate-400"}`} />
                      <span className="font-bold text-sm sm:text-base">Our Mission</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${activeTab === "mission" ? "text-teal-primary" : "text-slate-300"}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("values")}
                    className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      activeTab === "values"
                        ? "bg-white border-teal-primary/40 shadow-sm text-navy"
                        : "bg-transparent border-transparent text-slate-500 hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <HeartHandshake className={`w-5 h-5 ${activeTab === "values" ? "text-teal-primary" : "text-slate-400"}`} />
                      <span className="font-bold text-sm sm:text-base">Core Ethical Values</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${activeTab === "values" ? "text-teal-primary" : "text-slate-300"}`} />
                  </button>
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-card relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-teal-soft/60 rounded-full blur-2xl pointer-events-none" />

                  {activeTab === "vision" && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-soft text-teal-dark border border-teal-primary/20">
                        Global Healthcare Horizon
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy leading-snug">
                        Democratizing World-Class Surgical &amp; Ayurvedic Healing Globally
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        To be the world’s most trusted medical value travel partner, empowering
                        patients from Africa, the Middle East, Central Asia, and the West to access
                        life-changing quaternary surgeries and holistic therapies without crippling
                        medical debt or confusing middlemen.
                      </p>
                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Global equality in clinical care</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Pioneering robotic medical tourism</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Zero-brokerage transparency</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Long-term post-op continuity</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "mission" && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-soft text-teal-dark border border-teal-primary/20">
                        Our Daily Commitment
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy leading-snug">
                        Every Patient Guided as Family, Every Procedure Transparently Handled
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                        Our mission is to safeguard patient interests through meticulous medical
                        triage, connecting them with verified top 1% surgeons, negotiating honest
                        hospital package costs, and handling every logistical detail—from visa issuance
                        to recovery suites—with empathy and professionalism.
                      </p>
                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Direct hospital estimates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Dedicated personal care managers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>24-Hour urgent visa facilitation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0" />
                          <span>Free airport chauffeur service</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "values" && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-soft text-teal-dark border border-teal-primary/20">
                        Ethical Foundations
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy leading-snug">
                        Upholding Rigorous Bioethics &amp; Transparent Standards
                      </h3>
                      <div className="space-y-3 pt-2">
                        {leadershipValues.map((v, i) => (
                          <div key={i} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70">
                            <h4 className="text-sm font-bold text-navy mb-1">{v.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: The 5-Step Patient Journey (Roadmap)
            ======================================================== */}
        <section id="journey" className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-3">
                HOW WE WORK
              </span>
              <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-4">
                Your Seamless 5-Stage Healthcare Journey
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We handle the complex clinical and international logistics so you and your loved ones
                can focus purely on healing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-teal-primary/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#00838D]/30 block mb-3 font-mono">
                      {m.number}
                    </span>
                    <h3 className="text-base font-bold text-navy leading-snug mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-teal-primary flex items-center gap-1">
                    <span>Stage {idx + 1}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5: Global Offices & Network Presence
            ======================================================== */}
        <section id="network" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00838D] block mb-2">
                  OUR LOCATIONS &amp; HOSPITAL NETWORK
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-5">
                  Centrally Headquartered in India’s Premier Medical Hub
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Our operational headquarters in New Delhi is strategically positioned adjacent
                  to India&apos;s apex healthcare corridors, including Fortis, Medanta, Max Super
                  Speciality, Apollo, and Artemis Hospitals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                    <Building2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">Corporate Liaison Office</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        F-98, Abul Fazal Enclave, Okhla, New Delhi - 110025, India
                      </p>
                      <span className="text-[11px] font-semibold text-teal-primary mt-1 inline-block">
                        Direct airport transfer &amp; concierge desk within 25 mins of IGI Airport
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                    <Globe2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-navy">International Patient Corridors</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Active patient liaison support across UAE, Oman, Saudi Arabia, Kenya, Nigeria,
                        Uzbekistan, Bangladesh, the UK, and North America.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24/7 Multi-Lingual Helpdesk (Arabic, French, Swahili, Russian, English)</span>
                </div>
              </div>

              {/* Right: Hospital Partners Visual Grid */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <Image
                      src="/images/hospitals/artemis.jpg"
                      alt="Artemis Hospital"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        Artemis Health Institute
                      </span>
                    </div>
                  </div>

                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <Image
                      src="/images/hospitals/fortis.jpg"
                      alt="Fortis Memorial Research Institute"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        Fortis Memorial FMRI
                      </span>
                    </div>
                  </div>

                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <Image
                      src="/images/hospitals/max.jpg"
                      alt="Max Super Speciality Hospital"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        Max Super Speciality
                      </span>
                    </div>
                  </div>

                  <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <Image
                      src="/images/hospitals/medanta.jpg"
                      alt="Medanta The Medicity"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        Medanta – The Medicity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 6: Interactive Free Case Evaluation Banner Form
            ======================================================== */}
        <section id="quote-form" className="py-16 sm:py-24 bg-[#0B2345] text-white relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00838D]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: CTA Pitch */}
              <div className="lg:col-span-6">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#19B6B0] border border-white/15 mb-4">
                  FREE CLINICAL ADVISORY
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold tracking-tight leading-snug sm:leading-[1.25] mb-4 text-white">
                  Ready to Plan Your Treatment Journey with Confidence?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  Send us your medical query or diagnostic scans. Our chief medical liaison team
                  will review your condition, coordinate second opinions with accredited specialists,
                  and deliver an itemized cost estimate within 2 to 4 hours.
                </p>

                <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#19B6B0] shrink-0" />
                    <span>Free medical second opinion from verified department heads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#19B6B0] shrink-0" />
                    <span>Itemized estimates with zero hidden agency markups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#19B6B0] shrink-0" />
                    <span>Direct Medical Visa assistance and complimentary airport transfers</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div>
                    <span className="block text-xs text-slate-400">Direct Emergency Support</span>
                    <a
                      href="tel:+18005550199"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#19B6B0] transition-colors"
                    >
                      +1 (800) 555-0199
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Official Case Desk</span>
                    <a
                      href="mailto:contact@healthmavens.com"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#19B6B0] transition-colors"
                    >
                      contact@healthmavens.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Inquiry Form Card */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-navy mb-1">
                    Request Free Treatment Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    100% Confidential. Directly reviewed by clinical coordinators.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Thank you! Our medical coordinator will reach out to you within 2 hours.");
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Patient Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Samuel Adebayo"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Country of Residence
                        </label>
                        <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-medium text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>United Arab Emirates</option>
                          <option>Saudi Arabia</option>
                          <option>Oman</option>
                          <option>Qatar</option>
                          <option>Kuwait</option>
                          <option>Kenya</option>
                          <option>Nigeria</option>
                          <option>Uzbekistan</option>
                          <option>Bangladesh</option>
                          <option>India</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Medical Condition or Treatment Required *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Describe current symptoms, diagnosed condition (e.g., knee replacement, cardiac bypass, spine decompression, cancer second opinion)..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] text-white font-bold text-xs sm:text-sm rounded-xl shadow-cta transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get Free Hospital Estimates</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Strict HIPAA-level privacy. We never share patient records.</span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}

