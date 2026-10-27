import React from "react";
import { Award } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5E5] border border-[#F3DCB4] shadow-xs mb-4 sm:mb-5">
      <div className="flex items-center justify-center w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#B88728]/15 text-[#B88728] shrink-0">
        <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A6751A] fill-[#A6751A]/20" />
      </div>
      <span className="text-[12px] sm:text-[13px] font-semibold text-[#664D12] tracking-wide whitespace-nowrap">
        Your Recovery, Our Promise
      </span>
    </div>
  );
}
