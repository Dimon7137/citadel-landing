"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const TEASER_LANGS = [
  { code: "en", label: "🇬🇧 English",    file: "/citadel-landing/citadel-teaser-en.pdf" },
  { code: "uk", label: "🇺🇦 Українська", file: "/citadel-landing/citadel-teaser-uk.pdf" },
  { code: "ru", label: "🇷🇺 Русский",    file: "/citadel-landing/citadel-teaser-ru.pdf" },
  { code: "es", label: "🇪🇸 Español",    file: "/citadel-landing/citadel-teaser-es.pdf" },
  { code: "de", label: "🇩🇪 Deutsch",    file: "/citadel-landing/citadel-teaser-de.pdf" },
  { code: "fr", label: "🇫🇷 Français",   file: "/citadel-landing/citadel-teaser-fr.pdf" },
];

export function HeroSection() {
  const { t } = useI18n();
  const [langPickerOpen, setLangPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!langPickerOpen) return;
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setLangPickerOpen(false);
      }
    };
    const keyHandler = (e: KeyboardEvent) => { if (e.key === "Escape") setLangPickerOpen(false); };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    return () => { document.removeEventListener("mousedown", handler); document.removeEventListener("keydown", keyHandler); };
  }, [langPickerOpen]);

  return (
    <section
      id="hero"
      className="relative z-0 flex items-center overflow-hidden pt-20 pb-16"
      style={{ minHeight: "100dvh", background: "linear-gradient(135deg, #0a1628 55%, #0d1f3c 55%)" }}
    >
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left — text */}
          <div className="text-left">
            <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm text-teal-300/70 font-medium tracking-wide mb-5">
              {t.hero.positioningLine}
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
              {t.hero.title}{" "}
              <span className="text-teal-400 glow-text-teal">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
              {t.hero.badges.map((badge) => (
                <span key={badge} className="text-[10px] sm:text-xs font-medium text-teal-300/80 border border-teal-500/20 rounded-full px-2 sm:px-3.5 py-1 sm:py-1.5 bg-teal-900/20">
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3">
              <Button size="xl" onClick={scrollToContact}
                className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white rounded-lg px-8 shadow-[0_0_30px_rgba(14,165,169,0.25)] hover:shadow-[0_0_40px_rgba(14,165,169,0.4)] transition-all group">
                {t.cta.requestMeeting}
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div ref={pickerRef} className="relative w-full sm:w-auto">
                <Button size="xl" variant="ghost" onClick={() => setLangPickerOpen((v) => !v)}
                  className="w-full rounded-lg border border-slate-600 text-slate-300 px-8 hover:bg-teal-500/10 hover:border-teal-500/40 hover:text-white transition-all">
                  <Download className="mr-1.5 w-4 h-4" />
                  {t.cta.downloadTeaser}
                  <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${langPickerOpen ? "rotate-180" : ""}`} />
                </Button>
                <AnimatePresence>
                  {langPickerOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full mb-2 left-0 sm:left-auto sm:right-0 w-full sm:w-52 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
                      {TEASER_LANGS.map((lang) => (
                        <a key={lang.code} href={lang.file} target="_blank" rel="noopener noreferrer"
                          onClick={() => setLangPickerOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-300 hover:bg-teal-500/10 hover:text-white transition-colors">
                          {lang.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right — bone with scanner */}
          <motion.div initial={{ opacity: 0, scale: 0.95, x: 32 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center order-first md:order-last min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">

            {/* Scan line */}
            <motion.div
              animate={{ top: ["10%", "75%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[10%] right-[10%] h-[2px] z-20 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(14,165,169,0.6), transparent)",
                boxShadow: "0 0 20px rgba(14,165,169,0.4)",
              }}
            />

            {/* Floating bone with bottom fade */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
              style={{
                maskImage: "linear-gradient(to bottom, black 65%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 95%)",
              }}
            >
              <img src="/citadel-landing/hero-bone.png" alt={t.hero.imageAlt}
                className="object-contain drop-shadow-[0_0_40px_rgba(14,165,169,0.2)]"
                style={{ maxHeight: "clamp(300px, 65dvh, 700px)" }} />
            </motion.div>

            {/* Glow at bottom */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[45%] h-[100px] bg-teal-400/12 blur-[70px] rounded-full pointer-events-none z-20" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
