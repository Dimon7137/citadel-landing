"use client";

import { ShieldAlert, Bone, Zap, Scissors } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [ShieldAlert, Bone, Zap, Scissors];

export function MarketRelevanceSection() {
  const { t } = useI18n();

  return (
    <section id="market-relevance" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.marketRelevance.label}
            title={<>{t.marketRelevance.title}{" "}<span className="text-teal-400">{t.marketRelevance.titleHighlight}</span></>} light />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-center mb-4">
            {t.marketRelevance.text}
          </p>
          <p className="text-sm text-slate-400 text-center mb-10">
            {t.marketRelevance.subtitle}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {t.marketRelevance.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 hover:border-teal-500/30 transition-all duration-300 h-full flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-300">{item}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
