"use client";

import { Bone, ShieldAlert, Wrench, ArrowUpRight, Layers, Zap, Scissors } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const fitsIcons = [Bone, ShieldAlert, Wrench];
const extendsIcons = [ArrowUpRight, Layers];
const marketIcons = [ShieldAlert, Bone, Zap, Scissors];

export function PortfolioFitSection() {
  const { t } = useI18n();

  return (
    <section id="portfolio-fit" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.portfolioFit.label}
            title={<>{t.portfolioFit.title}{" "}<span className="text-teal-600">{t.portfolioFit.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-6xl mx-auto">
          {/* Left — Portfolio Fit */}
          <AnimatedSection direction="left">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              {t.portfolioFit.fitsLabel}
            </p>
            <StaggerContainer className="space-y-3 mb-8">
              {t.portfolioFit.fitsItems.map((item, i) => {
                const Icon = fitsIcons[i];
                return (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3 bg-teal-50 border border-teal-200 rounded-lg px-4 py-3">
                      <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              {t.portfolioFit.extendsLabel}
            </p>
            <StaggerContainer className="space-y-3">
              {t.portfolioFit.extendsItems.map((item, i) => {
                const Icon = extendsIcons[i];
                return (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                      <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-sm font-medium text-slate-600">{item}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>

          {/* Right — Market Relevance */}
          <AnimatedSection direction="right">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              {t.marketRelevance.label}
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-2">
              {t.marketRelevance.text}
            </p>
            <p className="text-sm text-slate-500 mb-5">
              {t.marketRelevance.subtitle}
            </p>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.marketRelevance.items.map((item, i) => {
                const Icon = marketIcons[i];
                return (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                      <Icon className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
