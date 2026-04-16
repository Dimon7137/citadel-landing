"use client";

import { Bone, ShieldAlert, Zap, Scissors } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [ShieldAlert, Bone, Zap, Scissors];

export function GapSection() {
  const { t } = useI18n();

  return (
    <section id="gap" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.gap.label}
            title={<>{t.gap.title}{" "}<span className="text-teal-400">{t.gap.titleHighlight}</span></>} light />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            {t.gap.text}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest text-center mb-6">
            {t.gap.appliesLabel}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {t.gap.appliesItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl p-4 hover:border-teal-500/30 transition-all duration-300 h-full flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 leading-snug">{item}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl px-6 py-5 max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base font-semibold text-white">{t.gap.keyLine}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
