"use client";

import React, { useMemo, useState } from "react";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import AyurvedaHeroSection from "@/components/ayurveda/AyurvedaHeroSection";
import AyurvedaDoshaSection from "@/components/ayurveda/AyurvedaDoshaSection";
import AyurvedaTreatmentCard, {
  AyurvedaTreatment,
} from "@/components/ayurveda/AyurvedaTreatmentCard";
import AyurvedaJourneySection from "@/components/ayurveda/AyurvedaJourneySection";
import AyurvedaFaqSection from "@/components/ayurveda/AyurvedaFaqSection";
import AyurvedaSidebarForm from "@/components/ayurveda/AyurvedaSidebarForm";
import AyurvedaDetailModal from "@/components/ayurveda/AyurvedaDetailModal";
import {
  ayurvedaTreatmentsData,
  getDoshas,
  Dosha,
} from "@/components/ayurveda/ayurvedaData";
import {
  LayoutGrid,
  Bone,
  Brain,
  Droplets,
  Activity,
  Wind,
  X,
  Leaf,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Phone,
} from "lucide-react";

const categories = [
  { label: "All Treatments", icon: LayoutGrid },
  { label: "Pain & Joint Care", icon: Bone },
  { label: "Neurological & Sleep", icon: Brain },
  { label: "Detox & Rejuvenation", icon: Droplets },
  { label: "Lifestyle & Metabolic", icon: Activity },
  { label: "Skin & Respiratory", icon: Wind },
];

const PAGE_SIZE = 8;

export default function AyurvedaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Treatments");
  const [activeDosha, setActiveDosha] = useState<Dosha | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedTreatment, setSelectedTreatment] = useState<AyurvedaTreatment | null>(null);
  const [inquiryTitle, setInquiryTitle] = useState<string | undefined>();

  const scrollToExplorer = () => {
    document
      .getElementById("treatments-explorer")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const matchesSearchAndDosha = (t: AyurvedaTreatment) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.therapies.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.overview.toLowerCase().includes(q);
    const matchesDosha = !activeDosha || getDoshas(t).includes(activeDosha);
    return matchesSearch && matchesDosha;
  };

  const filtered = useMemo(
    () =>
      ayurvedaTreatmentsData.filter(
        (t) =>
          (activeCategory === "All Treatments" || t.category === activeCategory) &&
          matchesSearchAndDosha(t)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchQuery, activeCategory, activeDosha]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(({ label }) => {
      counts[label] = ayurvedaTreatmentsData.filter(
        (t) => (label === "All Treatments" || t.category === label) && matchesSearchAndDosha(t)
      ).length;
    });
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, activeDosha]);

  const doshaCounts = useMemo(
    () =>
      (["Vata", "Pitta", "Kapha"] as Dosha[]).reduce(
        (acc, d) => {
          acc[d] = ayurvedaTreatmentsData.filter((t) => getDoshas(t).includes(d)).length;
          return acc;
        },
        {} as Record<Dosha, number>
      ),
    []
  );

  const visibleTreatments = filtered.slice(0, visibleCount);
  const hasFilters = Boolean(searchQuery.trim()) || activeDosha !== null || activeCategory !== "All Treatments";

  const resetPaging = () => setVisibleCount(PAGE_SIZE);

  const clearAll = () => {
    setSearchQuery("");
    setActiveDosha(null);
    setActiveCategory("All Treatments");
    resetPaging();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopContactBar />
      <MainHeader />

      <main className="flex-1 bg-[#FBF8F2] overflow-x-clip">
        {/* 1. Split hero with collage */}
        <AyurvedaHeroSection
          searchQuery={searchQuery}
          setSearchQuery={(v) => {
            setSearchQuery(v);
            resetPaging();
          }}
          onExplore={scrollToExplorer}
        />

        {/* 2. Dosha explorer */}
        <AyurvedaDoshaSection
          activeDosha={activeDosha}
          doshaCounts={doshaCounts}
          onSelectDosha={(d) => {
            setActiveDosha(d);
            setActiveCategory("All Treatments");
            resetPaging();
            scrollToExplorer();
          }}
        />

        {/* 3. Treatment explorer */}
        <section id="treatments-explorer" className="scroll-mt-24 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#B08A2E] mb-3">
                  Therapy Explorer
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25]">
                  Find the right treatment for you
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Showing{" "}
                <strong className="text-[#174A3A]">{filtered.length}</strong> of{" "}
                {ayurvedaTreatmentsData.length} authentic therapies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Category rail */}
              <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-5">
                <div className="flex lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                  {categories.map(({ label, icon: Icon }) => {
                    const isActive = activeCategory === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => {
                          setActiveCategory(label);
                          resetPaging();
                        }}
                        className={`group flex items-center gap-3 shrink-0 lg:w-full px-3.5 py-2.5 lg:py-3 rounded-2xl text-left transition-all cursor-pointer border ${
                          isActive
                            ? "bg-[#174A3A] border-[#174A3A] text-white shadow-md"
                            : "bg-white border-[#EFE7D8] text-slate-700 hover:border-[#174A3A]/30 hover:text-[#174A3A]"
                        }`}
                      >
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive ? "bg-white/15" : "bg-[#F5F1E8]"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-[#E9D8A6]" : "text-[#B08A2E]"}`} />
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold whitespace-nowrap lg:whitespace-normal flex-1">
                          {label}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isActive ? "bg-white/15 text-white" : "bg-[#F5F1E8] text-slate-500"
                          }`}
                        >
                          {categoryCounts[label]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Ask a Vaidya card */}
                <div className="hidden lg:block rounded-2xl bg-gradient-to-br from-[#F5ECD7] to-[#FBF8F2] border border-[#E8DCC2] p-5">
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm">
                    <MessageCircle className="w-5 h-5 text-[#174A3A]" />
                  </span>
                  <h3 className="text-[15px] font-semibold text-navy mb-1">Not sure what you need?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Share your reports and a Vaidya will recommend the right therapy — free.
                  </p>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174A3A] hover:underline"
                  >
                    Ask a Vaidya →
                  </a>
                </div>
              </aside>

              {/* Cards */}
              <div className="lg:col-span-9">
                {hasFilters && (
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-xs font-semibold text-slate-500">Active filters:</span>
                    {searchQuery.trim() && (
                      <FilterChip label={`“${searchQuery}”`} onClear={() => setSearchQuery("")} />
                    )}
                    {activeDosha && (
                      <FilterChip label={`${activeDosha} dosha`} onClear={() => setActiveDosha(null)} />
                    )}
                    {activeCategory !== "All Treatments" && (
                      <FilterChip
                        label={activeCategory}
                        onClear={() => setActiveCategory("All Treatments")}
                      />
                    )}
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-xs font-semibold text-teal-primary hover:underline ml-1 cursor-pointer"
                    >
                      Clear all
                    </button>
                  </div>
                )}

                {filtered.length === 0 ? (
                  <div className="bg-white border border-dashed border-[#D9C9A3] rounded-3xl p-12 text-center">
                    <Leaf className="w-12 h-12 text-[#174A3A] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-navy mb-1.5">
                      No matching treatments found
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-5">
                      Try another keyword or clear your filters to explore all therapies.
                    </p>
                    <button
                      type="button"
                      onClick={clearAll}
                      className="px-5 py-2.5 bg-[#174A3A] text-white text-xs font-semibold rounded-xl cursor-pointer"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {visibleTreatments.map((t) => (
                        <AyurvedaTreatmentCard
                          key={t.id}
                          treatment={t}
                          onSelect={(item) => {
                            setSelectedTreatment(item);
                            setInquiryTitle(item.title);
                          }}
                          onEnquire={(item) => setInquiryTitle(item.title)}
                        />
                      ))}
                    </div>

                    {visibleCount < filtered.length && (
                      <div className="text-center mt-10">
                        <button
                          type="button"
                          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#D9C9A3] text-sm font-semibold text-[#174A3A] hover:bg-[#174A3A] hover:text-white hover:border-[#174A3A] transition-colors cursor-pointer"
                        >
                          Show {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more treatments
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Healing journey timeline */}
        <AyurvedaJourneySection />

        {/* 5. Why India + FAQ accordion */}
        <AyurvedaFaqSection />

        {/* 6. Consultation panel */}
        <section className="pb-16 sm:pb-20 lg:pb-24 bg-[#FBF8F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#174A3A] via-[#123B2E] to-[#0B2345] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full border border-dashed border-[#E9D8A6]/15 pointer-events-none" />

              <div className="relative lg:col-span-7 text-white">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#E9D8A6] mb-3">
                  Start Today
                </span>
                <h2 className="text-[20px] sm:text-[28px] font-bold tracking-tight leading-snug sm:leading-[1.25] mb-4">
                  Begin your healing journey with a free Vaidya consultation
                </h2>
                <p className="text-[14px] sm:text-base text-white/70 leading-relaxed mb-7 max-w-xl">
                  Tell us about your health concern. We&apos;ll match you with the right Ayurvedic
                  centre and share a transparent, all-inclusive package — at no cost to you.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Personalized Prakriti assessment",
                    "Transparent package pricing",
                    "Visa, stay & airport assistance",
                    "Post-treatment follow-up care",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#E9D8A6] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+18005550199"
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-[#E9D8A6]" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-white/60">
                      Prefer to talk?
                    </span>
                    <span className="block text-base font-semibold text-white">
                      +1 (800) 555-0199
                    </span>
                  </span>
                </a>
              </div>

              <div className="relative lg:col-span-5">
                <AyurvedaSidebarForm selectedTreatmentTitle={inquiryTitle} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />

      <AyurvedaDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </div>
  );
}

function FilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-[#EEF5F0] border border-[#D6E7DC] text-xs font-semibold text-[#174A3A]">
      {label}
      <button
        type="button"
        onClick={onClear}
        aria-label={`Remove ${label} filter`}
        className="w-5 h-5 rounded-full hover:bg-[#174A3A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
