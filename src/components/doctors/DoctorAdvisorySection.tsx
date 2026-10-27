"use client";

import React from "react";

interface AdvisoryStep {
  number: string;
  title: string;
  description: string;
}

const advisorySteps: AdvisoryStep[] = [
  {
    number: "01",
    title: "Clinical Experience & Super-Specialization",
    description:
      "Look for board-certified specialists with extensive international fellowship training and proven procedural volume in your specific condition.",
  },
  {
    number: "02",
    title: "Accredited Hospital Affiliation & Modern Tech",
    description:
      "Top surgeons practice in premier JCI and NABH accredited hospitals equipped with da Vinci robotic suites and dedicated surgical ICUs.",
  },
  {
    number: "03",
    title: "Prior Medical Opinion & Clear Treatment Line",
    description:
      "Share recent diagnostic scans to receive an unbiased medical opinion, recommended surgical approach, and realistic recovery timeline prior to travel.",
  },
  {
    number: "04",
    title: "Post-Treatment Follow-up & Continuous Care",
    description:
      "Receive itemized discharge summaries, prescribed medication guidance, and structured teleconsultations with your operating doctor after returning home.",
  },
];

export default function DoctorAdvisorySection() {
  return (
    <section className="w-full bg-[#FAFBFD] border-t border-slate-200/70 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-4 shadow-2xs">
            PATIENT ADVISORY GUIDE
          </div>

          {/* Heading */}
          <h2 className="text-[20px] sm:text-3xl lg:text-[38px] font-medium text-navy tracking-tight leading-snug sm:leading-tight mb-3">
            How to Choose the Best Doctor for Your Treatment in India
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Key clinical factors to evaluate before finalizing your medical specialist
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisorySteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number */}
                <span className="block text-2xl sm:text-[28px] font-bold text-[#00838D] mb-4">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-medium text-navy leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
