import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Gauge,
  UserCheck,
  BadgeDollarSign,
} from "lucide-react";

interface ServiceCardData {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  footerLabel: string;
}

export default function ServicesSection() {
  const services: ServiceCardData[] = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
      iconBg: "bg-[#E1F4F2]",
      title: "Dedicated Care Coordinator",
      description:
        "Every patient is assigned a dedicated care coordinator who looks after all needs of the patient and their attendant from appointments and travel to daily assistance. This personalized service is completely free of cost, ensuring constant support and a single point of contact throughout their medical journey.",
      footerLabel: "Personal 1-on-1 Assistance",
    },
    {
      icon: (
        <div className="flex items-center text-[#A66E26] font-bold text-base leading-none">
          <span>$</span>
          <svg
            className="w-3.5 h-3.5 -ml-0.5 mt-1 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ),
      iconBg: "bg-[#FDF2E4]",
      title: "Cost Saving for Patients",
      description:
        "As experts in the healthcare system, we are fully aware of medical processes, hospital protocols, and fair treatment costs. We ensure transparent pricing, avoid unnecessary expenses, and negotiate the best possible treatment packages helping patients save significantly while still receiving world-class care.",
      footerLabel: "Transparent Hospital Packages",
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#2F4B7C]" strokeWidth={2.2} />,
      iconBg: "bg-[#E2EAF5]",
      title: "Zero Waiting Time for International Patients",
      description:
        "We ensure zero waiting time by pre-scheduling doctor consultations, diagnostic tests, and hospital admissions in advance. International patients are given priority appointments to save valuable time and begin treatment right from arrival.",
      footerLabel: "Express Medical Bookings",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-[#00838D]" strokeWidth={2.2} />,
      iconBg: "bg-[#E1F3F1]",
      title: "Opinion, Line of Treatment & Cost Estimate",
      description:
        "Before traveling, we arrange a formal medical opinion, suggested line of treatment, and cost estimate from leading hospitals and doctors based on your shared medical reports, avoiding uncertainty and surprise costs.",
      footerLabel: "Multiple Hospital Opinions",
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFD] py-14 sm:py-20 lg:py-24 border-t border-[#EDF3F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11.5px] sm:text-xs font-bold text-teal-primary tracking-widest uppercase mb-2 sm:mb-3">
            ZERO FACILITATION FEE &bull; 100% PATIENT ADVOCACY
          </p>
          <h2 className="text-[20px] sm:text-3xl lg:text-[38px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
            Comprehensive Care &ndash; Our Services
          </h2>
          <p className="mt-3.5 sm:mt-4 text-[14px] sm:text-base text-slate-body leading-relaxed max-w-2xl mx-auto">
            Our network spans the top medical tourism hubs worldwide &ndash; giving you
            the choice of cities, doctors and price.
          </p>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E7EDF3] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:border-[#D8E4EF] group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  {/* Category Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center`}
                  >
                    {item.icon}
                  </div>

                  {/* Free Facilitation Pill Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E2F7F4] border border-[#BBEBE5] text-[#00838D] text-xs font-semibold select-none">
                    <CheckCircle2 className="w-4 h-4 text-[#00838D]" strokeWidth={2.3} />
                    <span>Free Facilitation</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-[20px] font-medium text-navy tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[14.5px] text-slate-body leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Divider & Link */}
              <div className="pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-semibold text-[#3B6279] group-hover:text-teal-primary transition-colors">
                  {item.footerLabel}
                </span>
                <ArrowRight className="w-4 h-4 text-[#3B6279] group-hover:text-teal-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
