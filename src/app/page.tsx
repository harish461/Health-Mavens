import React from "react";
import TopContactBar from "@/components/layout/TopContactBar";
import MainHeader from "@/components/layout/MainHeader";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import MedicalExcellenceSection from "@/components/home/MedicalExcellenceSection";
import PatientRoadmapSection from "@/components/home/PatientRoadmapSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import MainFooter from "@/components/layout/MainFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Two-Level Header matching reference screenshot */}
      <TopContactBar />
      <MainHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Stats & Accreditations (Matching attached design) */}
        <StatsSection />

        {/* Section 3: Comprehensive Care - Our Services (Matching attached design) */}
        <ServicesSection />

        {/* Section 4: Medical Excellence - Specialized Healthcare Facilities & Professionals */}
        <MedicalExcellenceSection />

        {/* Section 5: Patient Roadmap - Your Easy Treatment Journey */}
        <PatientRoadmapSection />

        {/* Section 6: Real Experiences - Patient Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Helpful Answers - FAQ's About Medical Tourism */}
        <FaqSection />

        {/* Section 8: Urgent Second Opinion CTA Banner */}
        <CtaBannerSection />
      </main>

      {/* Main Footer with 4-Column Layout & Medical Disclaimer */}
      <MainFooter />
    </div>
  );
}
