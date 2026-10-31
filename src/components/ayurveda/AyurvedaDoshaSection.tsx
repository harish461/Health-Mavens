"use client";

import React from "react";
import { Wind, Flame, Mountain, ArrowRight, Check } from "lucide-react";
import type { Dosha } from "./ayurvedaData";

interface AyurvedaDoshaSectionProps {
  activeDosha: Dosha | null;
  onSelectDosha: (dosha: Dosha) => void;
  doshaCounts: Record<Dosha, number>;
}

const doshas: {
  name: Dosha;
  elements: string;
  icon: React.ElementType;
  governs: string;
  imbalance: string[];
  theme: {
    card: string;
    iconWrap: string;
    icon: string;
    accent: string;
    button: string;
    ring: string;
    dot: string;
  };
}[] = [
  {
    name: "Vata",
    elements: "Air + Space",
    icon: Wind,
    governs: "Movement, nerve impulses, circulation & breathing",
    imbalance: ["Joint & back pain", "Insomnia & anxiety", "Paralysis & tremors"],
    theme: {
      card: "from-sky-50 to-white border-sky-100",
      iconWrap: "bg-sky-100",
      icon: "text-sky-700",
      accent: "text-sky-700",
      button: "bg-sky-700 hover:bg-sky-800",
      ring: "ring-sky-500", dot: "bg-sky-500",
    },
  },
  {
    name: "Pitta",
    elements: "Fire + Water",
    icon: Flame,
    governs: "Digestion, metabolism, body heat & intellect",
    imbalance: ["Migraines", "Skin conditions & psoriasis", "Acidity & inflammation"],
    theme: {
      card: "from-amber-50 to-white border-amber-100",
      iconWrap: "bg-amber-100",
      icon: "text-amber-700",
      accent: "text-amber-700",
      button: "bg-amber-600 hover:bg-amber-700",
      ring: "ring-amber-500", dot: "bg-amber-500",
    },
  },
  {
    name: "Kapha",
    elements: "Earth + Water",
    icon: Mountain,
    governs: "Structure, immunity, lubrication & stability",
    imbalance: ["Obesity & PCOS", "Sinusitis & asthma", "Diabetes & sluggishness"],
    theme: {
      card: "from-emerald-50 to-white border-emerald-100",
      iconWrap: "bg-emerald-100",
      icon: "text-emerald-700",
      accent: "text-emerald-700",
      button: "bg-emerald-700 hover:bg-emerald-800",
      ring: "ring-emerald-500", dot: "bg-emerald-500",
    },
  },
];

export default function AyurvedaDoshaSection({
  activeDosha,
  onSelectDosha,
  doshaCounts,
}: AyurvedaDoshaSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 border-y border-[#EFE7D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#B08A2E] mb-3">
              The Three Doshas
            </span>
            <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25]">
              Every body is unique. <br className="hidden sm:block" />
              <span className="text-[#174A3A]">So is every Ayurvedic cure.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[14px] sm:text-base text-slate-600 leading-relaxed">
            Ayurveda sees health as the balance of three bio-energies. Pick the dosha that matches
            your concern to instantly discover the therapies designed to restore it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {doshas.map((d) => {
            const Icon = d.icon;
            const isActive = activeDosha === d.name;
            return (
              <div
                key={d.name}
                className={`relative rounded-3xl border bg-gradient-to-b ${d.theme.card} p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  isActive ? `ring-2 ${d.theme.ring} shadow-card` : ""
                }`}
              >
                {isActive && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full shadow-sm text-navy">
                    <Check className="w-3 h-3" /> Selected
                  </span>
                )}
                <div className={`w-14 h-14 rounded-2xl ${d.theme.iconWrap} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${d.theme.icon}`} />
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-2xl font-semibold text-navy">{d.name}</h3>
                  <span className={`text-xs font-bold uppercase tracking-wider ${d.theme.accent}`}>
                    {d.elements}
                  </span>
                </div>
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Governs {d.governs.toLowerCase()}.
                </p>

                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Signs of imbalance
                </div>
                <ul className="space-y-2 mb-7">
                  {d.imbalance.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${d.theme.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onSelectDosha(d.name)}
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${d.theme.button}`}
                >
                  <span>
                    View {doshaCounts[d.name]} {d.name} Therapies
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
