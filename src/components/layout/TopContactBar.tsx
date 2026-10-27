"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, Globe, ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "fr", label: "Français (French)" },
  { code: "sw", label: "Kiswahili (Swahili)" },
  { code: "ru", label: "Русский (Russian)" },
];

export default function TopContactBar() {
  const [selectedLang, setSelectedLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="hidden md:block w-full bg-[#0B2345] text-white text-xs sm:text-[13px] border-b border-[#143461] transition-colors relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 sm:h-12 flex items-center justify-between">
        {/* Left Side: Contact & Support Info */}
        <div className="flex items-center space-x-4 md:space-x-7">
          <a
            href="mailto:contact@healthmavens.com"
            className="flex items-center gap-2 text-slate-200 hover:text-[#19B6B0] transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#19B6B0] rounded py-0.5"
            aria-label="Send email to Health Mavens"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#19B6B0] shrink-0" />
            <span className="font-medium tracking-wide">contact@healthmavens.com</span>
          </a>

          <a
            href="tel:+18005550199"
            className="hidden md:flex items-center gap-2 text-slate-200 hover:text-[#19B6B0] transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-[#19B6B0] rounded py-0.5"
            aria-label="Call Health Mavens toll free"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#19B6B0] shrink-0" />
            <span className="font-medium tracking-wide">+1 (800) 555-0199</span>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#19B6B0] shrink-0" />
            <span className="text-slate-300 text-[12px]">Available 24/7 Global Support</span>
          </div>
        </div>

        {/* Right Side: Language Selector & Direct Dial */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 200)}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors py-1 px-1.5 rounded focus:outline-none focus:ring-1 focus:ring-[#19B6B0]"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select preferred language"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#19B6B0]" />
              <span className="font-medium">{selectedLang}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-1 w-44 bg-[#071830] border border-[#17345E] rounded-lg shadow-xl py-1 text-slate-200 z-50 animate-in fade-in zoom-in-95 duration-100"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(lang.label.split(" ")[0]);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#143461] hover:text-white transition-colors ${
                      selectedLang === lang.label.split(" ")[0] ? "text-[#19B6B0] font-semibold" : ""
                    }`}
                  >
                    <span>{lang.label}</span>
                    {selectedLang === lang.label.split(" ")[0] && <Check className="w-3 h-3 text-[#19B6B0]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Phone Hotline */}
          <a
            href="tel:+18005550199"
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#19B6B0] font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-[#19B6B0] rounded py-0.5"
            aria-label="Call priority assistance hotline"
          >
            <Phone className="w-3.5 h-3.5 text-[#19B6B0]" />
            <span className="hidden sm:inline">+1 (800) 555-0199</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
