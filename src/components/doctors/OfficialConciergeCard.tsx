"use client";

import React, { useState, useRef } from "react";
import {
  FileUp,
  Lock,
  ArrowRight,
  CheckCircle2,
  X,
  Loader2,
  AlertCircle,
} from "lucide-react";

const countryCodes = [
  { code: "+1", label: "+1" },
  { code: "+971", label: "+971" },
  { code: "+44", label: "+44" },
  { code: "+91", label: "+91" },
  { code: "+966", label: "+966" },
  { code: "+968", label: "+968" },
  { code: "+974", label: "+974" },
  { code: "+965", label: "+965" },
  { code: "+254", label: "+254" },
  { code: "+234", label: "+234" },
  { code: "+256", label: "+256" },
  { code: "+61", label: "+61" },
];

interface OfficialConciergeCardProps {
  prefilledDoctor?: string;
}

export default function OfficialConciergeCard({
  prefilledDoctor,
}: OfficialConciergeCardProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [medicalQuery, setMedicalQuery] = useState(
    prefilledDoctor ? `Inquiry regarding consultation with ${prefilledDoctor}` : ""
  );
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setErrorMessage("File exceeds 20MB limit. Please upload a smaller scan or report.");
        return;
      }
      setErrorMessage("");
      setUploadedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setErrorMessage("File exceeds 20MB limit. Please upload a smaller scan or report.");
        return;
      }
      setErrorMessage("");
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your mobile or WhatsApp number.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 relative overflow-hidden">
      {/* Top Gradient Accent Bar matching design */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00838D] via-[#19B6B0] to-[#E5A823]" />

      {/* Header */}
      <div className="mb-4">
        <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#00838D]">
          OFFICIAL CONCIERGE
        </span>
        <h3 className="text-lg font-medium text-navy mt-1 tracking-tight leading-snug">
          Let Us Help You – Free Expert Consultation
        </h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          Get official quotes &amp; treatment opinions from top orthopedic surgeons.
        </p>
      </div>

      {isSuccess ? (
        <div className="py-8 px-4 text-center">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3.5 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-base font-bold text-navy mb-1.5">Quote Request Received!</h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto mb-5">
            Thank you, <strong className="text-navy">{fullName}</strong>. Our senior medical
            advisors and hospital case team will reach out to you via WhatsApp / email within 2
            hours with official quotes.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFullName("");
              setEmail("");
              setPhone("");
              setMedicalQuery("");
              setUploadedFile(null);
            }}
            className="px-5 py-2 text-xs font-semibold text-teal-primary hover:text-teal-dark bg-teal-soft/60 hover:bg-teal-soft rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Johnathan Smith"
              className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs sm:text-[13.5px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. j.smith@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs sm:text-[13.5px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all"
            />
          </div>

          {/* Country Code & Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Country Code &amp; Phone Number
            </label>
            <div className="flex gap-2">
              <div className="relative w-20 shrink-0">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full px-2.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs sm:text-[13.5px] font-semibold text-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all appearance-none cursor-pointer"
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400 text-xs">
                  ▾
                </div>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile / WhatsApp"
                className="flex-1 px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs sm:text-[13.5px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all"
              />
            </div>
          </div>

          {/* Medical Query / Attach MRI or X-Ray */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Medical Query / Attach MRI or X-Ray
            </label>
            <textarea
              rows={3}
              value={medicalQuery}
              onChange={(e) => setMedicalQuery(e.target.value)}
              placeholder="Describe symptoms or attach scan summary (e.g. Knee pain, torn ACL, spine disc herniation)..."
              className="w-full px-3.5 py-2.5 bg-slate-50/70 border border-slate-200 rounded-lg text-xs sm:text-[13px] text-navy placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all resize-none"
            />
          </div>

          {/* Drag & Drop File Upload Box */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png,.dcm"
            className="hidden"
          />

          {uploadedFile ? (
            <div className="p-3 bg-teal-soft/40 border border-teal-primary/30 rounded-lg flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <FileUp className="w-4 h-4 text-teal-primary shrink-0" />
                <span className="text-xs font-medium text-navy truncate">
                  {uploadedFile.name}
                </span>
                <span className="text-[10px] text-slate-500 shrink-0">
                  ({(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setUploadedFile(null)}
                className="text-slate-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-slate-300 hover:border-teal-primary rounded-lg p-3.5 bg-slate-50/50 hover:bg-slate-50 text-center cursor-pointer transition-all group"
            >
              <FileUp className="w-5 h-5 text-slate-400 group-hover:text-teal-primary mx-auto mb-1 transition-colors" />
              <p className="text-[11.5px] text-slate-500 group-hover:text-slate-700 leading-tight">
                Click or drag MRI, CT scans, or doctor reports (PDF, JPG)
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 bg-[#006D77] hover:bg-[#005B63] active:scale-[0.99] disabled:opacity-70 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Quote...</span>
              </>
            ) : (
              <>
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Privacy Note */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 leading-tight text-center">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Private &amp; Medically Confidential. Direct hospital billing.</span>
          </div>
        </form>
      )}
    </div>
  );
}
