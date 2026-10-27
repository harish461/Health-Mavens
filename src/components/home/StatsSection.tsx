import React from "react";
import { ShieldCheck, Stethoscope, Award, Globe, Headphones } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
}

function StatCard({ icon, iconBg, value, label }: StatCardProps) {
  return (
    <div className="bg-[#F8FAFC] border border-[#E7EFF6] rounded-[20px] p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-card hover:border-[#DCE7F2]">
      {/* Icon Badge */}
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-3.5 sm:mb-4`}
      >
        {icon}
      </div>

      {/* Main Stat Number */}
      <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-medium text-navy tracking-tight leading-tight">
        {value}
      </h3>

      {/* Label */}
      <p className="mt-1 text-xs sm:text-[13px] font-medium text-slate-muted">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const stats: StatCardProps[] = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Main center person */}
          <circle cx="12" cy="7" r="2.5" />
          <path d="M7.5 17c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
          {/* Left person */}
          <circle cx="6" cy="9" r="1.8" />
          <path d="M2.5 17c0-1.8 1.5-3 3.5-3" />
          {/* Right person */}
          <circle cx="18" cy="9" r="1.8" />
          <path d="M18 14c2 0 3.5 1.2 3.5 3" />
        </svg>
      ),
      iconBg: "bg-[#E3F6F5]",
      value: "7,000+",
      label: "Patients Treated",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00838D]" strokeWidth={2.2} />,
      iconBg: "bg-[#DCF4F1]",
      value: "10+ Years",
      label: "Of Experience",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#2F4B7C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M12 8v8" strokeWidth="2.4" />
          <path d="M8 12h8" strokeWidth="2.4" />
        </svg>
      ),
      iconBg: "bg-[#E0E8F4]",
      value: "100+",
      label: "Accredited Hospitals",
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#A66E26]" strokeWidth={2.2} />,
      iconBg: "bg-[#FDF0DE]",
      value: "2,000+",
      label: "Expert Doctors",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              iconBg={stat.iconBg}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* Bottom Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-9">
          {/* Pill 1 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#EBF4FA] border border-[#D5E6F3] text-navy text-xs sm:text-[13px] font-semibold">
            <Globe className="w-4 h-4 text-[#00838D] shrink-0" strokeWidth={2.3} />
            <span>25+ Countries Served</span>
          </div>

          {/* Pill 2 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#EBF4FA] border border-[#D5E6F3] text-navy text-xs sm:text-[13px] font-semibold">
            <Headphones className="w-4 h-4 text-[#00838D] shrink-0" strokeWidth={2.3} />
            <span>24/7 Support Hours</span>
          </div>

          {/* Pill 3 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#EBF4FA] border border-[#D5E6F3] text-navy text-xs sm:text-[13px] font-semibold">
            <Award className="w-4 h-4 text-[#A66E26] shrink-0" strokeWidth={2.3} />
            <span>NABH & JCI Accredited Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
