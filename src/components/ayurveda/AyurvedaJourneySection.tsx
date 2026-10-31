import React from "react";
import { Stethoscope, Sprout, Droplets, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Stethoscope,
    phase: "Day 1",
    title: "Nadi Pariksha & Prakriti Analysis",
    description:
      "Pulse diagnosis and body-constitution assessment by a senior Vaidya to design your personal protocol.",
  },
  {
    icon: Sprout,
    phase: "Days 2 – 5",
    title: "Purvakarma — Preparation",
    description:
      "Internal & external oleation (Snehana) and herbal steam (Swedana) loosen deep-seated toxins.",
  },
  {
    icon: Droplets,
    phase: "Days 6 – 18",
    title: "Pradhanakarma — Core Therapy",
    description:
      "Targeted Panchakarma and specialty therapies such as Basti, Nasya, Virechana and Shirodhara.",
  },
  {
    icon: HeartPulse,
    phase: "Days 19 – 21+",
    title: "Paschatkarma & Rasayana",
    description:
      "Gradual diet restoration, rejuvenating herbs and a take-home lifestyle plan for lasting results.",
  },
];

export default function AyurvedaJourneySection() {
  return (
    <section className="relative bg-[#123B2E] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-48 -right-32 w-[560px] h-[560px] rounded-full border border-dashed border-[#E9D8A6]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#E9D8A6] mb-3">
            Your Healing Journey
          </span>
          <h2 className="text-[20px] sm:text-[28px] font-bold text-white tracking-tight leading-snug sm:leading-[1.25] mb-4">
            A classical 21-day path to balance
          </h2>
          <p className="text-[14px] sm:text-base text-white/70 leading-relaxed">
            Every program follows the time-tested three-phase Panchakarma sequence, tailored to your
            condition and pace.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px border-t-2 border-dashed border-[#E9D8A6]/30" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#E9D8A6] flex items-center justify-center shadow-[0_0_0_8px_rgba(233,216,166,0.12)] mb-6">
                  <Icon className="w-7 h-7 text-[#123B2E]" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white text-[#123B2E] text-[11px] font-bold flex items-center justify-center shadow">
                    {idx + 1}
                  </span>
                </div>
                <div className="w-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-5 sm:p-6 transition-colors flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#E9D8A6] mb-2">
                    {step.phase}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-semibold text-white leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

