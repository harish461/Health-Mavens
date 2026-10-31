"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqSection() {
  // Allow toggling open state
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "What is medical tourism?",
      answer:
        "Medical tourism refers to traveling outside your home country to access world-class medical, surgical, dental, or wellness treatments. It allows patients to receive advanced care from internationally accredited hospitals and renowned specialists at a fraction of the cost, accompanied by complete travel and concierge support.",
    },
    {
      id: 2,
      question: "Why do patients choose medical tourism?",
      answer:
        "Patients opt for medical tourism primarily due to significant cost savings (typically 60% to 80% lower than in the US, UK, or private facilities in the Middle East and Africa), zero waiting periods for critical surgeries, access to cutting-edge medical technologies (such as robotic-assisted surgery and CyberKnife), and premier JCI & NABH accredited hospitals.",
    },
    {
      id: 3,
      question: "Is India popular for medical tourism?",
      answer:
        "Yes, India is recognized globally as one of the world's leading healthcare destinations, welcoming hundreds of thousands of international patients each year. The country offers JCI & NABH accredited hospitals, internationally trained and board-certified doctors, English-fluent medical staff, and state-of-the-art clinical infrastructure at highly transparent and affordable package costs.",
    },
    {
      id: 4,
      question: "What treatments are most common in medical tourism?",
      answer:
        "The most sought-after treatments include Orthopedic surgery (joint replacements, arthroscopy), Cardiac surgery (CABG bypass, valve repairs), Oncology (surgical oncology, radiation, chemotherapy), Neurology and Spine surgeries, Bariatric surgery, Cosmetic & Reconstructive procedures, Dental restorations, and Organ Transplants.",
    },
    {
      id: 5,
      question: "How much can patients save through medical tourism?",
      answer:
        "Patients generally save between 60% and 85% on surgical and diagnostic procedures compared to costs in North America, Europe, and regional private clinics. Even after including airfare, priority medical visas, and premium accommodations for the patient and companion, total expenditures remain substantially lower.",
    },
    {
      id: 6,
      question: "Do patients need a medical visa for treatment abroad?",
      answer:
        "Yes, traveling for medical treatment in India requires an Indian Medical Visa (or e-Medical Visa). Health Mavens facilitates this process by obtaining official Medical Visa Invitation Letters from your selected accredited hospital within 24 to 48 hours for both the patient and accompanying family attendants.",
    },
    {
      id: 7,
      question: "How do language barriers affect medical tourism?",
      answer:
        "Language is never an obstacle with Health Mavens. We provide dedicated multilingual care coordinators fluent in Arabic, French, Swahili, Russian, and English. Your coordinator assists you at every step—from arrival and doctor consultations to discharge and daily hospital translation.",
    },
    {
      id: 8,
      question: "Who helps patients plan their medical trip?",
      answer:
        "Health Mavens manages your complete journey from start to finish at zero facilitation fee to you. We arrange multi-hospital expert opinions, pre-negotiated treatment packages, visa assistance, complimentary airport transfers, lodging, hospital admission, and post-discharge tele-health consultations.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#FAFBFD] py-14 sm:py-20 lg:py-24 border-t border-[#EDF3F8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11.5px] sm:text-xs font-bold text-teal-primary tracking-widest uppercase mb-2">
            EVERYTHING YOU NEED TO KNOW
          </p>
          <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25]">
            Helpful Answers &ndash; FAQ&apos;s About Medical Tourism
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-base text-slate-body leading-relaxed">
            Clear, transparent answers to make your overseas medical journey stress-free and predictable.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-[16px] transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-teal-primary/40 shadow-xs ring-1 ring-teal-primary/20"
                    : "border-[#E5EDF4] hover:border-[#D0E0EC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="font-bold text-navy text-sm sm:text-[15.5px] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 text-teal-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-5.5 text-xs sm:text-[13.5px] text-slate-muted leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
