"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

export function SystemSection() {
  const { t } = useI18n();

  return (
    <section id="system" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 100% 40%, rgba(14,165,169,0.05) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.system.label}
            title={<>{t.system.title}{" "}<span className="text-teal-600">{t.system.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center max-w-6xl mx-auto">
          <AnimatedSection direction="left">
            <div className="max-w-lg">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                {t.system.text}
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                {t.system.subtext}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative flex items-center justify-end">
              <img src="/section4-nobg.png" alt={t.system.imageAlt}
                className="max-h-[550px] object-contain drop-shadow-[0_0_40px_rgba(14,165,169,0.15)]" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
