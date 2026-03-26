"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, Locale, localeNames } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const locales: Locale[] = ["en", "uk", "ru", "es", "de", "fr"];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-md hover:bg-white/5 transition-colors uppercase tracking-wider"
        aria-label="Change language"
      >
        {locale.toUpperCase()}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[#0f172a] border border-slate-700/60 rounded-lg shadow-xl py-1 min-w-[140px] z-[1000]">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                l === locale
                  ? "text-teal-400 bg-teal-500/5"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
