import React from "react";
import Link from "next/link";
import {
  Building2,
  ChevronRight,
  Activity,
  Brain,
  Eye,
  Wind,
  Bot,
  Heart,
  Droplets,
  Layers,
} from "lucide-react";

interface Department {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function MedicalExcellenceSection() {
  const departments: Department[] = [
    {
      id: 1,
      name: "Orthopedic Surgery",
      description:
        "Joint replacements, arthroscopy, and complex bone trauma reconstructions.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v8" />
          <path d="M8 9l4 2 4-2" />
          <path d="M9 21l3-6 3 6" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Cardiology",
      description:
        "Interventional cardiology, angioplasty, pacemaker and arrhythmia care.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h6.28" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Gynecology",
      description:
        "High-risk obstetrics, laparoscopic fibroid removal, and reproductive care.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v7" />
          <path d="M9 18h6" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Neurology",
      description:
        "Stroke rehabilitation, epilepsy therapies, Parkinson's & movement disorders.",
      icon: <Brain className="w-5 h-5 text-[#00838D]" strokeWidth={2} />,
    },
    {
      id: 5,
      name: "Oncology",
      description:
        "Precision chemotherapy, CyberKnife, Proton beam, & surgical oncology.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Urology",
      description:
        "Laser kidney stone ablation, prostate surgery, and urinary reconstruction.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v6" />
          <path d="M8 9a4 4 0 0 0 8 0V4H8z" />
          <path d="M10 13v5a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-5" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Gastroenterology",
      description:
        "Advanced endoscopy, hepatobiliary interventions, and digestive care.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4v4c0 3 2 5 5 5a4 4 0 0 1 4 4c0 2.5-2 4-5 4-5 0-7-4-7-8V4" />
        </svg>
      ),
    },
    {
      id: 8,
      name: "Eye Surgery",
      description:
        "Femto LASIK, corneal transplants, and retinal vitreous surgeries.",
      icon: <Eye className="w-5 h-5 text-[#00838D]" strokeWidth={2} />,
    },
    {
      id: 9,
      name: "ENT",
      description:
        "Cochlear implants, endoscopic sinus surgery, and vocal cord repair.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
          <path d="M10 9a2 2 0 1 1 4 0c0 2-2 3-2 5" />
        </svg>
      ),
    },
    {
      id: 10,
      name: "Dental Care",
      description:
        "Full-mouth dental implants, maxillofacial surgery, and veneer restorations.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 3C5 3 4 5 4 8c0 4 2 8 3 13 1 0 2-1 3-3 1-2 2-2 2-2s1 0 2 2c1 2 2 3 3 3 1-5 3-9 3-13 0-3-1-5-3-5-2 0-3 2-5 2S9 3 7 3z" />
        </svg>
      ),
    },
    {
      id: 11,
      name: "Cosmetic Surgery",
      description:
        "Rhinoplasty, liposuction, tummy tucks, and facial reconstructive aesthetics.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M12 7c-1 0-2 .5-2 1.5" />
        </svg>
      ),
    },
    {
      id: 12,
      name: "Pediatrics",
      description:
        "Pediatric cardiology, neonatology, and congenital anomaly corrections.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 11.5a1.5 1.5 0 0 1 3 0" />
          <path d="M13 11.5a1.5 1.5 0 0 1 3 0" />
          <path d="M10 15.5c.8.8 2.2.8 3 0" />
        </svg>
      ),
    },
    {
      id: 13,
      name: "Transplant Surgeries",
      description:
        "Living donor liver, kidney, and bone marrow transplant centers.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h4" />
          <path d="M7 12h4" />
          <path d="M7 16h3" />
          <path d="M15 11l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 14,
      name: "Hematology",
      description:
        "Leukemia, lymphoma, sickle cell anemia, and hemophilia programs.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <circle cx="12" cy="14" r="2" />
        </svg>
      ),
    },
    {
      id: 15,
      name: "Pulmonology",
      description:
        "COPD management, bronchoscopy, pulmonary fibrosis, and sleep medicine.",
      icon: <Wind className="w-5 h-5 text-[#00838D]" strokeWidth={2} />,
    },
    {
      id: 16,
      name: "Robotic Orthopedic",
      description:
        "Mako & Cuvis robotic-assisted sub-millimeter accurate knee and hip replacements.",
      icon: <Bot className="w-5 h-5 text-[#00838D]" strokeWidth={2} />,
    },
    {
      id: 17,
      name: "Cardiac Surgery",
      description:
        "Off-pump CABG, heart valve repairs, aortic aneurysms, and LVAD implants.",
      icon: <Heart className="w-5 h-5 text-[#00838D]" strokeWidth={2} />,
    },
    {
      id: 18,
      name: "Neurology and Spine",
      description:
        "Minimally invasive spinal fusion, scoliosis correction, and disc replacements.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="6" x2="19" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="6" y1="18" x2="18" y2="18" />
        </svg>
      ),
    },
    {
      id: 19,
      name: "Nephrology",
      description:
        "Hemodialysis, chronic kidney disease clinics, and pre-transplant workups.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M12 3v17" />
        </svg>
      ),
    },
    {
      id: 20,
      name: "Bariatric Surgery",
      description:
        "Sleeve gastrectomy, Roux-en-Y gastric bypass, and metabolic remission.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="10" r="1.5" />
          <path d="M9 16h6" />
        </svg>
      ),
    },
    {
      id: 21,
      name: "Dermatology",
      description:
        "Skin cancer surveillance, vitiligo graft therapies, and advanced laser aesthetics.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 11v8" />
        </svg>
      ),
    },
    {
      id: 22,
      name: "Robotic Cardiac",
      description:
        "Da Vinci robotic closed-chest bypass surgery and keyhole mitral valve repair.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 18h16" />
          <path d="M7 18l4-7 4 3 3-5" />
          <circle cx="18" cy="9" r="2" />
        </svg>
      ),
    },
    {
      id: 23,
      name: "Vascular Surgery",
      description:
        "Endovascular aneurysm repair (EVAR), diabetic foot rescue, and varicose veins.",
      icon: (
        <svg
          className="w-5 h-5 text-[#00838D]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="12" r="3" />
          <path d="M9 12h11" />
          <path d="M16 8l4 4-4 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="treatments" className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Eyebrow and Right Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-teal-primary font-bold text-xs tracking-wider uppercase mb-2">
              <Building2 className="w-4 h-4 text-teal-primary" />
              <span>ACCREDITED CLINICAL NETWORK</span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-[20px] sm:text-3xl lg:text-[36px] font-medium text-navy tracking-tight leading-snug sm:leading-tight">
              Medical Excellence &ndash; Specialized Healthcare Facilities &amp; Professionals
            </h2>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-base text-slate-body">
              Explore specialized departments with direct access to accredited surgeons and facilities.
            </p>
          </div>

          {/* Top Right Action */}
          <Link
            href="#quote-form"
            className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-teal-primary hover:text-teal-dark transition-colors shrink-0 self-start md:self-end mt-2 md:mt-0 group"
          >
            <span>Request Custom Department</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4-Columns Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-[#FAFCFD] border border-[#E7EDF3] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-card hover:border-[#D5E1ED] hover:bg-white group"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-[#F0F8F8] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#E3F4F3]">
                  {dept.icon}
                </div>

                {/* Department Name */}
                <h3 className="text-[15px] sm:text-base font-medium text-navy tracking-tight mb-2">
                  {dept.id}. {dept.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[12.5px] text-slate-muted leading-relaxed mb-4 min-h-[42px]">
                  {dept.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-[#EDF2F7] flex items-center text-xs font-semibold text-teal-primary">
                <Link
                  href={`/doctors?specialty=${encodeURIComponent(dept.name)}`}
                  className="hover:text-teal-dark hover:underline transition-colors"
                >
                  Find Doctors
                </Link>
                <span className="text-slate-300 mx-2 select-none">|</span>
                <Link
                  href="#quote-form"
                  className="hover:text-teal-dark hover:underline transition-colors"
                >
                  Find Hospitals
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
