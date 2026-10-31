import React from "react";
import Image from "next/image";
import TrustBadge from "./TrustBadge";
import BenefitGrid from "./BenefitGrid";
import SocialProof from "./SocialProof";
import ConsultationForm from "./ConsultationForm";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F3F9F9] via-[#F8FCFC] to-[#FFFFFF] pt-6 sm:pt-10 lg:pt-12 pb-14 sm:pb-18 lg:pb-24">
      {/* Creative Multi-Layered Healthcare Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Layer 1: Bespoke Healthcare Silk Wave & Horizon Art */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-creative.jpg"
            alt="Healthcare background atmosphere"
            fill
            priority
            className="object-cover object-right-top opacity-85"
          />
        </div>

        {/* Layer 2: Editorial Light Veil for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 lg:from-white/95 lg:via-white/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F9F9]/60 via-transparent to-white" />

        {/* Layer 3: Warm Ambient Sunlight Mesh (Top Left) */}
        <div className="absolute -top-24 -left-16 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFF5E5]/80 via-[#FEF3C7]/40 to-transparent blur-3xl" />

        {/* Layer 4: Calming Teal & Mint Wellness Pool (Center & Right) */}
        <div className="absolute top-1/4 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#E6F8F5]/60 via-[#19B6B0]/10 to-transparent blur-3xl" />

        {/* Layer 5: Precision Medical Dot Grid (Subtle Human Craft Touch) */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0B2345 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
          }}
        />

        {/* Layer 6: Subtle Floating Care Halo Rings */}
        <svg
          className="absolute -top-12 right-1/4 w-[420px] h-[420px] text-teal-primary/5 stroke-current hidden lg:block"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="180" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="130" strokeWidth="1" />
          <circle cx="200" cy="200" r="80" strokeWidth="1" strokeDasharray="2 6" />
        </svg>

        {/* Layer 7: Minimalist Decorative Medical Cross Accents */}
        <div className="absolute top-28 left-[45%] text-[#00838D]/15 font-light text-2xl select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-20 left-[8%] text-[#C59B27]/25 font-light text-xl select-none hidden md:block">
          +
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Content & Benefits (58% ~ col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            {/* Trust Badge */}
            <TrustBadge />

            {/* Main Headline */}
            <h1 className="text-[20px] sm:text-[28px] font-bold text-navy leading-snug sm:leading-[1.25] tracking-tight">
              Leading Healthcare <br />
              <span className="relative inline-block text-teal-primary mt-1">
                Consultant in India
                {/* Custom Teal Underline Accent */}
                <span
                  className="absolute -bottom-1.5 left-0 w-full h-[3.5px] sm:h-[4px] bg-[#19B6B0] rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-[14.5px] sm:text-lg md:text-[20px] font-semibold text-[#2D5A72] tracking-tight leading-snug">
              Medical Tourism in India | Top Doctors, Hospitals & Treatments
            </p>

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16.5px] text-slate-body leading-relaxed max-w-[620px]">
              Experience seamless clinical facilitation and recovery. We connect
              international patients with premier JCI & NABH accredited hospitals
              for advanced surgical care with comprehensive end-to-end concierge
              support.
            </p>

            {/* 2x2 Trust and Benefits Grid with Human-Crafted Tile Palettes */}
            <BenefitGrid />

            {/* Social Proof Row */}
            <SocialProof />
          </div>

          {/* Right Column: Consultation Form (42% ~ col-span-5) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end pt-2 lg:pt-0">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

