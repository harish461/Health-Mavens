"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Globe,
  ChevronDown,
  Check,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "fr", label: "Français (French)" },
  { code: "sw", label: "Kiswahili (Swahili)" },
  { code: "ru", label: "Русский (Russian)" },
];

export default function MobileNavigation({
  isOpen,
  onClose,
  navItems,
}: MobileNavigationProps) {
  const [selectedLang, setSelectedLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 transform transition-transform duration-300 ease-out">
        {/* Header inside drawer */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 aspect-[1024/944]">
              <Image
                src="/images/health-mavens-logo.jpg"
                alt="Health Mavens Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-navy text-base">Health Mavens</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-primary"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-2">
          {/* Language Selector in Drawer */}
          <div className="mb-4 pb-4 border-b border-slate-100">
            <label className="block text-[11px] font-bold text-slate-muted uppercase tracking-wider mb-1.5">
              Select Language
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-navy hover:bg-slate-100 transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-primary" />
                  <span>{selectedLang}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div
                  role="listbox"
                  className="mt-1.5 w-full bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 space-y-0.5"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.label.split(" ")[0]);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-teal-soft/60 transition-colors ${
                        selectedLang === lang.label.split(" ")[0]
                          ? "text-teal-primary font-bold bg-teal-soft/40"
                          : "text-slate-700"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {selectedLang === lang.label.split(" ")[0] && (
                        <Check className="w-3.5 h-3.5 text-teal-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`block px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all ${
                  item.active
                    ? "bg-teal-soft text-teal-primary font-semibold border-l-4 border-teal-primary"
                    : "text-slate-body hover:bg-slate-50 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Direct Actions in Drawer */}
          <div className="pt-5 space-y-2.5">
            {/* Get Free Quote CTA */}
            <a
              href="#quote-form"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-primary hover:bg-teal-dark active:scale-[0.99] text-white font-semibold rounded-xl shadow-cta transition-all text-sm"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct Call Now Button */}
            <a
              href="tel:+18005550199"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-navy font-bold rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-teal-primary" />
              <span>Call +1 (800) 555-0199</span>
            </a>
          </div>

          {/* Quick Contact & Support Info */}
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-3 text-xs text-slate-muted">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-teal-primary shrink-0" />
              <a
                href="mailto:contact@healthmavens.com"
                className="hover:text-teal-primary font-medium"
              >
                contact@healthmavens.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-teal-primary shrink-0" />
              <span>Available 24/7 Global Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
