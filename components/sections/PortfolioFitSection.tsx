"use client";

import { Bone, ShieldAlert, Wrench, ArrowUpRight, Layers } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { useI18n } from "@/lib/i18n";

const fitsIcons = [Bone, ShieldAlert, Wrench];
const extendsIcons = [ArrowUpRight, Layers];

export function PortfolioFitSection() {
  const { t } = useI18n();

  return (
    <section id="portfolio-fit" className="relative z-0 py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 100% 40%, rgba(14,165,169,0.05) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader label={t.portfolioFit.label}
            title={<>{t.portfolioFit.title}{" "}<span className="text-teal-600">{t.portfolioFit.titleHighlight}</span></>} />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest text-center mb-6">
              {t.portfolioFit.fitsLabel}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {t.portfolioFit.fitsItems.map((item, i) => {
              const Icon = fitsIcons[i];
              return (
                <StaggerItem key={i}>
                  <div className="group bg-teal-50 border border-teal-200 rounded-xl p-5 hover:border-teal-400 hover:shadow-md transition-all duration-300 h-full flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">{item}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection delay={0.2}>
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest text-center mb-6">
              {t.portfolioFit.extendsLabel}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {t.portfolioFit.extendsItems.map((item, i) => {
              const Icon = extendsIcons[i];
              return (
                <StaggerItem key={i}>
                  <div className="group bg-teal-50 border border-teal-200 rounded-xl p-5 hover:border-teal-400 transition-all duration-300 h-full flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
