import React from "react";
import Image from "next/image";
import TrustBadge from "./TrustBadge";
import BenefitGrid from "./BenefitGrid";
import SocialProof from "./SocialProof";
import ConsultationForm from "./ConsultationForm";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F2FAF9] via-[#F8FCFC] to-[#FFFFFF] pt-6 sm:pt-10 lg:pt-12 pb-14 sm:pb-18 lg:pb-20">
      {/* Background Graphic Banner from User */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/hero-bg-banner.png"
          alt="Healthcare background graphics"
          fill
          priority
          className="object-cover object-bottom opacity-90"
        />
        {/* Subtle radial warmth glow behind left headline content */}
        <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[#FFF5E5]/50 blur-3xl -z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Content & Benefits (58% ~ col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            {/* Trust Badge */}
            <TrustBadge />

            {/* Main Headline */}
            <h1 className="text-[20px] sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-navy leading-snug sm:leading-[1.12] tracking-tight">
              Leading Healthcare <br />
              <span className="relative inline-block text-teal-primary mt-1">
                Consultant in India
                {/* Custom Teal Underline Accent matching reference screenshot */}
                <span
                  className="absolute -bottom-1.5 left-0 w-full h-[3.5px] sm:h-[4px] bg-[#19B6B0] rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-lg md:text-[20px] font-semibold text-[#3B6279] tracking-tight leading-snug">
              Medical Tourism in India | Top Doctors, Hospitals & Treatments
            </p>

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16.5px] text-slate-body leading-relaxed max-w-[620px]">
              Experience seamless clinical facilitation and recovery. We connect
              international patients with premier JCI & NABH accredited hospitals
              for advanced surgical care with comprehensive end-to-end concierge
              support.
            </p>

            {/* 2x2 Trust and Benefits Grid */}
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
