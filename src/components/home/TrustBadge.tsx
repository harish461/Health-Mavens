import React from "react";
import { Award, Sparkles } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF5E5] via-[#FFF9EE] to-[#FEF3C7] border border-[#F3DCB4]/80 shadow-[0_2px_8px_rgba(197,155,39,0.12)] mb-4 sm:mb-5 hover:shadow-[0_4px_12px_rgba(197,155,39,0.2)] transition-shadow duration-300">
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#B88728]/15 text-[#B88728] shrink-0">
        <Award className="w-3.5 h-3.5 text-[#A6751A] fill-[#A6751A]/20" />
      </div>
      <span className="text-[12px] sm:text-[13px] font-semibold text-[#664D12] tracking-wide whitespace-nowrap">
        Your Recovery, Our Promise
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse ml-0.5" />
    </div>
  );
}

