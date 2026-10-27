"use client";

import React, { useState, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  Paperclip,
  Lock,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
} from "lucide-react";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  specialty?: string;
  file?: string;
}

const specialties = [
  "Cardiology & Heart Surgery",
  "Orthopedics & Joint Replacement",
  "Oncology & Cancer Therapy",
  "Neurology & Neurosurgery",
  "Cosmetic & Plastic Surgery",
  "Advanced Dental Care",
  "Fertility & IVF Treatment",
  "Organ Transplant Facilitation",
  "Ayurveda & Holistic Wellness",
  "Spine Surgery",
  "Bariatric / Metabolic Surgery",
  "Other Medical Concern",
];

const countryCodes = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+91", label: "+91 (India)" },
  { code: "+966", label: "+966 (KSA)" },
  { code: "+968", label: "+968 (Oman)" },
  { code: "+974", label: "+974 (Qatar)" },
  { code: "+965", label: "+965 (Kuwait)" },
  { code: "+254", label: "+254 (Kenya)" },
  { code: "+234", label: "+234 (Nigeria)" },
  { code: "+256", label: "+256 (Uganda)" },
  { code: "+61", label: "+61 (Australia)" },
];

export default function ConsultationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    if (!email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      errs.phone = "Phone / WhatsApp number is required";
    } else if (phone.trim().length < 6) {
      errs.phone = "Please enter a valid phone number";
    }

    if (!specialty) {
      errs.specialty = "Please select a specialty or medical concern";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 25MB)
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        file: "File size exceeds the 25 MB limit.",
      }));
      return;
    }

    // Validate type
    const validTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        file: "Accepted formats are PDF, JPG, or PNG only.",
      }));
      return;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitFeedback(null);

    // =========================================================================
    // INTEGRATION POINT: Connect to CRM / Backend API endpoint here.
    // e.g. await fetch('/api/consultation', { method: 'POST', body: formData });
    // =========================================================================
    try {
      // Simulating API latency for UX feedback
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitFeedback(
        "Request received! Our international patient coordinator will contact you shortly."
      );
    } catch {
      setSubmitFeedback("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="quote-form"
      className="relative w-full max-w-[530px] mx-auto lg:ml-auto bg-white rounded-form p-6 sm:p-8 shadow-form border border-slate-100/90 transition-all"
    >
      {/* Floating Badge at Top Right */}
      <div className="absolute -top-3.5 right-6 sm:right-8 bg-[#00838D] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1 rounded-full shadow-badge uppercase">
        Fast Response • 100% Free
      </div>

      {/* Form Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] sm:text-[26px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
          Let Us Help You
        </h2>
        <p className="text-[14px] sm:text-[13.5px] text-slate-muted mt-1 leading-snug">
          Free Expert Consultation & Hospital Treatment Estimates
        </p>
      </div>

      {submitFeedback && (
        <div className="mb-5 p-3.5 bg-teal-soft/80 border border-teal-primary/30 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-teal-dark">
          <CheckCircle2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
          <span className="font-medium">{submitFeedback}</span>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Full Name & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-[12px] font-semibold text-navy mb-1"
            >
              Full Name <span className="text-teal-primary">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Doe"
                className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-[13px] bg-slate-50/70 border rounded-xl custom-input text-navy placeholder:text-slate-400 ${
                  errors.fullName
                    ? "border-red-400 bg-red-50/30"
                    : "border-slate-200 focus:bg-white"
                }`}
                aria-invalid={errors.fullName ? "true" : "false"}
              />
            </div>
            {errors.fullName && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-[12px] font-semibold text-navy mb-1"
            >
              Email Address <span className="text-teal-primary">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-[13px] bg-slate-50/70 border rounded-xl custom-input text-navy placeholder:text-slate-400 ${
                  errors.email
                    ? "border-red-400 bg-red-50/30"
                    : "border-slate-200 focus:bg-white"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone / WhatsApp with Country Selector */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[12px] font-semibold text-navy mb-1"
          >
            Phone / WhatsApp <span className="text-teal-primary">*</span>
          </label>
          <div className="flex gap-2">
            <div className="w-[120px] shrink-0">
              <select
                id="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-full py-2.5 px-2 text-xs sm:text-[13px] bg-slate-50/70 border border-slate-200 rounded-xl custom-input text-navy font-medium"
                aria-label="Country calling code"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className={`w-full px-3 py-2.5 text-xs sm:text-[13px] bg-slate-50/70 border rounded-xl custom-input text-navy placeholder:text-slate-400 ${
                  errors.phone
                    ? "border-red-400 bg-red-50/30"
                    : "border-slate-200 focus:bg-white"
                }`}
                aria-invalid={errors.phone ? "true" : "false"}
              />
            </div>
          </div>
          {errors.phone && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Row 3: Medical Specialty / Concern */}
        <div>
          <label
            htmlFor="specialty"
            className="block text-[12px] font-semibold text-navy mb-1"
          >
            Medical Specialty / Concern <span className="text-teal-primary">*</span>
          </label>
          <div className="relative">
            <select
              id="specialty"
              name="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className={`w-full px-3 py-2.5 text-xs sm:text-[13px] bg-slate-50/70 border rounded-xl custom-input text-navy appearance-none pr-8 ${
                errors.specialty
                  ? "border-red-400 bg-red-50/30"
                  : "border-slate-200 focus:bg-white"
              } ${!specialty ? "text-slate-400" : "text-navy"}`}
              aria-invalid={errors.specialty ? "true" : "false"}
            >
              <option value="" disabled>
                Select Specialty
              </option>
              {specialties.map((spec) => (
                <option key={spec} value={spec} className="text-navy">
                  {spec}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.specialty && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.specialty}
            </p>
          )}
        </div>

        {/* Row 4: Attach Medical Reports (Optional) */}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            id="medicalReports"
          />

          {!selectedFile ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-between p-3 border border-dashed border-slate-300 hover:border-teal-primary/60 bg-slate-50/50 hover:bg-teal-subtle/40 rounded-xl transition-colors text-left group"
            >
              <div className="flex items-center gap-2 text-slate-body">
                <Paperclip className="w-4 h-4 text-teal-primary" />
                <span className="text-xs font-medium text-slate-body group-hover:text-teal-dark">
                  Attach Medical Reports <span className="text-slate-400 font-normal">(Optional)</span>
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                PDF, JPG (≤25MB)
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-between p-2.5 px-3 bg-teal-soft/70 border border-teal-primary/30 rounded-xl text-xs">
              <div className="flex items-center gap-2 truncate">
                <Paperclip className="w-4 h-4 text-teal-primary shrink-0" />
                <span className="truncate font-medium text-navy">
                  {selectedFile.name}
                </span>
                <span className="text-[10px] text-slate-muted shrink-0">
                  ({(selectedFile.size / (1024 * 1024)).toFixed(1)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors"
                aria-label="Remove attached file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {errors.file && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.file}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none text-white font-semibold py-3.5 px-6 rounded-xl shadow-cta hover:shadow-cta-hover transition-all duration-200 text-sm sm:text-[15px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Consultation Request...</span>
              </>
            ) : (
              <>
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Privacy & Legal Note */}
        <div className="pt-2 text-center space-y-2">
          <p className="text-[11px] text-slate-muted leading-tight">
            By submitting I agree to{" "}
            <a href="#terms" className="underline hover:text-navy">
              Terms
            </a>{" "}
            &{" "}
            <a href="#privacy" className="underline hover:text-navy">
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-teal-primary">
            <Lock className="w-3.5 h-3.5 text-teal-primary" />
            <span>100% Private & Medically Confidential</span>
          </div>
        </div>
      </form>
    </div>
  );
}
