import React from "react";
import { Play } from "lucide-react";

interface Testimonial {
  id: number;
  country: string;
  category: string;
  title: string;
  quote: string;
  patientName: string;
  outcome: string;
  gradientBg: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      country: "Kenya",
      category: "ORTHOPEDIC SURGERY",
      title: "Success story of a Knee Replacement Patient from Kenya",
      quote:
        '"I suffered excruciating knee pain for four years. Health Mavens organized robotic knee replacement in Delhi within 48 hours of my flight. I was walking pain-free on day two!"',
      patientName: "K. Mwangi",
      outcome: "Full Mobility Restored",
      gradientBg: "from-[#103E54] via-[#1A526E] to-[#256D93]",
    },
    {
      id: 2,
      country: "Iraq",
      category: "NEUROLOGY AND SPINE",
      title: "Iraqi Patient's Journey to India for Advanced Spine Treatment",
      quote:
        '"The Arabic-speaking coordinator accompanied us everywhere. The minimally invasive spine surgery was a miracle. Costs were 70% cheaper than private hospitals back home."',
      patientName: "Ahmed Al-Hassan",
      outcome: "Spine Healed",
      gradientBg: "from-[#0E3547] via-[#18465D] to-[#1E5D7B]",
    },
    {
      id: 3,
      country: "Mauritius",
      category: "CARDIAC SURGERY",
      title: "How a Mauritius Patient Found New Hope with CABG Treatment in India",
      quote:
        '"Quadruple bypass surgery seemed terrifying until Health Mavens handled my visa in 24 hours and booked me with the country\'s top heart surgeon. Forever grateful!"',
      patientName: "Devanand R.",
      outcome: "CABG Success",
      gradientBg: "from-[#163852] via-[#204E72] to-[#2B6896]",
    },
    {
      id: 4,
      country: "Iraq",
      category: "ONCOLOGY",
      title: "Right Hemithyroidectomy Success Stories from Iraq",
      quote:
        '"Accurate biopsy and complete surgical excision saved my vocal cords and health. The team at Health Mavens was with my daughter and me round the clock."',
      patientName: "Fatima Z.",
      outcome: "Cancer-Free Recovery",
      gradientBg: "from-[#133F53] via-[#1B5670] to-[#237092]",
    },
    {
      id: 5,
      country: "Mauritius",
      category: "NEUROLOGY AND SPINE",
      title: "Satisfied Patient from Mauritius for Spinal Injury Treatment",
      quote:
        '"I was bedridden following an accident. Thanks to endoscopic spine decompression and dedicated physical therapy, I regained total control and walk freely today."',
      patientName: "Jean-Paul B.",
      outcome: "Spine Reconstructed",
      gradientBg: "from-[#0C3246] via-[#164761] to-[#216184]",
    },
    {
      id: 6,
      country: "Oman",
      category: "ORTHOPEDIC SURGERY",
      title: "Happy Patient from Oman after a Total Hip Replacement Revision",
      quote:
        '"My previous hip surgery in another country failed. Health Mavens arranged a revision with a world-renowned orthopedic chair in Gurgaon. Pain-free for the first time in years."',
      patientName: "Tariq Al-Balushi",
      outcome: "Revision Success",
      gradientBg: "from-[#1A4259] via-[#255877] to-[#31739B]",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Eyebrow and Right Note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[11.5px] sm:text-xs font-bold text-teal-primary tracking-widest uppercase mb-2">
              PROVEN PATIENT OUTCOMES
            </p>
            <h2 className="text-[20px] sm:text-3xl lg:text-[36px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
              Real Experiences &ndash; Patient Testimonials
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-base text-slate-body max-w-2xl">
              Hear directly from patients from across Africa, the Middle East, and Indian Ocean who recovered with Health Mavens.
            </p>
          </div>

          <p className="text-xs sm:text-[13px] font-medium text-slate-muted shrink-0 self-start md:self-end">
            Over 7,000+ happy international smiles
          </p>
        </div>

        {/* 3-Columns Grid of 6 Video Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E7EDF3] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:border-[#D5E1ED] group"
            >
              <div>
                {/* Video Preview Thumbnail Box */}
                <div className="p-3 sm:p-3.5 pb-0">
                  <div
                    className={`relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-br ${item.gradientBg} flex items-center justify-center shadow-inner cursor-pointer`}
                  >
                    {/* Country Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#071830]/85 backdrop-blur-xs text-white text-[11px] font-semibold border border-white/10 select-none">
                      <svg
                        className="w-3.5 h-3.5 text-[#19B6B0]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" y1="22" x2="4" y2="15" />
                      </svg>
                      <span>{item.country}</span>
                    </div>

                    {/* Circular Play Button Overlay */}
                    <div className="w-12 h-12 rounded-full bg-white/95 text-teal-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>

                    {/* Bottom Dark Accent Bar */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-[#0B2345]" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 sm:p-6 pb-4">
                  {/* Category Tag */}
                  <span className="block text-[11px] font-bold tracking-wider text-teal-primary uppercase mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-[15px] sm:text-base font-bold text-navy tracking-tight leading-snug mb-2.5 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-xs sm:text-[13px] text-slate-muted leading-relaxed line-clamp-3">
                    {item.quote}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 py-3.5 border-t border-[#EDF2F7] flex items-center justify-between text-xs">
                <span className="font-bold text-navy text-xs sm:text-[13px]">
                  {item.patientName}
                </span>
                <span className="font-semibold text-teal-primary text-xs sm:text-[12.5px]">
                  {item.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
