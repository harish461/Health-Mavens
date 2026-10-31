"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Loader2, AlertCircle, Lock, ArrowRight } from "lucide-react";

const countriesList = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "India", code: "+91" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Oman", code: "+968" },
  { name: "Qatar", code: "+974" },
  { name: "Kuwait", code: "+965" },
  { name: "Kenya", code: "+254" },
  { name: "Nigeria", code: "+234" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Bangladesh", code: "+880" },
  { name: "Australia", code: "+61" },
  { name: "Canada", code: "+1" },
];

interface AyurvedaSidebarFormProps {
  selectedTreatmentTitle?: string;
}

const inputClass =
  "w-full px-3.5 py-2.5 bg-[#FBF8F2] border border-[#EFE7D8] rounded-xl text-xs sm:text-[13.5px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#174A3A]/20 focus:border-[#174A3A] transition-all";

export default function AyurvedaSidebarForm({
  selectedTreatmentTitle,
}: AyurvedaSidebarFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("United States");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedTreatmentTitle) {
      setDetails(`I'm interested in: ${selectedTreatmentTitle}`);
    }
  }, [selectedTreatmentTitle]);

  const dialCode = countriesList.find((c) => c.name === country)?.code ?? "+1";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setErrorMessage("Please enter your name.");
    if (!email.trim() || !email.includes("@"))
      return setErrorMessage("Please enter a valid email address.");
    if (!phone.trim()) return setErrorMessage("Please enter your phone number.");

    setErrorMessage("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  return (
    <div
      id="quote-form"
      className="scroll-mt-28 w-full rounded-3xl bg-white shadow-2xl p-6 sm:p-7 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#E9D8A6]/30 blur-2xl pointer-events-none" />

      <div className="relative mb-5">
        <h3 className="text-lg sm:text-xl font-semibold text-navy leading-tight">
          Request a Free Vaidya Consultation
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Personalized plan &amp; package quote within 2 hours.
        </p>
      </div>

      {isSuccess ? (
        <div className="relative py-8 text-center">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3.5 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-navy mb-1.5">Request Received!</h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-5 max-w-xs mx-auto">
            Thank you, <strong className="text-navy">{name}</strong>. Our Ayurvedic advisor will
            reach out on WhatsApp / email shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setName("");
              setEmail("");
              setPhone("");
              setDetails("");
            }}
            className="px-4 py-2 text-xs font-semibold text-[#174A3A] bg-[#EEF5F0] hover:bg-[#DDEBE2] rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-3">
          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Country"
            className={`${inputClass} font-medium cursor-pointer`}
          >
            {countriesList.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <span className="w-16 shrink-0 flex items-center justify-center bg-[#EEF5F0] border border-[#D6E7DC] rounded-xl text-xs sm:text-[13px] font-bold text-[#174A3A]">
              {dialCode}
            </span>
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
            />
          </div>

          <textarea
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us about your condition or health goals…"
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#174A3A] hover:bg-[#123B2E] disabled:opacity-70 text-white font-semibold text-sm transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>Get My Free Plan</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            100% private &amp; medically confidential
          </p>
        </form>
      )}
    </div>
  );
}
