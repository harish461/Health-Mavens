import React from "react";
import { BadgeCheck, PiggyBank, TimerReset, Languages } from "lucide-react";

const benefits = [
  {
    id: "accredited",
    title: "JCI & NABH Accredited Partner Hospitals",
    icon: BadgeCheck,
  },
  {
    id: "savings",
    title: "60–80% Treatment Cost Savings",
    icon: PiggyBank,
  },
  {
    id: "waiting",
    title: "Zero Waiting Time Guaranteed",
    icon: TimerReset,
  },
  {
    id: "multilingual",
    title: "Multilingual Arabic & French Support",
    icon: Languages,
  },
];

export default function BenefitGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 sm:my-8 max-w-[640px]">
      {benefits.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl border border-[#E3ECF0] shadow-[0_2px_8px_rgba(11,35,69,0.03)] hover:shadow-[0_6px_16px_rgba(0,131,141,0.08)] hover:border-teal-primary/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EAF8F7] flex items-center justify-center shrink-0 border border-[#D5EFEF]">
              <IconComponent className="w-5 h-5 text-teal-primary" />
            </div>
            <span className="text-[13px] sm:text-[14px] font-bold text-navy leading-snug">
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
