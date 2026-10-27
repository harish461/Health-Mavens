"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Clock,
  Building2,
  MapPin,
  ShieldCheck,
  Calendar,
  ChevronRight,
} from "lucide-react";

export interface Doctor {
  id: number;
  name: string;
  roleSubtitle: string;
  bio: string;
  badge: string;
  image: string;
  education: string;
  experience: string;
  experienceYearsNum: number;
  hospital: string;
  city: string;
  rating: number;
  reviewsCount: number;
  specialty: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
  onViewDetails: (doctor: Doctor) => void;
}

export default function DoctorCard({
  doctor,
  onBookAppointment,
  onViewDetails,
}: DoctorCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to book a medical consultation with ${doctor.name} (${doctor.roleSubtitle}) at ${doctor.hospital}, ${doctor.city}. Please share availability and estimate.`
  );

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-card hover:border-[#CBDCEB] transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Left: Doctor Photo & Verified Badge */}
        <div className="flex flex-col items-center shrink-0 w-full sm:w-[136px]">
          <div className="relative w-28 h-28 sm:w-[136px] sm:h-[136px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              sizes="(max-width: 640px) 112px, 136px"
              className="object-cover object-top"
              priority={doctor.id <= 2}
            />
          </div>

          {/* Verified Expert Badge */}
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 mt-2.5 rounded-full border border-emerald-300/80 bg-[#E8F8F0] text-emerald-700 text-[11px] font-semibold w-full sm:max-w-[136px] select-none shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="whitespace-nowrap">Verified Expert</span>
          </div>
        </div>

        {/* Right: Doctor Information & Actions */}
        <div className="flex-1 min-w-0 w-full">
          {/* Header Row: Name & Affiliation Badge */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <h3 className="text-[20px] sm:text-[21px] font-medium text-navy tracking-tight leading-snug">
              {doctor.name}
            </h3>

            {/* Specialty / Affiliation pill */}
            <span className="self-start inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF8EB] text-[#A16207] border border-[#F3E2B8] whitespace-nowrap shadow-2xs">
              {doctor.badge}
            </span>
          </div>

          {/* Role Subtitle */}
          <p className="text-xs sm:text-[13.5px] font-semibold text-[#00838D] mt-1 leading-snug">
            {doctor.roleSubtitle}
          </p>

          {/* Bio paragraph */}
          <p className="text-[14px] sm:text-[13px] text-slate-600 mt-2.5 leading-relaxed">
            {doctor.bio}
          </p>

          {/* Divider */}
          <div className="border-t border-slate-100 my-4" />

          {/* Details Grid (Edu, Exp, Hosp, City) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-[13px] text-slate-700">
            {/* Education */}
            <div className="flex items-center gap-2 min-w-0">
              <GraduationCap className="w-4 h-4 text-teal-primary shrink-0" />
              <p className="truncate">
                <span className="font-bold text-navy">Edu: </span>
                <span className="text-slate-600">{doctor.education}</span>
              </p>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 min-w-0">
              <Clock className="w-4 h-4 text-teal-primary shrink-0" />
              <p className="truncate">
                <span className="font-bold text-navy">Exp: </span>
                <span className="text-slate-600">{doctor.experience}</span>
              </p>
            </div>

            {/* Hospital */}
            <div className="flex items-center gap-2 min-w-0">
              <Building2 className="w-4 h-4 text-teal-primary shrink-0" />
              <p className="truncate">
                <span className="font-bold text-navy">Hosp: </span>
                <span className="text-slate-600">{doctor.hospital}</span>
              </p>
            </div>

            {/* City */}
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="w-4 h-4 text-teal-primary shrink-0" />
              <p className="truncate">
                <span className="font-bold text-navy">City: </span>
                <span className="text-slate-600">{doctor.city}</span>
              </p>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
            {/* View Details Link */}
            <button
              type="button"
              onClick={() => onViewDetails(doctor)}
              className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-teal-primary transition-colors group cursor-pointer"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-primary group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {/* Book Appointment Button */}
              <button
                type="button"
                onClick={() => onBookAppointment(doctor)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#006D77] hover:bg-[#005B63] active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              {/* WhatsApp Consultation Button */}
              <a
                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.98] text-white text-xs sm:text-[13px] font-semibold rounded-lg shadow-xs transition-all"
              >
                {/* Clean WhatsApp SVG Icon */}
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.631-.929-2.233-.244-.587-.492-.507-.677-.516l-.578-.01c-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.23 3.109.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.51 2 2.025 6.485 2.025 12.015c0 1.874.52 3.633 1.427 5.144L2 22l4.98-1.305a9.98 9.98 0 0 0 5.06 1.34h.004c5.526 0 10.015-4.485 10.015-10.015A10.007 10.007 0 0 0 12.04 2z" />
                </svg>
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
