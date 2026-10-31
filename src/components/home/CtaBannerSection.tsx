import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2345] rounded-[26px] p-8 sm:p-12 lg:p-14 shadow-form flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#19B6B0] text-xs font-semibold mb-4 select-none">
              <ShieldCheck className="w-4 h-4 text-[#19B6B0]" />
              <span>International Care Guarantee</span>
            </div>

            {/* Heading */}
            <h2 className="text-[20px] sm:text-[28px] font-bold text-white tracking-tight leading-snug sm:leading-[1.25]">
              Need an Urgent Second Opinion?
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-[14px] sm:text-[15px] text-slate-300 leading-relaxed">
              Speak with senior medical directors and receive transparent pricing from top
              Indian multi-specialty hospitals within 12 to 24 hours.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0">
            {/* Call Button */}
            <a
              href="tel:+18005550199"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#00838D]" />
              <span>Call +1 (800) 555-0199</span>
            </a>

            {/* Book Consultation Button */}
            <Link
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-[#00838D] hover:bg-[#006B75] active:scale-[0.99] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-cta hover:shadow-cta-hover transition-all duration-200"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
