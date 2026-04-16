"use client";

import { X } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function LimitationsSection() {
  const { t } = useI18n();

  return (
    <section id="limitations" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.limitations.label}
            title={<>{t.limitations.title}{" "}<span className="text-teal-600">{t.limitations.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{t.limitations.external.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.limitations.external.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">{t.limitations.internal.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.limitations.internal.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-10">
          <div className="bg-slate-100 border border-slate-200 rounded-xl px-6 py-5 max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base font-semibold text-slate-800">{t.limitations.conclusion}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
