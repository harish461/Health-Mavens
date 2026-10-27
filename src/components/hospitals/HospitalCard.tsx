"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  MapPin,
  ShieldCheck,
  Star,
  Bed,
  Plane,
  ChevronRight,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export interface Hospital {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  city: string;
  address: string;
  airportDistance: string;
  beds: string;
  operationTheatres: string;
  rating: number;
  reviewsCount: number;
  accreditations: string[];
  features: string[];
  specialtyTag: string;
}

interface HospitalCardProps {
  hospital: Hospital;
  onBookEstimate: (hospital: Hospital) => void;
  onViewDetails: (hospital: Hospital) => void;
}

export default function HospitalCard({
  hospital,
  onBookEstimate,
  onViewDetails,
}: HospitalCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to inquire about treatment estimates and doctor appointments at ${hospital.name}, ${hospital.city}. Please assist with official hospital quotation.`
  );

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-card hover:border-[#CBDCEB] transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left: Hospital Exterior Photo & Accreditation Badges */}
        <div className="flex flex-col shrink-0 w-full lg:w-[260px]">
          <div className="relative w-full h-44 sm:h-48 lg:h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
            <Image
              src={hospital.image}
              alt={hospital.name}
              fill
              sizes="(max-width: 1024px) 100vw, 260px"
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority={hospital.id <= 2}
            />
            {/* Top Overlay Badge */}
            <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
              <span className="px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-navy/90 text-white backdrop-blur-xs shadow-xs">
                {hospital.specialtyTag}
              </span>
            </div>
          </div>

          {/* Accreditations Badges */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {hospital.accreditations.map((acc, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8]"
              >
                <ShieldCheck className="w-3 h-3 text-[#A16207]" />
                <span>{acc}</span>
              </span>
            ))}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>International Wing</span>
            </span>
          </div>
        </div>

        {/* Right: Hospital Information & Highlights */}
        <div className="flex-1 min-w-0 w-full">
          {/* Header Row: Name & Rating */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-medium text-navy tracking-tight leading-snug">
                {hospital.name}
              </h3>
              <p className="text-xs sm:text-[13.5px] font-semibold text-[#00838D] mt-0.5">
                {hospital.subtitle}
              </p>
            </div>

            {/* Rating */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold self-start shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{hospital.rating}</span>
              <span className="text-amber-600 font-normal">({hospital.reviewsCount})</span>
            </div>
          </div>

          {/* Address & Airport Distance */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2.5">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#00838D] shrink-0" />
              <span>{hospital.address}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Plane className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{hospital.airportDistance}</span>
            </span>
          </div>

          {/* Metrics Grid (Beds, Operation Theatres, Key Tech) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[#00838D] shrink-0" />
              <div>
                <span className="block text-[10.5px] text-slate-400 font-medium">Capacity</span>
                <strong className="font-bold text-navy">{hospital.beds}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#00838D] shrink-0" />
              <div>
                <span className="block text-[10.5px] text-slate-400 font-medium">Surgical Theatres</span>
                <strong className="font-bold text-navy">{hospital.operationTheatres}</strong>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00838D] shrink-0" />
              <div>
                <span className="block text-[10.5px] text-slate-400 font-medium">Emergency Care</span>
                <strong className="font-bold text-emerald-700">24/7 Trauma Level 1</strong>
              </div>
            </div>
          </div>

          {/* Key Clinical Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600 mb-4">
            {hospital.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00838D] shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Actions Row */}
          <div className="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* View Details Link */}
            <button
              type="button"
              onClick={() => onViewDetails(hospital)}
              className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-teal-primary transition-colors cursor-pointer group"
            >
              <span>View Hospital Profile &amp; Rooms</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-primary group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                type="button"
                onClick={() => onBookEstimate(hospital)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#006D77] hover:bg-[#005B63] active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Cost Estimate</span>
              </button>

              <a
                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.631-.929-2.233-.244-.587-.492-.507-.677-.516l-.578-.01c-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.23 3.109.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.51 2 2.025 6.485 2.025 12.015c0 1.874.52 3.633 1.427 5.144L2 22l4.98-1.305a9.98 9.98 0 0 0 5.06 1.34h.004c5.526 0 10.015-4.485 10.015-10.015A10.007 10.007 0 0 0 12.04 2z" />
                </svg>
                <span>WhatsApp Assistance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
