"use client";

import React from "react";
import Image from "next/image";
import { Clock, Sparkles, ArrowRight } from "lucide-react";

export interface AyurvedaTreatment {
  id: number;
  slug: string;
  title: string;
  therapies: string;
  image: string;
  category: string;
  duration: string;
  doshaFocus: string;
  overview: string;
  keyBenefits: string[];
}

interface AyurvedaTreatmentCardProps {
  treatment: AyurvedaTreatment;
  onSelect: (treatment: AyurvedaTreatment) => void;
  onEnquire?: (treatment: AyurvedaTreatment) => void;
}

export default function AyurvedaTreatmentCard({
  treatment,
  onSelect,
  onEnquire,
}: AyurvedaTreatmentCardProps) {
  const therapyList = Array.from(
    new Set(
      treatment.therapies
        .split(/,|&/)
        .map((t) => t.trim())
        .filter(Boolean)
    )
  );
  const shownTherapies = therapyList.slice(0, 3);
  const extraCount = therapyList.length - shownTherapies.length;

  return (
    <article className="group flex flex-col bg-white rounded-3xl border border-[#EFE7D8] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_45px_-15px_rgba(23,74,58,0.28)]">
      {/* Image */}
      <button
        type="button"
        onClick={() => onSelect(treatment)}
        className="relative h-48 overflow-hidden cursor-pointer focus:outline-none"
        aria-label={`View ${treatment.title}`}
      >
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 text-[#174A3A] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          <Clock className="w-3 h-3" />
          {treatment.duration}
        </span>
        <span className="absolute bottom-3 left-3 right-3 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white text-left">
          <Sparkles className="w-3 h-3 text-[#E9D8A6] shrink-0" />
          <span className="truncate">{treatment.doshaFocus}</span>
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#B08A2E] mb-1.5">
          {treatment.category}
        </span>
        <h3 className="text-[16px] sm:text-[17px] font-semibold text-navy leading-snug mb-2 line-clamp-2 group-hover:text-[#174A3A] transition-colors">
          {treatment.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 mb-4">
          {treatment.overview}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {shownTherapies.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-[#F5F1E8] text-[#5C4A1F] text-[11px] font-semibold"
            >
              {t}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="px-2.5 py-1 rounded-lg bg-[#EEF5F0] text-[#174A3A] text-[11px] font-semibold">
              +{extraCount} more
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-dashed border-[#E8DCC2]">
          <button
            type="button"
            onClick={() => onSelect(treatment)}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#174A3A] hover:gap-2.5 transition-all cursor-pointer"
          >
            View Protocol
            <ArrowRight className="w-4 h-4" />
          </button>
          {onEnquire && (
            <a
              href="#quote-form"
              onClick={() => onEnquire(treatment)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-teal-primary hover:bg-teal-dark transition-colors"
            >
              Get Quote
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
