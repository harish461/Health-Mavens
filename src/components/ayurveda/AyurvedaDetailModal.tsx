"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Leaf,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { AyurvedaTreatment } from "./AyurvedaTreatmentCard";

interface AyurvedaDetailModalProps {
  treatment: AyurvedaTreatment | null;
  onClose: () => void;
}

export default function AyurvedaDetailModal({
  treatment,
  onClose,
}: AyurvedaDetailModalProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [durationPref, setDurationPref] = useState("14 Days Intensive Package");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!treatment) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const resetAndClose = () => {
    setShowBookingForm(false);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Banner Info */}
        <div className="flex flex-col sm:flex-row gap-5 pb-6 border-b border-slate-100">
          <div className="relative w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-emerald-100 bg-emerald-50">
            <Image
              src={treatment.image}
              alt={treatment.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Leaf className="w-3 h-3 text-emerald-600" />
                {treatment.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8]">
                <ShieldCheck className="w-3 h-3 text-[#A16207]" />
                NABH Accredited Retreat
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight leading-snug">
              {treatment.title}
            </h3>

            <p className="text-xs sm:text-[13px] font-bold text-emerald-700 mt-1 uppercase tracking-wide">
              {treatment.therapies}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Recommended: <strong>{treatment.duration}</strong>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Dosha Balance: <strong>{treatment.doshaFocus}</strong>
              </span>
            </div>
          </div>
        </div>

        {showBookingForm ? (
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-base font-bold text-navy">
                Request Personalized Ayurveda Package Quote
              </h4>
              <button
                type="button"
                onClick={() => setShowBookingForm(false)}
                className="text-xs font-semibold text-teal-primary hover:underline cursor-pointer"
              >
                ← Back to Treatment Details
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Consult with our senior BAMS / MD (Ayurveda) Vaidyas for a tailored therapy plan,
              authentic herbal formulation schedule, and accredited wellness retreat stay estimate.
            </p>

            {isSuccess ? (
              <div className="py-8 text-center bg-emerald-50/50 rounded-2xl border border-emerald-200/70 p-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h5 className="text-base font-bold text-navy mb-1">
                  Ayurveda Consultation Request Received!
                </h5>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                  Thank you, <strong className="text-navy">{patientName}</strong>. Our Ayurvedic
                  Vaidya advisory desk will send your customized treatment protocol and retreat
                  package options to <strong className="text-navy">{patientEmail}</strong> within 2
                  hours.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="e.g. elena@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Program Duration
                    </label>
                    <select
                      value={durationPref}
                      onChange={(e) => setDurationPref(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                    >
                      <option value="7 Days Rejuvenation">7 Days Rejuvenation</option>
                      <option value="14 Days Intensive Package">14 Days Intensive Package</option>
                      <option value="21 Days Complete Panchakarma">
                        21 Days Complete Panchakarma
                      </option>
                      <option value="28 Days Chronic Healing Program">
                        28 Days Chronic Healing Program
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Symptoms / Health Goals
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={`Describe your symptoms or goals for ${treatment.title}...`}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Preparing Vaidya Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Get Free Ayurveda Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="pt-6 space-y-6">
            {/* Holistic Overview */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-2">
                Holistic Ayurvedic Protocol Overview
              </h4>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                {treatment.overview}
              </p>
            </div>

            {/* Traditional Therapies Chips */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-2.5">
                Core Classical Therapies Included
              </h4>
              <div className="flex flex-wrap gap-2">
                {treatment.therapies.split(/,|&/).map((item, idx) => {
                  const clean = item.trim();
                  if (!clean) return null;
                  return (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-900 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {clean}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-2.5">
                Therapeutic Benefits &amp; Inclusions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                {treatment.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Supervised by <strong className="text-navy">BAMS / MD Vaidyas</strong>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingForm(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-primary hover:bg-teal-dark text-white text-xs sm:text-[13px] font-semibold rounded-xl shadow-cta transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Vaidya Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

