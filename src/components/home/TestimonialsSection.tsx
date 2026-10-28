"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight, Star, X, CheckCircle2, ShieldCheck } from "lucide-react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [activeStory, setActiveStory] = useState<Testimonial | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per page calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerPage);

  // Clamp index on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerPage, currentIndex, maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Handlers for Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Eyebrow and Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-teal-primary font-bold text-xs tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-teal-primary" />
              <span>PROVEN PATIENT OUTCOMES</span>
            </div>
            <h2 className="text-[20px] sm:text-3xl lg:text-[36px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
              Real Experiences &ndash; Patient Testimonials
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-base text-slate-body max-w-2xl">
              Hear directly from patients from across Africa, the Middle East, and Indian Ocean who recovered with Health Mavens.
            </p>
          </div>

          {/* Right Action: Counter and Nav Arrows */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
            <span className="text-xs sm:text-[13px] font-medium text-slate-muted hidden sm:inline-block">
              Over 7,000+ international smiles
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#D5E1ED] bg-white hover:bg-[#F2FAF9] hover:border-teal-primary/50 text-navy flex items-center justify-center shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-navy" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#D5E1ED] bg-white hover:bg-[#F2FAF9] hover:border-teal-primary/50 text-navy flex items-center justify-center shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-navy" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
            }}
          >

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
              >
                <div className="w-full bg-[#FAFCFD] border border-[#E7EDF3] rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:border-[#D5E1ED] hover:bg-white group">
                  <div>
                    {/* Video Preview Thumbnail Box */}
                    <div className="p-3 sm:p-3.5 pb-0">
                      <div
                        onClick={() => setActiveStory(item)}
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
                  <div className="px-5 sm:px-6 py-3.5 border-t border-[#EDF2F7] flex items-center justify-between text-xs bg-white/60">
                    <span className="font-bold text-navy text-xs sm:text-[13px]">
                      {item.patientName}
                    </span>
                    <span className="font-semibold text-teal-primary text-xs sm:text-[12.5px]">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-teal-primary"
                  : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video / Patient Story Modal */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#071830]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF8F7] text-[#00838D] text-xs font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Patient Recovery</span>
            </div>

            <h3 className="text-xl font-bold text-navy mb-2">
              {activeStory.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-slate-muted mb-4 pb-3 border-b border-slate-100">
              <span className="font-semibold text-navy">
                Patient: {activeStory.patientName}
              </span>
              <span>•</span>
              <span>Country: {activeStory.country}</span>
              <span>•</span>
              <span className="text-teal-primary font-bold">
                {activeStory.outcome}
              </span>
            </div>

            <p className="text-sm sm:text-[15px] text-slate-body leading-relaxed italic bg-[#F8FCFC] p-4 rounded-2xl border border-[#E3ECF0] mb-6">
              {activeStory.quote}
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#quote-form"
                onClick={() => setActiveStory(null)}
                className="px-6 py-2.5 rounded-full bg-teal-primary hover:bg-teal-dark text-white font-semibold text-sm transition-colors shadow-sm"
              >
                Consult Top Doctors
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

