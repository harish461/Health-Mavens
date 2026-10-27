"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Building2,
  MapPin,
  Calendar,
  Star,
  CheckCircle2,
  Bed,
  Plane,
  FileUp,
  Loader2,
} from "lucide-react";
import { Hospital } from "./HospitalCard";

interface HospitalDetailModalProps {
  hospital: Hospital | null;
  mode: "details" | "estimate" | null;
  onClose: () => void;
}

export default function HospitalDetailModal({
  hospital,
  mode,
  onClose,
}: HospitalDetailModalProps) {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [roomPreference, setRoomPreference] = useState("Deluxe Private Room");
  const [treatmentQuery, setTreatmentQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!hospital || !mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to request an official hospital estimate for ${hospital.name}, ${hospital.city}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hospital Header Banner */}
        <div className="flex flex-col sm:flex-row gap-5 pb-6 border-b border-slate-100">
          <div className="relative w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200">
            <Image
              src={hospital.image}
              alt={hospital.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              {hospital.accreditations.map((acc, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8]"
                >
                  {acc}
                </span>
              ))}
              <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-teal-soft text-teal-primary border border-teal-primary/20">
                Level 1 Trauma
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
              {hospital.name}
            </h3>
            <p className="text-xs sm:text-[13px] font-semibold text-[#00838D] mt-0.5">
              {hospital.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {hospital.address}
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {hospital.rating} ({hospital.reviewsCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {mode === "estimate" ? (
          /* Estimate Request Form */
          <div className="pt-6">
            <h4 className="text-base font-bold text-navy mb-1">
              Request Official Cost Estimate for {hospital.name}
            </h4>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Receive hospital package prices, stay breakdown, and inclusions directly vetted by the
              international medical board. Zero facilitation surcharge.
            </p>

            {isSuccess ? (
              <div className="py-8 text-center bg-teal-soft/40 rounded-2xl border border-teal-primary/20 p-6">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h5 className="text-base font-bold text-navy mb-1">Estimate Request Dispatched!</h5>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                  Thank you, <strong className="text-navy">{patientName}</strong>. Our medical desk at{" "}
                  <strong>{hospital.name}</strong> will prepare an official treatment quotation and
                  send it to <strong className="text-navy">{patientEmail}</strong> within 3 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 bg-teal-primary text-white text-xs font-semibold rounded-lg"
                >
                  Close
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
                      placeholder="e.g. Michael Cooper"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
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
                      placeholder="e.g. m.cooper@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Room Category Preference
                    </label>
                    <select
                      value={roomPreference}
                      onChange={(e) => setRoomPreference(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30"
                    >
                      <option value="Deluxe Private Room">Deluxe Private Room</option>
                      <option value="Super Deluxe Suite">Super Deluxe Suite (Attendant included)</option>
                      <option value="Executive Suite">Executive International Suite</option>
                      <option value="Twin Sharing Room">Twin Sharing Room (Budget-friendly)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment Required / Medical Condition
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={treatmentQuery}
                    onChange={(e) => setTreatmentQuery(e.target.value)}
                    placeholder="e.g. Bilateral robotic knee replacement, spine disc decompression, hip resurfacing..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#006D77] hover:bg-[#005B63] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Requesting Official Hospital Quote...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Send Estimate Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        ) : (
          /* Hospital Full Profile View */
          <div className="pt-6 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-navy mb-2">Hospital Infrastructure Overview</h4>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                {hospital.name} is an internationally accredited quaternary care facility equipped with
                state-of-the-art robotic surgical suites, hybrid catheterization laboratories, and dedicated
                international patient concierge wings offering multi-lingual support, private suites, and
                personalized diet plans.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="block text-[11px] font-medium text-slate-400">Total Beds</span>
                <span className="text-sm font-bold text-navy">{hospital.beds}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="block text-[11px] font-medium text-slate-400">Modular OTs</span>
                <span className="text-sm font-bold text-navy">{hospital.operationTheatres}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="block text-[11px] font-medium text-slate-400">Airport Distance</span>
                <span className="text-xs font-bold text-navy truncate block">
                  {hospital.airportDistance}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="block text-[11px] font-medium text-slate-400">Accreditations</span>
                <span className="text-xs font-bold text-emerald-700 truncate block">
                  JCI &amp; NABH Global
                </span>
              </div>
            </div>

            {/* International Patient Services */}
            <div>
              <h4 className="text-sm font-bold text-navy mb-2.5">
                International Patient Amenities &amp; Facilitation
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>Complimentary Airport Pick-up &amp; Drop</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>Dedicated Multi-Lingual Medical Interpreters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>Medical Visa Invitation Letter (FRRO Support)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>International Patient Lounge &amp; Wi-Fi Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>Halal, Continental &amp; African Meal Customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                  <span>Post-Discharge Tele-Followup with Chief Surgeon</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.631-.929-2.233-.244-.587-.492-.507-.677-.516l-.578-.01c-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.23 3.109.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.51 2 2.025 6.485 2.025 12.015c0 1.874.52 3.633 1.427 5.144L2 22l4.98-1.305a9.98 9.98 0 0 0 5.06 1.34h.004c5.526 0 10.015-4.485 10.015-10.015A10.007 10.007 0 0 0 12.04 2z" />
                </svg>
                <span>WhatsApp Coordinator</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006D77] hover:bg-[#005B63] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Quotation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
