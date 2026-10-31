"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import HospitalsHeroSection from "@/components/hospitals/HospitalsHeroSection";
import HospitalCard, { Hospital } from "@/components/hospitals/HospitalCard";
import OfficialConciergeCard from "@/components/doctors/OfficialConciergeCard";
import HospitalDetailModal from "@/components/hospitals/HospitalDetailModal";
import { ChevronDown, Building2 } from "lucide-react";

const hospitalsData: Hospital[] = [
  {
    id: 1,
    name: "Medanta – The Medicity",
    subtitle: "Multi-Super Speciality Quaternary Care & Robotic Surgery Center",
    image: "/images/hospitals/medanta.jpg",
    city: "New Delhi",
    address: "CH Bakhtawar Singh Rd, Sector 38, Gurgaon / NCR",
    airportDistance: "18 km (20 mins) from IGI Airport",
    beds: "1,250+ Inpatient Beds",
    operationTheatres: "36 Modular OTs",
    rating: 4.9,
    reviewsCount: 580,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "Da Vinci Xi 4th Gen Robotic Surgical System",
      "Brain Suite & O-Arm 3D Navigation Imaging",
      "Over 350 dedicated Critical Care / ICU Beds",
      "Executive International Patient Care Wing",
    ],
    specialtyTag: "Robotic Joint & Spine Center",
  },
  {
    id: 2,
    name: "Artemis Hospital",
    subtitle: "Joint Reconstruction & Complex Trauma Institute",
    image: "/images/hospitals/artemis.jpg",
    city: "New Delhi",
    address: "Sector 51, Gurgaon / NCR, New Delhi Region",
    airportDistance: "21 km (25 mins) from IGI Airport",
    beds: "400+ Inpatient Beds",
    operationTheatres: "12 Ultra-Clean OTs",
    rating: 4.8,
    reviewsCount: 390,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "First JCI Accredited Hospital in Gurgaon / NCR",
      "High-precision computer navigated knee arthroplasty",
      "Dedicated Orthopedic Rehabilitation & Hydrotherapy",
      "Personalized Foreign Patient Assistance Desk",
    ],
    specialtyTag: "Arthroscopy & Sports Medicine",
  },
  {
    id: 3,
    name: "Aakash Healthcare Super Speciality",
    subtitle: "Orthopedic, Joint Replacement & Minimally Invasive Spine Care",
    image: "/images/hospitals/artemis.jpg",
    city: "New Delhi",
    address: "Road No 201, Sector 3, Dwarka, New Delhi",
    airportDistance: "11 km (15 mins) closest to IGI Airport",
    beds: "230+ Inpatient Beds",
    operationTheatres: "8 Modular OTs",
    rating: 4.9,
    reviewsCount: 310,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "Closest premier tertiary hospital to New Delhi Airport",
      "Pioneers in Mako Robotic Arm-assisted Total Knee Replacement",
      "Dedicated 24/7 Orthopedic Emergency & Polytrauma Unit",
      "Direct Airport Chauffeur & Foreign Exchange Assistance",
    ],
    specialtyTag: "Joint Replacement Center",
  },
  {
    id: 4,
    name: "Fortis Memorial Research Institute (FMRI)",
    subtitle: "Next-Gen Quaternary Healthcare Destination",
    image: "/images/hospitals/fortis.jpg",
    city: "New Delhi",
    address: "Sector 44, Opposite HUDA City Centre, Gurgaon / NCR",
    airportDistance: "17 km (20 mins) from IGI Airport",
    beds: "1,000+ Bed Capacity",
    operationTheatres: "15 Advanced OTs",
    rating: 4.9,
    reviewsCount: 510,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "Ranked Top 2 globally for technologically advanced hospitals",
      "Full robotic arthroplasty & spine stealth navigation",
      "Multilingual concierge team (Arabic, French, Russian, Swahili)",
      "Luxury in-room guest accommodations for international attendants",
    ],
    specialtyTag: "Complex Spine & Robotic Ortho",
  },
  {
    id: 5,
    name: "Max Super Speciality Hospital, Saket",
    subtitle: "Premier Tertiary Hospital & Advanced Bone Care Center",
    image: "/images/hospitals/max.jpg",
    city: "New Delhi",
    address: "1, 2, Press Enclave Marg, Saket, New Delhi",
    airportDistance: "14 km (22 mins) from IGI Airport",
    beds: "530+ Inpatient Beds",
    operationTheatres: "16 Advanced OTs",
    rating: 4.9,
    reviewsCount: 460,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "Asia's foremost robotic partial & total knee preservation unit",
      "Comprehensive surgical oncology & orthopedic tumor board",
      "Zero-infection laminar airflow surgical suites",
      "Dedicated International Patient Lounge with prayer rooms",
    ],
    specialtyTag: "Bone & Joint Center",
  },
  {
    id: 6,
    name: "Indraprastha Apollo Hospitals",
    subtitle: "Flagship Medical Center & Multi-Organ Excellence",
    image: "/images/hospitals/medanta.jpg",
    city: "New Delhi",
    address: "Sarita Vihar, Delhi-Mathura Road, New Delhi",
    airportDistance: "22 km (30 mins) from IGI Airport",
    beds: "710+ Inpatient Beds",
    operationTheatres: "22 Modular OTs",
    rating: 4.8,
    reviewsCount: 620,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "First hospital in India to receive prestigious JCI accreditation (2005)",
      "Pioneered over 150,000 orthopedic & cardiac procedures",
      "Comprehensive in-house diagnostic radiology (3T MRI, 128-slice CT)",
      "Dedicated Visa facilitation desk & FRRO registration support",
    ],
    specialtyTag: "Pioneer Medical Hub",
  },
  {
    id: 7,
    name: "BLK-Max Super Speciality Hospital",
    subtitle: "Tertiary Care Hospital & Arthroscopy Center",
    image: "/images/hospitals/fortis.jpg",
    city: "New Delhi",
    address: "Pusa Road, Karol Bagh, Central New Delhi",
    airportDistance: "16 km (25 mins) from IGI Airport",
    beds: "650+ Inpatient Beds",
    operationTheatres: "18 Modular OTs",
    rating: 4.8,
    reviewsCount: 380,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "One of the largest private sector hospitals in NCR Delhi",
      "Advanced sports medicine & revision arthroplasty program",
      "Modern critical care units with 1:1 patient-to-nurse ratio",
      "Direct international patient coordination office",
    ],
    specialtyTag: "Advanced Ortho & Trauma",
  },
  {
    id: 8,
    name: "Manipal Hospital, Dwarka",
    subtitle: "High-Precision Quaternary Care Facility",
    image: "/images/hospitals/artemis.jpg",
    city: "New Delhi",
    address: "Sector 6, Dwarka, New Delhi",
    airportDistance: "10 km (14 mins) from IGI Airport",
    beds: "380+ Inpatient Beds",
    operationTheatres: "13 Modular OTs",
    rating: 4.9,
    reviewsCount: 340,
    accreditations: ["JCI Accredited", "NABH Certified"],
    features: [
      "State-of-the-art infrastructure built to international standards",
      "Robotic knee replacement with real-time soft tissue balancing",
      "Ultra-modern ICU infrastructure and rapid recovery wards",
      "Complete end-to-end medical tourism liaison services",
    ],
    specialtyTag: "Precision Robotic Care",
  },
];

function HospitalsDirectoryContent() {
  const searchParams = useSearchParams();
  const initialSpecialty = searchParams.get("specialty") || "Orthopedic Surgery";

  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [city, setCity] = useState("New Delhi");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Modal State
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [modalMode, setModalMode] = useState<"details" | "estimate" | null>(null);

  // Filtered & sorted hospitals
  const displayedHospitals = useMemo(() => {
    let result = hospitalsData.filter((hosp) => {
      const matchCity =
        city === "All India" || hosp.city.toLowerCase() === city.toLowerCase();
      const matchSearch =
        !searchQuery ||
        hosp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hosp.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hosp.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCity && matchSearch;
    });

    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      result = [...result].sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [city, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen">
      {/* First Section: Hero Filter Section matching user screenshot */}
      <HospitalsHeroSection
        specialty={specialty}
        setSpecialty={setSpecialty}
        city={city}
        setCity={setCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        hospitalsCount={displayedHospitals.length}
      />

      {/* Second Section: Hospital Directory & Concierge Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Results Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-200/90 mb-7">
          <div className="text-sm sm:text-[15px] text-slate-700">
            Showing{" "}
            <strong className="font-bold text-navy">
              {displayedHospitals.length} Certified {specialty.replace(" Surgery", "")} Hospitals
            </strong>{" "}
            in India
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">Sort by:</span>
            <div className="relative inline-flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pr-5 py-1 font-bold text-navy bg-transparent cursor-pointer focus:outline-none text-xs sm:text-sm"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-600 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Hospital Cards */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {displayedHospitals.length === 0 ? (
              <div className="bg-white border border-[#E5EDF4] rounded-2xl p-12 text-center max-w-xl mx-auto">
                <Building2 className="w-12 h-12 text-teal-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy mb-2">No matching hospitals found</h3>
                <p className="text-xs sm:text-sm text-slate-muted mb-6">
                  Try adjusting your city or search keywords to view accredited medical centers.
                </p>
                <button
                  onClick={() => {
                    setCity("New Delhi");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 bg-teal-primary text-white text-xs font-semibold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              displayedHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  onBookEstimate={(hosp) => {
                    setSelectedHospital(hosp);
                    setModalMode("estimate");
                  }}
                  onViewDetails={(hosp) => {
                    setSelectedHospital(hosp);
                    setModalMode("details");
                  }}
                />
              ))
            )}
          </div>

          {/* Right Column (4 cols): Sticky Official Concierge Form Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <OfficialConciergeCard
              prefilledDoctor={selectedHospital ? `${selectedHospital.name} (Hospital Estimate)` : undefined}
            />
          </div>
        </div>
      </section>

      {/* Third Section: Hospital Advisory Guide */}
      <section className="w-full bg-white border-t border-slate-200/70 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] mb-4 shadow-2xs">
              HOSPITAL SELECTION STANDARDS
            </div>
            <h2 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-3">
              How We Benchmark Top Hospitals in India
            </h2>
            <p className="text-[14px] sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our clinical advisory committee audits each hospital on rigorous international quality metrics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300">
              <span className="block text-2xl sm:text-[28px] font-bold text-[#00838D] mb-4">01</span>
              <h3 className="text-base sm:text-[17px] font-medium text-navy leading-snug mb-3">
                Global Accreditation Audit
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                We only partner with centers holding Joint Commission International (JCI USA) and NABH gold certifications.
              </p>
            </div>

            <div className="bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300">
              <span className="block text-2xl sm:text-[28px] font-bold text-[#00838D] mb-4">02</span>
              <h3 className="text-base sm:text-[17px] font-medium text-navy leading-snug mb-3">
                Modern Robotic Surgical Suites
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                Equipped with cutting-edge Mako &amp; Da Vinci systems for sub-millimeter surgical precision and faster recovery.
              </p>
            </div>

            <div className="bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300">
              <span className="block text-2xl sm:text-[28px] font-bold text-[#00838D] mb-4">03</span>
              <h3 className="text-base sm:text-[17px] font-medium text-navy leading-snug mb-3">
                Zero Facility Markups &amp; Direct Billing
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                Hospital payments are billed directly by the hospital administration. No hidden broker markups or fees.
              </p>
            </div>

            <div className="bg-[#FAFBFD] rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-card hover:border-teal-primary/40 hover:-translate-y-1 transition-all duration-300">
              <span className="block text-2xl sm:text-[28px] font-bold text-[#00838D] mb-4">04</span>
              <h3 className="text-base sm:text-[17px] font-medium text-navy leading-snug mb-3">
                Dedicated Foreign Patient Wing
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                Private international lounges, translation in 6 languages, currency exchange, and medical visa facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      <HospitalDetailModal
        hospital={selectedHospital}
        mode={modalMode}
        onClose={() => {
          setSelectedHospital(null);
          setModalMode(null);
        }}
      />
    </div>
  );
}

export default function HospitalsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopContactBar />
      <MainHeader />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">
              Loading accredited hospitals...
            </div>
          }
        >
          <HospitalsDirectoryContent />
        </Suspense>
      </main>
      <MainFooter />
    </div>
  );
}
