"use client";

import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Left — Core Principle */}
          <AnimatedSection direction="left">
            <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6 sm:p-8 h-full">
              <div className="border-l-4 border-teal-500 pl-5 py-1 mb-6">
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
                  {t.corePrinciple.text}
                </p>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                {t.corePrinciple.subtext}
              </p>
            </div>
          </AnimatedSection>

          {/* Right — What Changes */}
          <AnimatedSection direction="right">
            <div className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6 sm:p-8 h-full">
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-5">
                {t.whatChanges.subtitle}
              </p>
              <StaggerContainer className="space-y-3">
                {t.whatChanges.items.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 bg-slate-700/20 rounded-lg px-4 py-3">
                      <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-300 leading-snug">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
