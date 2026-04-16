"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function CorePrincipleSection() {
  const { t } = useI18n();

  return (
    <section id="core-principle" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.corePrinciple.label}
            title={<>{t.corePrinciple.title}{" "}<span className="text-teal-400">{t.corePrinciple.titleHighlight}</span></>} light />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-teal-500 pl-6 sm:pl-8 py-2">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
                {t.corePrinciple.text}
              </p>
            </div>
            <p className="mt-8 text-base sm:text-lg text-slate-400 leading-relaxed text-center">
              {t.corePrinciple.subtext}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
