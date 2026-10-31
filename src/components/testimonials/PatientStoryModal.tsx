"use client";

import React, { useState } from "react";
import {
  X,
  Star,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  User,
  MapPin,
  Heart,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { PatientStory } from "./testimonialsData";

interface PatientStoryModalProps {
  story: PatientStory | null;
  onClose: () => void;
  onEnquire: (story: PatientStory) => void;
}

export default function PatientStoryModal({
  story,
  onClose,
  onEnquire,
}: PatientStoryModalProps) {
  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Tag / Country */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF8F7] text-teal-primary border border-teal-primary/20">
            <span>{story.countryFlag}</span>
            <span>{story.country}</span>
            <span className="text-slate-400">•</span>
            <span>{story.cityFrom}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            {story.verificationBadge}
          </span>
        </div>

        {/* Main Headline */}
        <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug mb-3">
          {story.headline}
        </h3>

        {/* Patient & Doctor Sub-Strip */}
        <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-400 block text-[10.5px] uppercase font-bold tracking-wider">
              Patient
            </span>
            <strong className="text-navy text-sm">{story.patientName}</strong>, Age {story.age}
          </div>
          <div>
            <span className="text-slate-400 block text-[10.5px] uppercase font-bold tracking-wider">
              Chief Surgeon
            </span>
            <strong className="text-[#00838D] text-sm">{story.doctor}</strong>
            <span className="text-slate-500 block text-[11px]">{story.doctorTitle}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10.5px] uppercase font-bold tracking-wider">
              Hospital
            </span>
            <strong className="text-navy text-sm">{story.hospital}</strong>
            <span className="text-slate-500 block text-[11px]">{story.hospitalCity}</span>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-soft/60 to-white border-l-4 border-teal-primary mb-6">
          <p className="text-sm sm:text-[15px] italic font-serif text-navy leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </p>
        </div>

        {/* Full Case Narrative */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Clinical Journey &amp; Outcome
          </h4>
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
            {story.detailedStory}
          </p>
        </div>

        {/* Verified Clinical Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-7">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
              Condition
            </span>
            <strong className="text-xs text-navy font-bold leading-tight block mt-0.5">
              {story.condition}
            </strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
              Procedure
            </span>
            <strong className="text-xs text-[#00838D] font-bold leading-tight block mt-0.5">
              {story.procedure}
            </strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
              Recovery Time
            </span>
            <strong className="text-xs text-emerald-700 font-bold leading-tight block mt-0.5">
              {story.recoveryWeeks} Weeks
            </strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
            <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
              Cost Saving
            </span>
            <strong className="text-xs text-navy font-bold leading-tight block mt-0.5">
              {story.costSavings}
            </strong>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Verified Medical Value Travel File</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnquire(story);
              }}
              className="px-5 py-2.5 rounded-xl bg-teal-primary hover:bg-teal-dark text-white text-xs sm:text-sm font-semibold shadow-cta transition-all cursor-pointer"
            >
              Consult Similar Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

