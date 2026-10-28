import React from "react";
import { ShieldCheck, PiggyBank, Clock, Languages } from "lucide-react";

interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  colors: {
    cardBg: string;
    cardBorder: string;
    cardHoverBorder: string;
    cardShadow: string;
    iconBg: string;
    iconBorder: string;
    iconText: string;
    tagBg: string;
    dotColor: string;
  };
}

const benefits: BenefitItem[] = [
  {
    id: "accredited",
    title: "JCI & NABH Accredited",
    subtitle: "Top-Tier Partner Hospitals",
    tag: "Certified",
    icon: ShieldCheck,
    colors: {
      cardBg: "from-white via-[#F4FBF9] to-[#E6F7F3]/70",
      cardBorder: "border-[#CFEFEA]",
      cardHoverBorder: "hover:border-[#00838D]/50",
      cardShadow: "hover:shadow-[0_8px_20px_-4px_rgba(0,131,141,0.14)]",
      iconBg: "from-[#E3F8F4] to-[#C9F2EB]",
      iconBorder: "border-[#9DE6DB]",
      iconText: "text-[#00838D]",
      tagBg: "bg-[#E0F5F2] text-[#006B75] border-[#B2E8DF]",
      dotColor: "bg-[#10B981]",
    },
  },
  {
    id: "savings",
    title: "60–80% Cost Savings",
    subtitle: "Transparent Package Pricing",
    tag: "High Value",
    icon: PiggyBank,
    colors: {
      cardBg: "from-white via-[#FFFDF8] to-[#FFF3DC]/70",
      cardBorder: "border-[#FCE5BF]",
      cardHoverBorder: "hover:border-[#F59E0B]/60",
      cardShadow: "hover:shadow-[0_8px_20px_-4px_rgba(245,158,11,0.14)]",
      iconBg: "from-[#FFF0D4] to-[#FDDEAB]",
      iconBorder: "border-[#FCD084]",
      iconText: "text-[#D97706]",
      tagBg: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      dotColor: "bg-[#F59E0B]",
    },
  },
  {
    id: "waiting",
    title: "Zero Waiting Time",
    subtitle: "Immediate Priority Admissions",
    tag: "Express Care",
    icon: Clock,
    colors: {
      cardBg: "from-white via-[#F8FBFF] to-[#EAF2FF]/70",
      cardBorder: "border-[#D6E6FF]",
      cardHoverBorder: "hover:border-[#3B82F6]/50",
      cardShadow: "hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.14)]",
      iconBg: "from-[#E8F2FF] to-[#D1E4FF]",
      iconBorder: "border-[#ADCFFF]",
      iconText: "text-[#2563EB]",
      tagBg: "bg-[#DBEAFE] text-[#1E40AF] border-[#BFDBFE]",
      dotColor: "bg-[#3B82F6]",
    },
  },
  {
    id: "multilingual",
    title: "Multilingual Support",
    subtitle: "Arabic, French & English Guides",
    tag: "Dedicated",
    icon: Languages,
    colors: {
      cardBg: "from-white via-[#FAF8FF] to-[#F2EDFF]/70",
      cardBorder: "border-[#E7DBFE]",
      cardHoverBorder: "hover:border-[#8B5CF6]/50",
      cardShadow: "hover:shadow-[0_8px_20px_-4px_rgba(139,92,246,0.14)]",
      iconBg: "from-[#F3ECFF] to-[#E3D4FF]",
      iconBorder: "border-[#D2BCFE]",
      iconText: "text-[#7C3AED]",
      tagBg: "bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]",
      dotColor: "bg-[#8B5CF6]",
    },
  },
];

export default function BenefitGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 sm:my-7 max-w-[680px] w-full">
      {benefits.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className={`group relative flex items-center gap-3.5 p-3.5 sm:p-4 min-h-[82px] bg-gradient-to-br ${item.colors.cardBg} rounded-2xl border ${item.colors.cardBorder} ${item.colors.cardHoverBorder} shadow-[0_2px_10px_rgba(11,35,69,0.04)] ${item.colors.cardShadow} transition-all duration-300 hover:-translate-y-0.5`}
          >
            {/* Semantic Icon Box */}
            <div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.colors.iconBg} flex items-center justify-center shrink-0 border ${item.colors.iconBorder} shadow-xs group-hover:scale-105 transition-transform duration-300`}
            >
              <IconComponent className={`w-5 h-5 ${item.colors.iconText}`} />
            </div>

            {/* Content & Micro-pill */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-1.5 mb-1">
                <span className="text-[13px] sm:text-[13.5px] font-bold text-navy leading-snug tracking-tight">
                  {item.title}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${item.colors.tagBg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.colors.dotColor}`} />
                  {item.tag}
                </span>
              </div>
              <p className="text-[11.5px] sm:text-[12px] text-slate-muted leading-tight">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}



