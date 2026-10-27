import React from "react";
import { Star } from "lucide-react";

const avatars = [
  { initials: "AK", bg: "bg-[#DCEBFE] text-[#1D4ED8]" },
  { initials: "MR", bg: "bg-[#E0E7FF] text-[#4338CA]" },
  { initials: "FL", bg: "bg-[#FEF3C7] text-[#D97706]" },
];

export default function SocialProof() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 pt-3 pb-1 border-t border-slate-200/60 w-full max-w-[640px]">
      {/* Overlapping Patient Avatars */}
      <div className="flex items-center -space-x-2 shrink-0 py-0.5">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white font-bold text-xs ${avatar.bg} shadow-xs shrink-0 select-none`}
          >
            {avatar.initials}
          </div>
        ))}
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white font-bold text-xs bg-teal-primary text-white shadow-xs shrink-0 select-none">
          +7k
        </div>
      </div>

      {/* Star Rating & Text */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-center text-[#F59E0B]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="font-bold text-navy text-sm sm:text-[14.5px]">
          4.9 / 5.0
        </span>
      </div>

      <span className="text-[12px] sm:text-[13px] text-slate-muted whitespace-normal sm:whitespace-nowrap">
        Trusted by 7,000+ international patients across 25+ countries
      </span>
    </div>
  );
}
