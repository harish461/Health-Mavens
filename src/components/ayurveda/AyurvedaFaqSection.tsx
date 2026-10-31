"use client";

import React, { useState } from "react";
import { Plus, Minus, Leaf, ShieldCheck, UserRound, Plane } from "lucide-react";

const whyPoints = [
  {
    icon: Leaf,
    title: "Authentic Kerala Lineage",
    text: "Therapies follow classical texts — Charaka & Sushruta Samhita — with freshly prepared herbal oils.",
  },
  {
    icon: ShieldCheck,
    title: "Accredited Wellness Centres",
    text: "NABH-certified Ayurvedic hospitals and retreats with hygienic, standardized procedures.",
  },
  {
    icon: UserRound,
    title: "Prakriti-Based Personal Plans",
    text: "No one-size-fits-all packages — every protocol is built around your constitution.",
  },
  {
    icon: Plane,
    title: "End-to-End Travel Support",
    text: "Medical visa letters, airport pickup, stay and interpreters arranged by Health Mavens.",
  },
];

const faqItems = [
  {
    question: "What is Panchakarma?",
    answer:
      "Panchakarma is the ultimate Ayurvedic detox program. It consists of five traditional cleansing therapies (Vamana, Virechana, Basti, Nasya, and Raktamokshana) designed to remove accumulated toxins (Ama) from the body.",
  },
  {
    question: "How long do Ayurvedic treatments take to show results?",
    answer:
      "Ayurvedic treatments address the root cause of ailments rather than just suppressing symptoms. While minor relief can be felt within days, chronic conditions typically require 2 to 3 weeks of intensive therapies combined with lifestyle changes.",
  },
  {
    question: "Are the treatments safe and certified?",
    answer:
      "Yes. All treatments are conducted under the supervision of qualified Ayurvedic doctors (BAMS/MD) using standardized, natural herbal formulations and traditional therapy procedures.",
  },
  {
    question: "Do I need to stop my current medication?",
    answer:
      "Never stop prescribed medication on your own. Our Vaidyas review your reports and coordinate with your physician so Ayurvedic care complements your existing treatment safely.",
  },
  {
    question: "What is included in an Ayurveda package?",
    answer:
      "Packages typically include Vaidya consultations, all daily therapies, herbal medicines, a customized Sattvic diet, accommodation at the retreat, yoga & meditation sessions, and airport transfers.",
  },
  {
    question: "Can a family member accompany me?",
    answer:
      "Yes. Most partner retreats offer companion stays, and we can include wellness or rejuvenation sessions for your companion at a reduced rate.",
  },
];

export default function AyurvedaFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FBF8F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Why choose */}
        <div className="lg:col-span-5">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#B08A2E] mb-3">
            Why India
          </span>
          <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-4">
            The birthplace of the &ldquo;Science of Life&rdquo;
          </h2>
          <p className="text-[14px] sm:text-base text-slate-600 leading-relaxed mb-8">
            Ayurveda offers a holistic approach to wellness. In India, you receive authentic
            treatment from accredited Ayurvedic resorts and clinics managed by experienced Vaidyas.
          </p>

          <div className="space-y-4">
            {whyPoints.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EFE7D8] hover:border-[#D9C9A3] transition-colors"
              >
                <span className="w-11 h-11 rounded-xl bg-[#174A3A] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#E9D8A6]" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-navy mb-0.5">{title}</h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="lg:col-span-7">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#B08A2E] mb-3">
            Good to Know
          </span>
          <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqItems.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? "bg-white border-[#174A3A]/30 shadow-card"
                      : "bg-white/60 border-[#EFE7D8] hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold tabular-nums ${
                          isOpen ? "text-[#B08A2E]" : "text-slate-400"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-navy">
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#174A3A] text-white" : "bg-[#F5F1E8] text-[#174A3A]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 sm:px-6 pb-5 sm:pl-[3.25rem] -mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

