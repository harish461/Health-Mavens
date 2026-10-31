"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import DoctorCard, { Doctor } from "@/components/doctors/DoctorCard";
import OfficialConciergeCard from "@/components/doctors/OfficialConciergeCard";
import DoctorDetailModal from "@/components/doctors/DoctorDetailModal";
import DoctorAdvisorySection from "@/components/doctors/DoctorAdvisorySection";
import {
  ShieldCheck,
  ChevronRight,
  BriefcaseMedical,
  MapPin,
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const specialtiesList = [
  "Orthopedic Surgery",
  "Cardiology",
  "Gynecology",
  "Neurology",
  "Oncology",
  "Urology",
  "Gastroenterology",
  "Eye Surgery",
  "ENT",
  "Dental Care",
  "Cosmetic Surgery",
  "Pediatrics",
  "Transplant Surgeries",
  "Hematology",
  "Pulmonology",
  "Robotic Orthopedic",
  "Cardiac Surgery",
  "Neurology and Spine",
  "Nephrology",
  "Bariatric Surgery",
  "Dermatology",
  "Robotic Cardiac",
  "Vascular Surgery",
];

const citiesList = [
  "All India",
  "New Delhi",
  "Gurgaon / NCR",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
];

const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Abhishek Kumar Sambharia",
    roleSubtitle: "Consultant Orthopedic Surgeon – Sports Injuries & Arthroscopy",
    bio: "Dr. Abhishek Kumar Sambharia, orthopedic surgeon in Delhi, India, with 12+ years of experience. Offers sports injury care, arthroscopy & rehab programs.",
    badge: "JCI Affiliated",
    image: "/images/doctors/dr-abhishek.jpg",
    education: "MBBS | MS | Fellowship",
    experience: "12+ years",
    experienceYearsNum: 12,
    hospital: "Aakash Healthcare, Dwarka",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 4.9,
    reviewsCount: 148,
  },
  {
    id: 2,
    name: "Dr. Bharat Bahre",
    roleSubtitle: "Consultant Orthopedic Surgeon – Spine & Trauma",
    bio: "Dr. Bharat Bahre, orthopedic spine surgeon in Delhi, India, with 15+ years of experience. Offers spine surgery, trauma care & back pain treatment.",
    badge: "Spine Super-Specialist",
    image: "/images/doctors/dr-bharat.jpg",
    education: "MBBS | MS | Fellowship",
    experience: "15+ years",
    experienceYearsNum: 15,
    hospital: "Aakash Healthcare, Dwarka",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 4.9,
    reviewsCount: 195,
  },
  {
    id: 3,
    name: "Dr. Ashok Rajgopal",
    roleSubtitle: "Chairman – Bone & Joint Institute",
    bio: "Padma Shri awardee Dr. Ashok Rajgopal with 44+ years of surgical excellence. Performed over 35,000 successful knee surgeries and robotic total joint replacements.",
    badge: "Padma Shri Awardee",
    image: "/images/doctors/dr-rajgopal.jpg",
    education: "MBBS | MS | MCh | FRCS (Edin)",
    experience: "44+ years",
    experienceYearsNum: 44,
    hospital: "Medanta - The Medicity",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 5.0,
    reviewsCount: 420,
  },
  {
    id: 4,
    name: "Dr. I.P.S. Oberoi",
    roleSubtitle: "Director & Head – Joint Reconstruction & Arthroscopy",
    bio: "Dr. I.P.S. Oberoi, renowned arthroscopy & joint reconstruction surgeon with 32+ years of experience. Expert in complex primary and revision knee & hip arthroplasty.",
    badge: "JCI Affiliated",
    image: "/images/doctors/dr-oberoi.jpg",
    education: "MBBS | MS (Ortho) | MCh (Germany)",
    experience: "32+ years",
    experienceYearsNum: 32,
    hospital: "Artemis Hospital",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 4.8,
    reviewsCount: 290,
  },
  {
    id: 5,
    name: "Dr. Harshavardhan Hegde",
    roleSubtitle: "Senior Director – Orthopedics & Complex Spine Surgery",
    bio: "Dr. Harshavardhan Hegde brings 35+ years of global experience in complex scoliosis deformities, spinal reconstructions, and advanced revision joint surgeries.",
    badge: "Spine Super-Specialist",
    image: "/images/doctors/dr-hegde.jpg",
    education: "MBBS | MS | FRCS | Fellowship (UK)",
    experience: "35+ years",
    experienceYearsNum: 35,
    hospital: "Fortis Memorial Research Institute",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 4.9,
    reviewsCount: 310,
  },
  {
    id: 6,
    name: "Dr. Prerna Mohan",
    roleSubtitle: "Senior Consultant – Pediatric Orthopedics & Arthroscopy",
    bio: "Dr. Prerna Mohan specializes in pediatric orthopedic conditions, joint preservation, and sports rehabilitation with over 18+ years of dedicated clinical practice.",
    badge: "JCI Affiliated",
    image: "/images/doctors/dr-prerna.jpg",
    education: "MBBS | MS (Ortho) | DNB",
    experience: "18+ years",
    experienceYearsNum: 18,
    hospital: "Max Super Speciality Hospital",
    city: "New Delhi",
    specialty: "Orthopedic Surgery",
    rating: 4.9,
    reviewsCount: 165,
  },
];

function DoctorsDirectoryContent() {
  const searchParams = useSearchParams();
  const initialSpecialty = searchParams.get("specialty") || "Orthopedic Surgery";

  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedCity, setSelectedCity] = useState("All India");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modal State
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [modalMode, setModalMode] = useState<"details" | "appointment" | null>(null);

  // Filtered and sorted doctors
  const displayedDoctors = useMemo(() => {
    let result = doctorsData.filter((doc) => {
      const matchSpecialty =
        !selectedSpecialty ||
        selectedSpecialty === "Orthopedic Surgery" ||
        doc.specialty.toLowerCase() === selectedSpecialty.toLowerCase();
      const matchCity =
        !selectedCity ||
        selectedCity === "All India" ||
        doc.city.toLowerCase() === selectedCity.toLowerCase();
      const matchSearch =
        !searchQuery ||
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.roleSubtitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchSpecialty && matchCity && matchSearch;
    });

    // Sorting
    if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      result = [...result].sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (sortBy === "years-desc") {
      result = [...result].sort((a, b) => b.experienceYearsNum - a.experienceYearsNum);
    }

    return result;
  }, [selectedSpecialty, selectedCity, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen">
      {/* Hero Header Area */}
      <section className="w-full bg-white pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-[#EDF3F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-6 font-medium"
          >
            <Link href="/" className="hover:text-teal-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-500">Medical Specialists</span>
            <span className="text-slate-300">›</span>
            <span className="text-navy font-semibold">{selectedSpecialty}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-teal-primary/30 bg-teal-soft/40 text-teal-primary text-xs font-semibold mb-4 select-none">
            <ShieldCheck className="w-4 h-4 text-teal-primary" />
            <span>Medical Specialists</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[20px] sm:text-[28px] font-bold text-navy tracking-tight leading-snug sm:leading-[1.25] mb-4">
            Best {selectedSpecialty} Doctors in India
          </h1>

          {/* Description */}
          <p className="text-slate-body text-[14px] sm:text-base leading-relaxed max-w-3xl mb-9">
            Connect with top-tier internationally accredited surgeons and medical consultants. Receive
            transparent second opinions, tailored robotic joint replacements, complex spine
            reconstructions, and world-class inpatient rehabilitation.
          </p>

          {/* Filter Bar Card */}
          <div className="bg-white border border-[#E5EDF4] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Field 1: Specialty */}
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  Specialty
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <BriefcaseMedical className="w-4 h-4 text-slate-500" />
                  </div>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all appearance-none cursor-pointer"
                  >
                    {specialtiesList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Field 2: City */}
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  City
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all appearance-none cursor-pointer"
                  >
                    {citiesList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Field 3: Doctor or Hospital Search */}
              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  Doctor or Hospital
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search doctor by name..."
                    className="w-full pl-10 pr-3 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-[13.5px] font-medium text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-primary/30 focus:border-teal-primary transition-all"
                  />
                </div>
              </div>

              {/* Field 4: Filter Button */}
              <div className="md:col-span-3">
                <button
                  type="button"
                  className="w-full py-3 px-5 bg-[#00838D] hover:bg-[#006B75] active:scale-[0.99] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-cta transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filter Doctors</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Find Doctors Results Section Matching User Screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Results Header Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-200/90 mb-7">
          <div className="text-sm sm:text-[15px] text-slate-700">
            Showing{" "}
            <strong className="font-bold text-navy">
              {displayedDoctors.length} Certified {selectedSpecialty.replace(" Surgery", "")} Specialists
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
                <option value="featured">Highest Experience</option>
                <option value="rating">Highest Rating</option>
                <option value="reviews">Most Reviews</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-600 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Doctor Cards (Left) + Official Concierge (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Doctor Cards List */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {displayedDoctors.length === 0 ? (
              <div className="bg-white border border-[#E5EDF4] rounded-2xl p-12 text-center max-w-xl mx-auto">
                <BriefcaseMedical className="w-12 h-12 text-teal-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy mb-2">No matching doctors found</h3>
                <p className="text-xs sm:text-sm text-slate-muted mb-6">
                  Try adjusting your specialty, city or search query to find available specialists.
                </p>
                <button
                  onClick={() => {
                    setSelectedSpecialty("Orthopedic Surgery");
                    setSelectedCity("All India");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 bg-teal-primary text-white text-xs font-semibold rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              displayedDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={(doc) => {
                    setSelectedDoctor(doc);
                    setModalMode("appointment");
                  }}
                  onViewDetails={(doc) => {
                    setSelectedDoctor(doc);
                    setModalMode("details");
                  }}
                />
              ))
            )}
          </div>

          {/* Right Column (4 cols): Official Concierge Form Card (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <OfficialConciergeCard
              prefilledDoctor={selectedDoctor?.name}
            />
          </div>
        </div>
      </section>

      {/* Third Section: Patient Advisory Guide */}
      <DoctorAdvisorySection />

      {/* Interactive Modal for View Details & Book Appointment */}
      <DoctorDetailModal
        doctor={selectedDoctor}
        mode={modalMode}
        onClose={() => {
          setSelectedDoctor(null);
          setModalMode(null);
        }}
      />
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <TopContactBar />
      <MainHeader />

      {/* Directory Page Wrapped in Suspense */}
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">
              Loading medical specialists...
            </div>
          }
        >
          <DoctorsDirectoryContent />
        </Suspense>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
