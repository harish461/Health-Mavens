import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Plane,
  ArrowRight,
  Shield,
  Plus,
} from "lucide-react";

export default function PatientRoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-[#FAFBFD] py-14 sm:py-20 lg:py-24 border-t border-[#EDF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11.5px] sm:text-xs font-bold text-teal-primary tracking-widest uppercase mb-2 sm:mb-3">
            TRANSPARENT STEP-BY-STEP EXPERIENCE
          </p>
          <h2 className="text-[20px] sm:text-3xl lg:text-[38px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
            Patient Roadmap &ndash; Your Easy Treatment Journey
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[14px] sm:text-base text-slate-body leading-relaxed max-w-2xl mx-auto">
            From your very first enquiry to your healthy return back home, we stand by your side.
          </p>
        </div>

        {/* Roadmap Grid (4 columns on lg, 2 columns on sm/md, 1 column on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 01 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  01
                </span>
                <span className="px-3 py-1 rounded-full bg-[#EAF5FB] text-[#0F5B78] text-[11px] font-semibold select-none">
                  24/7 Rapid Response
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Contact &amp; Free Consultation
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Connect via Call, WhatsApp, or Email to share medical reports and discuss your needs.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <PhoneCall className="w-4 h-4 text-teal-primary shrink-0" strokeWidth={2.2} />
              <span>Initial Assessment</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  02
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E5F7F3] text-[#0D7068] text-[11px] font-semibold select-none">
                  Transparent Pricing
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Medical Opinions &amp; Quotes
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Receive customized treatment opinions and transparent cost estimates from top accredited hospitals.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <svg
                className="w-4 h-4 text-teal-primary shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              <span>Comparative Quotes</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  03
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E7EFF9] text-[#2B5689] text-[11px] font-semibold select-none">
                  Complete Travel Care
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Visa &amp; Travel Assistance
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Priority Medical Visa invitation letters, flight itineraries, and comfortable stay options.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <Plane className="w-4 h-4 text-teal-primary shrink-0" strokeWidth={2.2} />
              <span>Visa &amp; Itinerary</span>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  04
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E9F3FA] text-[#265D82] text-[11px] font-semibold select-none">
                  Airport Pickup &amp; Care
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Arrival &amp; Initial Evaluation
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Complimentary airport pickup, dedicated coordinator, and in-person consultation with senior doctors.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <svg
                className="w-4 h-4 text-teal-primary shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              <span>Warm Hospitality</span>
            </div>
          </div>

          {/* Card 05 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  05
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF0E1] text-[#8A5A1B] text-[11px] font-semibold select-none">
                  Top Specialist Care
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Treatment &amp; Procedure
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Advanced medical procedures conducted by renowned surgeons in world-class facilities.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <svg
                className="w-4 h-4 text-teal-primary shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
                <path d="M18 10l-4-4" />
                <path d="m15 3 6 6-4 4-6-6 4-4z" />
              </svg>
              <span>Modern Surgery</span>
            </div>
          </div>

          {/* Card 06 */}
          <div className="bg-white border border-[#E5EDF4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] group">
            <div>
              {/* Top Row: Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  06
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E4F6F4] text-[#0E7169] text-[11px] font-semibold select-none">
                  Recovery Monitoring
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-medium text-navy tracking-tight mb-2.5">
                Post-Treatment Recovery
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6">
                Careful post-procedure monitoring, recovery evaluations, and dedicated guidance during healing.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center gap-2 text-xs font-semibold text-teal-primary">
              <div className="relative flex items-center justify-center">
                <Shield className="w-4 h-4 text-teal-primary" strokeWidth={2.2} />
                <Plus className="w-2.5 h-2.5 text-teal-primary absolute" strokeWidth={3} />
              </div>
              <span>Daily Checks</span>
            </div>
          </div>

          {/* Card 07 (Spans 2 columns on desktop) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-white border-2 border-[#19B6B0] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-card group">
            <div>
              {/* Top Row: Number & Solid Teal Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-[28px] font-extrabold text-[#006E78]">
                  07
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#005B60] text-white text-[11.5px] font-semibold select-none tracking-wide">
                  Full Recovery &amp; Ongoing Care
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[18px] font-medium text-navy tracking-tight mb-2.5">
                Safe Return &amp; Ongoing Care
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed mb-6 max-w-2xl">
                Fly back home healthy and rejuvenated with continuous remote doctor follow-ups, tele-consultations, and long-term pharmaceutical care support.
              </p>
            </div>

            {/* Footer: Tele-Health on Left, Start Step 1 CTA Link on Right */}
            <div className="pt-3.5 border-t border-[#EDF2F7] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-primary">
                <div className="w-4 h-4 rounded border border-teal-primary flex items-center justify-center">
                  <Plus className="w-3 h-3 text-teal-primary" strokeWidth={3} />
                </div>
                <span>Remote Tele-Health Followup</span>
              </div>

              <Link
                href="#quote-form"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-teal-primary hover:text-teal-dark group-hover:translate-x-0.5 transition-all"
              >
                <span>Start Step 1 Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
