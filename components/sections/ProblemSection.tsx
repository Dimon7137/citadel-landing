"use client";

import { Biohazard, Flame, Target } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const icons = [Biohazard, Flame, Target];

export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section id="problem" className="relative z-0 py-20 md:py-28 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-surgical-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(14,165,169,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.problem.label}
            title={<>{t.problem.title}{" "}<span className="text-teal-400">{t.problem.titleHighlight}</span></>} light />
        </AnimatedSection>

        {/* Intro paragraph — surgeon voice */}
        <AnimatedSection delay={0.05}>
          <p className="text-center text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-10 md:mb-14">
            {t.problem.intro}
          </p>
        </AnimatedSection>

        {/* 3 patient archetypes */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {t.problem.items.map((item, i) => {
            const Icon = icons[i] ?? Biohazard;
            return (
              <StaggerItem key={i}>
                <div className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-red-500/30 transition-all duration-300 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-300 leading-snug">{item}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Market anchor plate */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-teal-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-5">
              {t.problem.marketStats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left border-l-0 sm:border-l-2 sm:border-teal-500/40 sm:pl-5 first:border-l-0 first:pl-0">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-1.5 tracking-tight">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-slate-400 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center italic">{t.problem.sourcesNote}</p>
          </div>
        </AnimatedSection>

        {/* Closing line — bridge to evergreen market */}
        <AnimatedSection delay={0.15}>
          <p className="text-center text-sm sm:text-base text-slate-400 italic leading-relaxed max-w-3xl mx-auto mt-8">
            {t.problem.closingLine}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
